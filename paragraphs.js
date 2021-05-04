//const blockid = getUrlVar()["blockid"]
function displayParagraphs(blockid){
const query = [
  "SELECT ?m ?firstZone ?firstLine ?lastLine ?surface ?canvas ?codex",
  "WHERE",
  "{",
  "BIND(<" + blockid + "> AS ?e) .",
  "?e <http://scta.info/property/hasManifestation> ?m .",
  "?m <http://scta.info/property/isOnZone> ?bn .",
  "?bn <http://scta.info/property/isOnZoneOrder> '1' . ",
  "?bn <http://scta.info/property/isOnZone> ?firstZone . ",
  "?firstZone <http://scta.info/property/firstLine> ?firstLine .",
  "?firstZone <http://scta.info/property/lastLine> ?lastLine .",
  "?firstZone <http://scta.info/property/isPartOfSurface> ?surface .",
  "?surface <http://scta.info/property/hasISurface> ?isurface .",
  "?isurface <http://scta.info/property/hasCanvas> ?canvas .",
  "?codex <http://scta.info/property/hasSurface> ?surface .",
  "}"
].join(' ');
const sparqlEndpoint = "https://sparql-docker.scta.info/ds/query";
const paragraphs = []
const resultParagraphs = $.get(sparqlEndpoint, { query: query }, function (data) {
  console.log("data", data)
  const results = data.results.bindings;
  results.forEach((d) => {
    const surfaceShortId = d.surface.value.split("/resource/")[1]
    const firstLine = parseInt(d.firstLine.value);
    const lastLine = parseInt(d.lastLine.value);
    const surface = d.surface.value;
    const canvas = d.canvas.value;
    const codex = d.codex.value;
    const annotationsListUrl = "https://exist.scta.info/exist/apps/scta-app/folio-annotaiton-list-from-simpleXmlCoordinates.xq?surfaceid=" + surfaceShortId + "&coords=loose"
    $.get(annotationsListUrl, (d2) => {
      const annos = d2.resources
      console.log("annos", annos);
      const h = annos[firstLine - 1]
      const fl = annos[firstLine - 1]
      const flcanvas = fl ? fl.on.split("#xywh=")[0] : ""
      const flcanvasShort = flcanvas.split("/")[flcanvas.split("/").length - 1];
      const flcoords = fl ? fl.on.split("#xywh=")[1] : ""
      const y = parseInt(flcoords.split(",")[1])
      const ll = annos[lastLine - 1]
      //const llcanvas = ll ? ll.on.split("#xywh=")[0] : ""
      //const llcanvasShort = llcanvas.split("/")[llcanvas.split("/").length - 1];
      const llcoords = ll ? ll.on.split("#xywh=")[1] : ""
      const lly = llcoords.split(",")[1]
      const llh = llcoords.split(",")[3]
      const llbottom = (parseInt(lly) + parseInt(llh)) - parseInt(y)
      //x widens the column by 10, but only if the x is greater than 10
      const x = parseInt(flcoords.split(",")[0]) > 10 ? parseInt(flcoords.split(",")[0]) - 10 : parseInt(flcoords.split(",")[0])
      //const coords = x + "," + (parseInt(y)) + "," + (parseInt(flcoords.split(",")[2]) + 10) + "," + (parseInt(llbottom) + 50)
      const width = parseInt(flcoords.split(",")[2]) + 10;
      const height = parseInt(llbottom) + 50;
      const imageUrl = h ? h.imageUrl : ""
      
      const paraData = {
        x,
        y,
        width,
        height,
        canvas,
        manifest: "https://scta.info/iiif/codex/" + codex.split("/resource/")[1] + "/manifest",
        surface,
        zoomCenter: { x: x + width / 2, y: y + 50}

      }
      console.log(paraData)
      paragraphs.push(paraData)

      /// real hack move here; right way to do this would be with promises, etc. 

      if (paragraphs.length === results.length) {
        createMiradorObject(paragraphs)
      }



    });
  });
});
}

function createMiradorObject(paragraphs) {
  
  const windows = paragraphs.map((p) => {
    return {
      "manifestId": p.manifest,
      "canvasId": p.canvas
    }
  })
  const manifests = paragraphs.map((p) => {
    return {
      "manifestId": p.manifest
    }
  })
  var miradorInstance = Mirador.viewer({
    id: 'mirador',
    windows: windows,
    window: {
      defaultView: 'single',
      sideBarOpen: false,
      sideBarPanel: "canvas",
      views: [
        { key: 'single', behaviors: ['individuals', 'paged'] },
        { key: 'book', behaviors: ['individuals'] },
        { key: 'scroll', behaviors: ['continuous'] },
        { key: 'gallery' }
      ]
    },
    catalog: manifests

  });
  focusOnArea(miradorInstance, paragraphs)

}
function focusOnArea(miradorInstance, paragraphs) {
  const actions = paragraphs.map((p, idx) => {
    windowid = Object.keys(miradorInstance.store.getState().windows)[idx];
    action = Mirador.actions.updateViewport(windowid, {
      x: p.zoomCenter.x,
      y: p.zoomCenter.y,
      zoom: 1 / p.width
    });
    return action;

  });
  console.log("actions", actions)
  paragraphs.forEach((p, idx) => {
    // Don't do this for real, we just want to wait until the canvas is loaded. This is how an element might do this outside of Mirador plugin chain.
    setTimeout(() => {
      miradorInstance.store.dispatch(actions[idx]);
    }, 5000);
  });


}




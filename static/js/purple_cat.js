
// code created by Erik Fanki via ZDog
// create illo
function init() {
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
      dragRotate: true,
      zoom: 10,
  });
  
  // add head
  let head = new Zdog.Shape({
      path: [
      { x: -5 }, // start at 1st point
      { x:  5 }, // line to 2nd point
    ],
    addTo: illo,
    diameter: 80,
    stroke: 12,
    color: '#6666CD',
      translate: { x: 0, y: 6, z: 0 }, 
  });
  
  let ears = new Zdog.Shape({
    addTo: head,
      path: [
      { x: -2, y: -1 }, // start at top left
      { x:  2, y:  1 }, // line to top right
      { x: -2, y:  1 }, // line to bottom left
    ],
    stroke: 2,
      fill: true, 
  translate: { x: -2, y: -7, z: 0 }, 
  rotate: { y: 90 },
    color: '#343399',
  });
  
  ears.copy({
    translate: { x: 2, y: -7, z: 0 },
  });
  
  let eye = new Zdog.Ellipse({
      radius: 0.5,
    addTo: head,
    stroke: 0.8,
      fill: true, 
    color: '#000',
      translate: { x: -1.2, y: -3, z: 5.5 }, 
      backface: false,
  });
  
  eye.copy({
    translate: { x: 1.2, y: -3, z: 5.5 },
  });
  
  let puff = new Zdog.Ellipse({
      diameter: 4,
      addTo: head,
      stroke: 2,
      fill: true,
      color: '#fff',
      backface: false,
      translate: { x: -2.2, y: 1.5, z: 5.5 }, 
  });
  
  puff.copy({
      translate: { x: 2.2, y: 1.5, z: 5.5 },
  })
  
  let nose = new Zdog.Polygon({
      addTo: head,
    radius: 1,
    sides: 3,
      fill: true,
    stroke: 1,
    color: '#FF9998',
      rotate: { x: Zdog.TAU/2 },
      translate: { x: 0, y: -0.5, z: 7 },
  });
  
  let bodyCat = new Zdog.Cylinder({
    addTo: illo,
    diameter: 20,
    length: 15,
    stroke: false,
    color: '#6666CD',
    backface: '#6666CD',
      rotate: {x: Zdog.TAU/4},
      translate: { x: 0, y: 10, z: 0 },
  });
  
  let body = new Zdog.Cone({
    addTo: illo,
    diameter: 12,
    length: 8,
    stroke: 13,
    color: '#6666CD',
    backface: '#6666CD',
      rotate: {x: Zdog.TAU/4},
      translate: { x: 0, y: 20, z: 0 },
  });
  
  let tail = new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -6, y: -6 },   // start
      { arc: [
        { x:  2, y: -6 }, // corner
        { x:  2, y:  2 }, // end point
      ]},
      { arc: [ // start next arc from last end point
        { x:  2, y:  6 }, // corner
        { x:  6, y:  6 }, // end point
      ]},
    ],
    closed: false,
    stroke: 4,
    color: '#343399',
      translate: { x: -16, y: 24, z: -15 },
      rotate: {x: Zdog.TAU/4},
  });
  
  let longpaw = new Zdog.Shape({
      path: [
      { y: -3 }, // start at 1st point
      { y:  1 }, // line to 2nd point
    ],
    addTo: illo,
    diameter: 80,
    stroke: 3,
    color: '#fff',
      translate: { x: -1, y: 22, z: 12 }, 
      rotate: {x: Zdog.TAU/16},
  });
  let shortpaw = new Zdog.Shape({
      path: [
      { y: -3 }, // start at 1st point
      { y: -2 }, // line to 2nd point
    ],
    addTo: illo,
    diameter: 80,
    stroke: 3,
    color: '#fff',
      translate: { x: 4, y: 22, z: 12 }, 
      rotate: {x: Zdog.TAU/16},
  });
  
  let comp_base = new Zdog.Rect({
    addTo: illo,
    width: 10,
    height: 20,
    stroke: 2,
      fill: true,
    color: '#343399',
      rotate: {x: Zdog.TAU/4, z: Zdog.TAU/4},
      translate: { x: 0, y: 26, z: 18 }, 
  });
  
  comp_base.copy({
      rotate: {z: Zdog.TAU/4},
      color: '#000',
      translate: { x: 0, y: 19, z: 23 }, 
  })
  
  
  /* RENDERING STUFF ------------- */
  
  // update & render
  illo.updateRenderGraph();
  
  function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  
  animate();
};
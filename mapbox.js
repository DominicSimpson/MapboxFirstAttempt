console.log('Hello world!');

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2N0b3BoaW4iLCJhIjoiY2s1MmtzMnFwMDllYjNtcW43bzZmZnpyNyJ9.w6pj26TwKy5wqaCQN69sFg';

const map = new mapboxgl.Map({
  container: 'map', // container ID

  style: 'mapbox://styles/mapbox/streets-v9',

  center: [-91.874, 42.76],

  zoom: 12,
});

const draw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true,
  },
  defaultMode: 'draw_polygon',
});
map.addControl(draw);

map.on('draw.create', updateArea);
map.on('draw.delete', updateArea);
map.on('draw.update', updateArea);


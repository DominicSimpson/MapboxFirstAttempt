console.log('Hello world!');

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2N0b3BoaW4iLCJhIjoiY2s1MmtzMnFwMDllYjNtcW43bzZmZnpyNyJ9.w6pj26TwKy5wqaCQN69sFg';

const map = new mapboxgl.Map({
  container: 'map', // container ID

  style: 'mapbox://styles/mapbox/streets-v11',

  center: [-0.08088, 51.48156],

  zoom: 10,
});

let polygonData = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-0.08088, 51.48156],
        [-0.08088, 51.48156],
        [-0.08088, 51.48156],
        [-0.08088, 51.48156],
      ],
    ],
  },
};

map.on('load', function () {
  map.addSource('polygon', {
    type: 'geojson',
    data: polygonData,
  });

  map.addLayer({
    id: 'polygon-layer',
    type: 'fill',
    source: 'polygon',
    paint: {
      'fill-color': 'rgba(0, 0, 255, 0.5)',
      'fill-outline-color': 'blue',
    },
  });
});

mapboxgl.accessToken = 'pk.eyJ1IjoibGFsMjg0IiwiYSI6ImNsbjNoOWtsaTA4dXEydnJ3ZGJ2eDZlYXUifQ.XWrKoT9FA010dLULeGvP9A';
const map = new mapboxgl.Map({
  container: 'lillian', // container id
  style: 'mapbox://styles/lal284/clod1r3do00s701qph688dzcq', // replace this with your style URL
  center: [-122.4194, 37.7749], // The convention for coordinates is  typically [long, lat]
  zoom: 13,
  pitch: 25
});

map.on('load', function () {
  console.log('My name is Lillian');

map.addSource('restaurantsource',{
  'type': 'vector',
  'url': 'mapbox://lal284.d9vsqgb4'
});

map.addLayer({
'id': 'restaurantLayer',
'type': 'circle',
'source': 'restaurantsource',
'source-layer': 'Restaurant_Scores_-_LIVES_Sta-btjjmy',
'paint':{'circle-color':
    ['step',
					['to-number', ['get', 'inspection_score']],
					'#aaaaaa',
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]}
})
//
// map.on('mouseenter', 'restaurantLayer', (e) => {
// var name = e.features[0]['propoerties']['business_name'];
// var textField)
// })

})

map.on('mouseenter', 'restaurantLayer', (e) => {
        console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
      })
// 	// MORE CODE WILL GO INSIDE HERE
// })


	// map.addLayer({
	// 	'id':'inspection',
	// 	'type':'circle',
	// 	'source':'inspectionLayer',
	// 	'source-layer':'Restaurant_Scores_-_LIVES_Sta-btjjmy',
	// 	'paint':{
	// 		'circle-opacity': 0.3,
	// 		'circle-color': ['step',
  //               ['to-number', ['get', 'inspection_score']],
  //               '#aaaaaa',
  //               45, '#440154',  // (45 - 80)
  //               80, '#3b528b',  // (80 - 85)
  //               85, '#21908d',  // (85 - 90)
  //               90, '#5dc963',  // (90 - 95)
  //               95, '#fde725'   // (95 - 100)
  //               ]
  //       }
	// })

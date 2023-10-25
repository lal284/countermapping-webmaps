var config = {
    style: 'mapbox://styles/lal284/clo31wewu00d301oy72gk9u6p',
    accessToken: 'pk.eyJ1IjoibGFsMjg0IiwiYSI6ImNsbjNoOWtsaTA4dXEydnJ3ZGJ2eDZlYXUifQ.XWrKoT9FA010dLULeGvP9A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Lab 10',
    byline: 'By Lillian Liu (CRP3850)',
    footer: 'Source: https://en.wikipedia.org/wiki/Red_Hook_Houses. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Flooding Introduction',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-74.00597, 40.71427],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Future Flooding Risk',
            description: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-74.00597, 40.71427],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Flood Related Damage in Red Hook, Brooklyn',
            image: 'https://insideclimatenews.org/wp-content/uploads/2017/10/red-hook-flooding_alan-chin-via-bridge.jpg',
            description: 'The Red Hook Houses are public housing complexes in Brooklyn and are the largest housing development in Brooklyn. It was completed in 1939 and can house up to 6,600 residents. After Hurricane Sandy in 2012, the apartments were under 6 feet of flood water and residents lost power and fresh water. They are still recovering to this day.',
            location: {
                center: [-74.0083, 40.6734],
                zoom: 14.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'Housing_Layer', opacity: 1}],
            onChapterExit: [{layer: 'Housing_Layer', opacity: 0}]
        }

    ]
};

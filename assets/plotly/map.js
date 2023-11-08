(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/european-union.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.

const data = [
    ['be', 23.5],  // Belgium
    ['bg', 18.2],  // Bulgaria
    ['cz', 30.1],  // Czechia
    ['dk', 39.6],  // Denmark
    ['de', 25.0],  // Germany
    ['ee', 33.3],  // Estonia
    ['ie', 38.4],  // Ireland
    ['gr', 12.1],  // Greece
    ['es', 25.6],  // Spain
    ['fr', 20.7],  // France
    ['hr', 25.1],  // Croatia
    ['it', 18.9],  // Italy
    ['cy', 25.0],  // Cyprus
    ['lv', 27.5],  // Latvia
    ['lt', 26.0],  // Lithuania
    ['lu', 22.7],  // Luxembourg
    ['hu', 22.6],  // Hungary
    ['mt', 28.4],  // Malta
    ['nl', 20.8],  // Netherlands
    ['at', 40.2],  // Austria
    ['pl', 27.7],  // Poland
    ['pt', 23.7],  // Portugal
    ['ro', 21.6],  // Romania
    ['si', 30.3],  // Slovenia
    ['sk', 27.7],  // Slovakia
    ['fi', 41.4],  // Finland
    ['se', 35.1],  // Sweden
    ['is', 43.1],  // Iceland
    ['no', 41.8],  // Norway
    ['ch', 34.2],  // Switzerland
    ['gb', 29.0],  // United Kingdom
    ['me', 24.7],  // Montenegro
    ['mk', 19.4],  // North Macedonia
    ['al', 4.3],   // Albania
    ['rs', 14.5],  // Serbia
    ['tr', 19.1],  // Türkiye
    ['xk', 26.2]   // Kosovo
];


    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology,
            marginLeft: 0,   // Remove left margin
            marginRight: 0,  // Remove right margin
            //marginTop: 0,    // Remove top margin
            marginBottom: 100, // Remove bottom margin
            //width: 800,   // Set the width
            //height: 600, // Set the height
        },

        title: {
            text: ''
        },

        subtitle: {
            text: 'Percentage of high job satisfaction'
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 20,
            max: 35, // Maximum value for the color scale
            //type: 'logarithmic'
        },
/*
        tooltip: {
            formatter: function () {
                return '<b>Country:</b> ' + this.point.name + '<br>' +
                    '<b>Value:</b> ' + this.point.value;
            },
*/

        exporting: {
            enabled: false, // Disable the export button
        },

        credits: {
            enabled: false, // Hide the "Highcharts.js" credit text
        },

        series: [{
            data: data,
            name: 'Percentage with high job Satisfaction',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.value}'
            }
        }]
    });

})();

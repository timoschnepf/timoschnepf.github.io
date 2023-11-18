(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/custom/european-union.topo.json'
  ).then(response => response.json());

const data = [
    // Format: [countryCode, value, germanName]
    ['mt', 75, 'Malta'],           // Malta
    ['se', 69, 'Schweden'],        // Sweden
    ['ch', 66, 'Schweiz'],         // Switzerland
    ['dk', 65, 'Dänemark'],        // Denmark
    ['lv', 58, 'Lettland'],        // Latvia
    ['lt', 58, 'Litauen'],         // Lithuania
    ['ee', 58, 'Estland'],         // Estonia
    ['at', 55, 'Österreich'],      // Austria
    ['it', 53, 'Italien'],         // Italy
    ['no', 52, 'Norwegen'],        // Norway
    ['si', 51, 'Slowenien'],       // Slovenia
    ['be', 50, 'Belgien'],         // Belgium
    ['cz', 49, 'Tschechien'],      // Czechia
    ['ie', 49, 'Irland'],          // Ireland
    ['es', 47, 'Spanien'],         // Spain
    ['is', 46, 'Island'],          // Iceland
    ['gb', 46, 'Vereinigtes Königreich'], // United Kingdom
    ['hu', 46, 'Ungarn'],          // Hungary
    ['cy', 43, 'Zypern'],          // Cyprus
    ['gr', 42, 'Griechenland'],    // Greece
    ['pl', 42, 'Polen'],           // Poland
    ['hr', 42, 'Kroatien'],        // Croatia
    ['fr', 38, 'Frankreich'],      // France
    ['sk', 35, 'Slowakei'],        // Slovakia
    ['fi', 33, 'Finnland'],        // Finland
    ['de', 32, 'Deutschland'],     // Germany
    ['nl', 32, 'Niederlande'],     // Netherlands
    ['pt', 31, 'Portugal'],        // Portugal
    ['lu', 30, 'Luxemburg'],       // Luxembourg
    ['ro', 28, 'Rumänien'],        // Romania
    ['bg', 27, 'Bulgarien'],       // Bulgaria
    ['tr', 17, 'Türkei'],          // Türkiye
];


  // Create the chart
  Highcharts.mapChart('container', {
    chart: {
      map: topology,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 100,
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
        tooltip: {
            formatter: function() {
                var germanName = data.find(item => item[0] === this.point['hc-key'])[2];
                return 'Anteil der "sehr  Zufriedenen" in <b>' + germanName + ': ' + this.point.value + '</b> Prozent';
            }
        },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },
    colorAxis: {
      minColor: '#F8FEF8',
      maxColor: '#8FED8F', 
      min: 30,
      max: 50,
    },
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    series: [{
      data: data,
      name: 'Anteil der "sehr zufriedenen" Befragten',
      states: {
        hover: {
          color: '#BADA55',
        },
      },
      dataLabels: {
        enabled: true,
		format: '{point.value}%', 
		},
    }],
  });
})();

(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/custom/europe.topo.json'
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
      margin: [0, 0, 0, 0]
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
                return 'Anteil der "sehr  Zufriedenen" in <br><b>' + germanName + ': ' + this.point.value + '</b> Prozent';
            },
		hideDelay: 0,
    },
        legend: {
            title: {
                text: 'Prozent "sehr zufrieden"'
            },
            //align: 'left',
           // verticalAlign: 'middle',
           y: 0,
            floating: true,
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            borderWidth: 0,
            backgroundColor: 'white',
            x: 0,
            y: 50,
            valueSuffix: ' %',
		},
		mapNavigation: {
		  enabled: false,
		  floating: true,
		  itemMarginTop: 0,
		  buttonOptions: {
			verticalAlign: 'bottom',
		  },
    },
		// Continuous color scheme:
/*    colorAxis: {
      minColor: '#90EE90',
      maxColor: '#006400', 
      min: 30,
      max: 50,
    },
*/
	// For a categorical color scheme:
	colorAxis: {
		dataClasses: [{
			to: 30,
			color: '#90EE90'
		}, {
			from: 30,
			to: 40,
			color: '#32CD32'
		}, {
			from: 40,
			to: 50,
			color: '#228B22'
		}, {
			from: 50,
			color: '#006400'
		}]
	},
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    series: [{
      data: data,
      allAreas: false,	// Only consider countries in the data
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

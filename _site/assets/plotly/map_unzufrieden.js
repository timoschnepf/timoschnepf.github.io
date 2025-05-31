(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/custom/europe.topo.json'
  ).then(response => response.json());

const data = [
    ['mt', 4, 'Malta'],                // Malta
    ['se', 3, 'Schweden'],             // Sweden
    ['ch', 5, 'Schweiz'],              // Switzerland
    ['dk', 5, 'Dänemark'],             // Denmark
    ['lv', 3, 'Lettland'],             // Latvia
    ['lt', 6, 'Litauen'],              // Lithuania
    ['ee', 5, 'Estland'],              // Estonia
    ['at', 5, 'Österreich'],           // Austria
    ['it', 2, 'Italien'],              // Italy
    ['no', 3, 'Norwegen'],             // Norway
    ['si', 5, 'Slowenien'],            // Slovenia
    ['be', 5, 'Belgien'],              // Belgium
    ['cz', 5, 'Tschechien'],           // Czechia
    ['ie', 6, 'Irland'],               // Ireland
    ['es', 7, 'Spanien'],              // Spain
    ['is', 4, 'Island'],               // Iceland
    ['gb', 9, 'Vereinigtes Königreich'], // United Kingdom
    ['hu', 7, 'Ungarn'],               // Hungary
    ['cy', 9, 'Zypern'],               // Cyprus
    ['gr', 13, 'Griechenland'],         // Greece
    ['pl', 7, 'Polen'],                // Poland
    ['hr', 7, 'Kroatien'],             // Croatia
    ['fr', 10, 'Frankreich'],          // France
    ['sk', 11, 'Slowakei'],            // Slovakia
    ['fi', 6, 'Finnland'],             // Finland
    ['de', 8, 'Deutschland'],          // Germany
    ['nl', 3, 'Niederlande'],          // Netherlands
    ['pt', 8, 'Portugal'],             // Portugal
    ['lu', 13, 'Luxemburg'],           // Luxembourg
    ['ro', 12, 'Rumänien'],            // Romania
    ['bg', 13, 'Bulgarien'],           // Bulgaria
    ['tr', 18, 'Türkei'],              // Türkiye
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
                return 'Anteil der "sehr  Unzufriedenen" in <br><b>' + germanName + ': ' + this.point.value + '</b> Prozent';
            },
		hideDelay: 0,
    },
        legend: {
            title: {
                text: 'Prozent "sehr unzufrieden"'
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
			to: 5,
			color: '#FFFF99'
		}, {
			from: 5,
			to: 10,
			color: '#FFD700'
		}, {
			from: 10,
			color: '#FF7F00'
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
      allAreas: false,
      name: 'Anteil der "sehr unzufriedenen" Befragten',
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

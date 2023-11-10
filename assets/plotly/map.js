(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/custom/european-union.topo.json'
  ).then(response => response.json());

  const data = [
    ['mt', 75],   // Malta
    ['se', 69],   // Sweden
    ['ch', 66],   // Switzerland
    ['dk', 65],   // Denmark
    ['lv', 58],   // Latvia
    ['lt', 58],   // Lithuania
    ['ee', 58],   // Estonia
    ['at', 55],   // Austria
    ['it', 53],   // Italy
    ['no', 52],   // Norway
    ['si', 51],   // Slovenia
    ['be', 50],   // Belgium
    ['cz', 49],   // Czechia
    ['ie', 49],   // Ireland
    ['es', 47],   // Spain
    ['is', 46],   // Iceland
    ['gb', 46],   // United Kingdom
    ['hu', 46],   // Hungary
    ['cy', 43],   // Cyprus
    ['gr', 42],   // Greece
    ['pl', 42],   // Poland
    ['hr', 42],   // Croatia
    ['fr', 38],   // France
    ['sk', 35],   // Slovakia
    ['fi', 33],   // Finland
    ['de', 32],   // Germany
    ['nl', 32],   // Netherlands
    ['pt', 31],   // Portugal
    ['lu', 30],   // Luxembourg
    ['ro', 28],   // Romania
    ['bg', 27],   // Bulgaria
    ['tr', 17],   // Türkiye
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

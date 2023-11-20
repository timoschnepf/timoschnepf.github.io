Highcharts.chart('container', {
    chart: {
        type: 'bar',
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['Gesamtindex', 'Sicherheit', 'Einkommen', 'Arbeitszeit', 'Sinnhaftigkeit',  'Sozial/Emotional', 'Körperlichkeit', 'Führung/Kultur', 'Weiterbildung'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Prozent',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        // Updated tooltip configuration
        formatter: function () {
            return '<b><span style="font-size: 10px;">' + this.x + '</b></span><br>Im ' + this.series.name + ' betrug der Index für ' + this.x + '<b> ' + this.y + '</b> Indexpunkte';
        },
        positioner: function (labelWidth, labelHeight, point) {
			return {
			x: point.plotX - labelWidth / 2,
			y: point.plotY + labelHeight + 0
			};
		},
		hideDelay: 1,
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
/*
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
*/
    credits: {
        enabled: false
    },
    series: [{
        name: 'Jahr 2012',
        data: [61, 69, 46, 72, 80, 63, 55, 67, 62]
    }, 
   /* {
        name: 'Jahr 2018',
        data: [63, 75, 49, 76, 66, 58, 68, 66]
    }, */
    {
        name: 'Jahr 2022',
        data: [65, 79, 53, 76, 82, 67, 60, 71, 68]
    }]
});


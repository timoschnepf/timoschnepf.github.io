Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['Insgesamt', 'Sicherheit (ungew.)', 'Einkommen', 'Arbeitszeit', 'Tätigkeit', 'Körperlichkeit', 
        'Betriebsklima', 'Vorgesezte/r', 'Weiterbildung'],
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
            return '<b><span style="font-size: 10px;">' + this.x + '</b></span><br>Im ' + this.series.name + ' gaben <b>' + this.y + '</b> ' + ' Prozent an, sehr zufriden zu sein.';
        },
        positioner: function (labelWidth, labelHeight, point) {
			return {
			x: point.plotX - labelWidth / 3.5,
			y: point.plotY + labelHeight + 0
			};
		},
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
        data: [27, 46, 13, 17, 29, 18, 33, 31, 18]
    }, {
        name: 'Jahr 2018',
        data: [32, 56, 18, 24, 32, 22, 34, 33, 22]
    }]
});

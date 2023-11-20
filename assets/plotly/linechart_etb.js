// Ensure that the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    Highcharts.chart('chart-container', {
        chart: {
            type: 'line',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set background color
        },
        title: {
            text: '',
            style: {
                color: '#333', // Title text color
                fontSize: '16px', // Title font size
                fontWeight: 'bold', // Title font weight
            }
        },
        legend: {
            itemStyle: {
                color: '#666', // Legend item text color
            }
        },
        tooltip: {
            // Updated tooltip configuration
            formatter: function () {
                return 'Im Jahr <b>' + this.x + '</b> lag der Anteil der <br><b>' + this.series.name + 'en</b> Erwerbstätigen bei <b>' + this.y + ' </b>Prozent.<br>';
            },
/*
            positioner: function (labelWidth, labelHeight, point) {
                return {
                    x: point.plotX - labelWidth / 3,
                    y: point.plotY + labelHeight + 0
                };
            },
            */
           positioner: function () {
            return { x: 240, y: -10 };
        },
        shadow: false,
        borderWidth: 0,
		hideDelay: 1,
    },
        xAxis: {
            categories: ['2012', '2018'],
            labels: {
                style: {
                    color: '#333', // X-axis label text color
                }
            }
        },
        yAxis: {
            min: 0,    // Set the minimum value for the y-axis
            max: 70,  // Set the maximum value for the y-axis
            title: {
                text: 'Prozent Erwerbstätige',
                style: {
                    color: '#333', // Y-axis title text color
                }
            },
            labels: {
                style: {
                    color: '#333', // Y-axis label text color
                }
            },
        },
        
        credits: {
            enabled: false, // Remove the credits
        },
        series: [{
            name: 'sehr zufrieden',
            data: [28, 32],
            color: '#90EE90', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
                style: {
                    fontSize: '12px', // Data label font size
                }
            },
            lineDashStyle: 'Solid', // Line type (solid)
        }, {
            name: 'zufrieden',
            data: [64, 59],
            color: '#ADD8E6', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
        }, {
            name: 'weniger zufrieden',
            data: [6, 8],
            color: '#5F9EA0', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
        }, {
            name: 'nicht zufrieden',
            data: [1, 2],
            color: '#F08080', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Data label background color
                    borderRadius: 5, // Data label border radius
                },
                events: {
                    load: function () {
                        if (this.name === 'Gute Arbeit') {
                            this.select();
                        }
                    }
                }
            }
        }
    });
});

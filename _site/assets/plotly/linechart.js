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
                return '<span style="font-size: 10px;">Kategorie: <b>' + this.series.name + '</span></b><br>' + 'Im Jahr <b>' + this.x + '</b> lag der Anteil der <br> Erwerbstätigen bei <b>' + this.y + ' </b>Prozent.<br>';
            },
            positioner: function (labelWidth, labelHeight, point) {
                return {
                    x: point.plotX - labelWidth / 3,
                    y: point.plotY + labelHeight + 0
                };
            },
		hideDelay: 1,
    },
        xAxis: {
            categories: ['2012', '2018', '2022'],
            labels: {
                style: {
                    color: '#333', // X-axis label text color
                }
            }
        },
        yAxis: {
            min: 0,    // Set the minimum value for the y-axis
            max: 40,  // Set the maximum value for the y-axis
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
            name: 'Gute Arbeit',
            data: [8, 13, 15],
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
            name: 'Oberes Mittelfeld',
            data: [33, 36, 40],
            color: '#ADD8E6', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
        }, {
            name: 'Unteres Mittelfeld',
            data: [36, 32, 30],
            color: '#5F9EA0', 
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
        }, {
            name: 'Schlechte Arbeit',
            data: [23, 19, 15],
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

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
        xAxis: {
            categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            labels: {
                style: {
                    color: '#333', // X-axis label text color
                }
            }
        },
        yAxis: {
			min: 40,    // Set the minimum value for the y-axis
			max: 80,  // Set the maximum value for the y-axis
            title: {
                text: '',
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
            name: 'Gesamtindex',
            data: [61, 61, 61, 62, 63, 63, 63, 63, 65, 65, 65],
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
                color: '#333', // Data label text color
                style: {
                    fontSize: '12px', // Data label font size
                }
            },
            lineDashStyle: 'Solid', // Customize line type (solid)
            color: '#FFD700' // Pastel color (Gold)
        }, {
            name: 'Einkommen',
            data: [46, 46, 47, 50, 49, 49, 49, 49, 54, 54, 53],
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
            dashStyle: 'Dot' // or 'Dash' for dashed lines
        }, {
            name: 'Sicherheit',
            data: [69, 69, 70, 72, 73, 74, 75, 75, 77, 79, 79],
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
            dashStyle: 'Dot' // or 'Dash' for dashed lines

        }, {
            name: 'Körperlichkeit',
            data: [55, 55, 56, 57, 57, 58, 58, 57, 58, 59, 60],
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
            dashStyle: 'Dot' // or 'Dash' for dashed lines
        }, {
            name: 'Sozial-Emotional',
            data: [63, 64, 64, 65, 64, 65, 66, 66, 66, 67, 67],
            dataLabels: {
                enabled: true,
                format: '{y}',
                alignTo: 'toPlotEdges',
            },
            dashStyle: 'Dot' // or 'Dash' for dashed lines
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Data label background color
                    borderRadius: 5, // Data label border radius
                }
            }
        },
        
               // Set initial selection for 'Gesamtindex' series
        plotOptions: {
            series: {
                events: {
                    load: function () {
                        if (this.name === 'Gesamtindex') {
                            this.select();
                        }
                      }
                    }
                }
            }
    });
});

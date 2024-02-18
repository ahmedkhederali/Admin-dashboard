import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts'


const Sessions = () => {
    var NewChart =useRef()
  useEffect(() => {

    if (!NewChart.current) {
      return
    }

    var labelColor ="#3F4254";
    var borderColor = "#E4E6EF";
    var maxValue = 18;
    var options = {
        series: [{
            name: 'Sales',
            data: [15, 12, 10, 8, 7]                                                                                                             
        }],           
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            }                             
        },                    
        plotOptions: {
            bar: {
                borderRadius: 8,
                horizontal: true,
                distributed: true,
                barHeight: 50,
                dataLabels: {
                    position: 'bottom'
                }                                                       
            }
        },
        dataLabels: {  
            enabled: true,              
            textAnchor: 'start',  
            offsetX: 0,                 
            formatter: function (val, opts) {
                var valFormatted = (val * 1000).toLocaleString(); 
                return valFormatted;
            },
            
            style: {
                fontSize: '14px',
                fontWeight: '600',
                align: 'left',                                                            
            }                                       
        },             
        legend: {
            show: false
        },                               
        colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],                                                                      
        xaxis: {
            categories: ["USA", "India", 'Canada', 'Brasil', 'France'],
            labels: {
                formatter: function (val) {
                    return val + "K"
                },
                style: {
                    colors: labelColor,
                    fontSize: '14px',
                    fontWeight: '600',
                    align: 'left'                                              
                }                  
            },
            axisBorder: {
                show: false
            }                         
        },
        yaxis: {
            labels: {       
                formatter: function (val, opt) {
                    if (Number.isInteger(val)) {
                        var percentage = parseInt(val * 100 / maxValue).toString(); 
                        return val + ' - ' + percentage + '%';
                    } else {
                        return val;
                    }
                },            
                style: {
                    colors: labelColor,
                    fontSize: '14px',
                    fontWeight: '600'                                                                 
                },
                offsetY: 2,
                align: 'left' 
            }           
        },
        grid: {                
            borderColor: borderColor,                
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: false  
                }
            },
            strokeDashArray: 4              
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return val + 'K';
                }
            }
        }                                 
    };  

  var chart = new ApexCharts(NewChart.current,options)
  if (chart) {
  chart.render()
  }

  return () => {
  if (chart) {
      chart.destroy()
  }
    }
  }, [NewChart]);

  return (
    <div
    ref={NewChart}
    className="h-300px w-100  p-7 "
    style={{ minHeight: 315 }}
    dir='ltr'
  ></div>
  );
};

export default Sessions;

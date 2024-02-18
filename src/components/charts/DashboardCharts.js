import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts'
import StyledDropdown from './../helpers/dropdown/StyledDropdown.js'
import { useTranslation } from 'react-i18next';
import { ReactComponent as Arrow  } from '../../assets/arrow.svg';
import img1 from './../../assets/images/widget.PNG'

import { ReactComponent as DangerArrow  } from '../../assets/dangerArrow.svg';
const DashboardCharts = () => {
    const path = window.location.pathname;    
    const firstChartRef = useRef(null)
    const secondChartRef = useRef(null)
    const thirdChartRef = useRef(null)
    const {t} = useTranslation();
    const options = [
      { label: t('Yearly'), value: 'year' },
      { label: t('Monthly'), value: 'month' },
    ];
    const [option, setOptions] = useState('year');

    useEffect(() => {
      if (!firstChartRef.current) {
        return
      }
  
    var options = {
        series: [{
            name: 'Net Profit',
            data: [35, 25, 45, 15, 60, 50, 57, 35, 70, 40, 45, 25, 45, 30, 70]
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'area',
            height: "125px",
            toolbar: {
                show: false
            }
        },             
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'solid',
            opacity: 0
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 2,
            colors: ["#3F4254"]
        },
        xaxis: {                 
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            },
            crosshairs: {
                position: 'front',
                stroke: {
                    color: "#3F4254",
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            x: {
                formatter: function (val) {
                    return "Impression " + val;
                }
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        },
        colors: ["#F8F5FF"],
        grid: {                 
            strokeDashArray: 4,
            padding: {
                top: 0,
                right: -20,
                bottom: -20,
                left: -20
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        markers: {
            strokeColor: "#3F4254",
            strokeWidth: 2
        }
    }; 
    const chart = new ApexCharts(firstChartRef.current,options)
    if (chart) {
    chart.render()
    }

    return () => {
    if (chart) {
        chart.destroy()
    }
      }
    }, [firstChartRef])


    useEffect(() => {
        if (!secondChartRef.current) {
          return
        }
    
      var options = {
          series: [{
              name: 'Net Profit',
              data: [35, 25, 45, 15, 60, 50, 57, 35, 70, 40, 45, 25, 45, 30, 70]
          }],
          chart: {
              fontFamily: 'inherit',
              type: 'area',
              height: "125px",
              toolbar: {
                  show: false
              }
          },             
          legend: {
              show: false
          },
          dataLabels: {
              enabled: false
          },
          fill: {
              type: 'solid',
              opacity: 0
          },
          stroke: {
              curve: 'smooth',
              show: true,
              width: 2,
              colors: ["#3F4254"]
          },
          xaxis: {                 
              axisBorder: {
                  show: false,
              },
              axisTicks: {
                  show: false
              },
              labels: {
                  show: false
              },
              crosshairs: {
                  position: 'front',
                  stroke: {
                      color: "#3F4254",
                      width: 1,
                      dashArray: 3
                  }
              },
              tooltip: {
                  enabled: true,
                  formatter: undefined,
                  offsetY: 0,
                  style: {
                      fontSize: '12px'
                  }
              }
          },
          yaxis: {
              labels: {
                  show: false
              }
          },
          states: {
              normal: {
                  filter: {
                      type: 'none',
                      value: 0
                  }
              },
              hover: {
                  filter: {
                      type: 'none',
                      value: 0
                  }
              },
              active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                      type: 'none',
                      value: 0
                  }
              }
          },
          tooltip: {
              style: {
                  fontSize: '12px'
              },
              x: {
                  formatter: function (val) {
                      return "Impression " + val;
                  }
              },
              y: {
                  formatter: function (val) {
                      return "$" + val + " thousands"
                  }
              }
          },
          colors: ["#F8F5FF"],
          grid: {                 
              strokeDashArray: 4,
              padding: {
                  top: 0,
                  right: -20,
                  bottom: -20,
                  left: -20
              },
              yaxis: {
                  lines: {
                      show: true
                  }
              }
          },
          markers: {
              strokeColor: "#3F4254",
              strokeWidth: 2
          }
      }; 
      const chart = new ApexCharts(secondChartRef.current,options)
      if (chart) {
      chart.render()
      }
  
      return () => {
      if (chart) {
          chart.destroy()
      }
        }
      }, [secondChartRef])


      useEffect(() => {
        if (!thirdChartRef.current) {
          return
        }
    
        var options = {
          series: [{
              name: 'Sales',
              data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22]
          }],            
          chart: {
              fontFamily: 'inherit',
              type: 'area',
              height: '150px',
              toolbar: {
                  show: false
              }
          },
          plotOptions: {

          },
          legend: {
              show: false
          },
          dataLabels: {
              enabled: false
          },
          fill: {
              type: "gradient",
              gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.7,
              stops: [0, 90, 100]
              }
          },
          stroke: {
              curve: 'smooth',
              show: true,
              width: 3,
              colors: ['#50CD89']
          },
          xaxis: {
              categories: option === 'year' ? 
              ['', '2018', '2019', '2020', '2021', '2022', '2021', '2024', 'Apr 09', '2022', 'Apr 11', 'Apr 12', '2023', 'Apr 14', 'Apr 15', '2024', 'Apr 17', 'Apr 18', ''] :
              ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', ''],
              axisBorder: {
                  show: false,
              },
              axisTicks: {
                  show: false
              },
              tickAmount: 6,
              labels: {
                  rotate: 0,
                  rotateAlways: true,
                  style: {
                      colors: '#A1A5B7',
                      fontSize: '12px'
                  }
              },
              crosshairs: {
                  position: 'front',
                  stroke: {
                      color: '#50CD89',
                      width: 1,
                      dashArray: 3
                  }
              },
              tooltip: {
                  enabled: true,
                  formatter: undefined,
                  offsetY: 0,
                  style: {
                      fontSize: '12px'
                  }
              }
          },
          yaxis: {
              tickAmount: 4,
              max: 24,
              min: 10,
              labels: {
                  style: {
                      colors: '#A1A5B7',
                      fontSize: '12px'
                  },
                  formatter: function (val) {
                      return '$' + val + "K"
                  }
              }
          },
          states: {
              normal: {
                  filter: {
                      type: 'none',
                      value: 0
                  }
              },
              hover: {
                  filter: {
                      type: 'none',
                      value: 0
                  }
              },
              active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                      type: 'none',
                      value: 0
                  }
              }
          },
          tooltip: {
              style: {
                  fontSize: '12px'
              },
              y: {
                  formatter: function (val) {
                      return "$" + val + "K"
                  }
              }
          },
          colors: ['#50CD89'],
          grid: {
              borderColor: '#E4E6EF',
              strokeDashArray: 4,
              yaxis: {
                  lines: {
                      show: true
                  }
              }
          },
          markers: {
              strokeColor: '#50CD89',
              strokeWidth: 3
          }
        }; 
      const chart = new ApexCharts(thirdChartRef.current,options)
      if (chart) {
      chart.render()
      }
  
      return () => {
      if (chart) {
          chart.destroy()
      }
        }
      }, [thirdChartRef, option]);


      const handleDropdownChange = (selectedValue) => {
       setOptions(selectedValue)
      };

  return (
  
       
          <>
          <div className="col-md-6 col-xl-3 g-5 mb-md-5 mb-xxl-10">
            {/*begin::Card widget 8*/}
            <div className="card overflow-hidden h-md-50 mb-5 mb-lg-10">
              {/*begin::Card body*/}
              <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">
                {/*begin::Statistics*/}
                <div className="m-4">
                  {/*begin::Info*/}
                  <div className="d-flex align-items-center mb-2">
                    {/*begin::Currency*/}
                    <span className="fs-4 fw-bold text-gray-400 align-self-start me-1>">
                      $
                    </span>
                    {/*end::Currency*/}
                    {/*begin::Value*/}
                    <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1">
                      69,700
                    </span>
                    {/*end::Value*/}
                    {/*begin::Label*/}
                    <span className="badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center" style={{backgroundColor: "#dfffea", color: '#17c653'}}>
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr067.svg*/}
                        <Arrow />
                      {/*end::Svg Icon*/}2.2%
                    </span>
                    {/*end::Label*/}
                  </div>
                  {/*end::Info*/}
                  {/*begin::Description*/}
                  <span className="fs-6  text-gray-400" style={{fontWeight:600}}>
                    {t('Total Online Sales')}
                  </span>
                  {/*end::Description*/}
                </div>
                {/*end::Statistics*/}
                {/*begin::Chart*/}
                <div
                  id="kt_card_widget_8_chart"
                  className="min-h-auto"
                  style={{ height: 125 }}
                  ref={firstChartRef}
                />
                {/*end::Chart*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card widget 8*/}
            {/*begin::Card widget 5*/}
            <div className="card card-flush h-md-50 mb-lg-10 p-0">
              {/*begin::Header*/}
              <div className=" m-4" >
                {/*begin::Title*/}
                <div className="card-title d-flex flex-column">
                  {/*begin::Info*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Amount*/}
                    <span className="fs-2hx fw-bolder text-dark me-2 lh-1">
                      1,836
                    </span>
                    {/*end::Amount*/}
                    {/*begin::Badge*/}
                    <span
                      className="badge badge-danger fs-6 lh-1 py-1 px-2 d-flex flex-center" 
                      style={{ height: 22, background: '#ffeef3', color: '#f8285a' }}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr068.svg*/}
                       <DangerArrow />
                      {/*end::Svg Icon*/}2.2%
                    </span>
                    {/*end::Badge*/}
                  </div>
                  {/*end::Info*/}
                  {/*begin::Subtitle*/}
                  <span className="text-gray-400 pt-1 fs-6" style={{fontWeight:600}}>
                    {t('Total Sales')}
                  </span>
                  {/*end::Subtitle*/}
                </div>
                {/*end::Title*/}
              </div>
              {/*end::Header*/}
              {/*begin::Card body*/}
              <div className="card-body d-flex align-items-end pt-0">
                {/*begin::Progress*/}
                <div className="d-flex align-items-center flex-column mt-3 w-100 p-3">
                  <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                    <span className="fw-boldest fs-6 text-dark">
                      1,048 {t('to Goal')}
                    </span>
                    <span className="fw-bolder fs-6 text-gray-400">62%</span>
                  </div>
                  <div className="h-8px mx-3 w-100 bg-light-success rounded">
                    <div
                      className=" rounded h-8px"
                      style={{ width: "62%", backgroundColor: '#17c653' }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                {/*end::Progress*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card widget 5*/}
          </div>
          <div className="col-md-6 col-xl-3 g-5 mb-md-5 mb-xxl-10">
            {/*begin::Card widget 9*/}
            <div className="card overflow-hidden h-md-50 mb-5 mb-lg-10 p-1">
              {/*begin::Card body*/}
              <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">
                {/*begin::Statistics*/}
                <div className="m-4">
                  {/*begin::Statistics*/}
                  <div className="d-flex align-items-center mb-2">
                    {/*begin::Currency*/}
                    <span className="fs-4 fw-bold text-gray-400 align-self-start me-1>">
                      $
                    </span>
                    {/*end::Currency*/}
                    {/*begin::Value*/}
                    <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1">
                      29,420
                    </span>
                    {/*end::Value*/}
                    {/*begin::Label*/}
                    <span className="badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center" style={{backgroundColor: "#dfffea", color: '#17c653'}}>
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr067.svg*/}
                      <Arrow />
                      {/*end::Svg Icon*/}2.6%
                    </span>
                    {/*end::Label*/}
                  </div>
                  {/*end::Statistics*/}
                  {/*begin::Description*/}
                  <span className="fs-6 text-gray-400" style={{fontWeight:600}}>
                    {t('Total Online Visitors')}
                  </span>
                  {/*end::Description*/}
                </div>
                {/*end::Statistics*/}
                {/*begin::Chart*/}
                <div
                  id="kt_card_widget_9_chart"
                  className="min-h-auto"
                  style={{ height: 125 }}
                  ref={secondChartRef}
                />
                {/*end::Chart*/}
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card widget 9*/}
            {/*begin::Card widget 7*/}
            <div className="card overflow-hidden h-md-50 mb-5 mb-lg-10 p-1">
              <div className="card-body d-flex justify-content-between flex-column px-0 pb-0">
                <div className="m-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="fs-2hx fw-bolder text-gray-800 me-2 lh-1">
                      {t('Growth')}
                    </span>
                    <StyledDropdown options={options} onChange={handleDropdownChange} />
                  </div>
                </div>
                <div
                  id="kt_card_widget_9_chart"
                  className={`min-h-auto ${localStorage.getItem("Locale") === "ar" ? 'arlang' : ''}`}
                  style={{ height: 125 }}
                  ref={thirdChartRef}
                />
              </div>
            </div>
          </div>
          {path !=="/prediction"  && <div className="col-md-12 col-xl-6 g-x-5 mobile-responsive-overfloverhidden">
          <img src={img1} alt="Dashboard Chart" style={{maxHeight:"589.1px",minWidth:"100%"}}/>
          </div>}
          </>
     
  )
}

export default DashboardCharts
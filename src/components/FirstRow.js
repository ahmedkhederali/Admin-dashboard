import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import ApexCharts from 'apexcharts'
import { ReactComponent as Arrow  } from '../assets/arrow.svg';
import OrginalFilesTable from './OCRComponents/OrginalFilesTable';

const paginatedData = {id:1,userName:"Amr Hossam", fileNo:10, progress:60, date:"24 Jun 2024, 9:30 pm", estimatedTime:"24h",
files:[
    {id:1, fileName:"Team", type:"pdf", progress:60, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:2, fileName:"Team", type:"pdf", progress:33, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:3, fileName:"Team", type:"pdf", progress:44, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:4, fileName:"Team", type:"pdf", progress:90, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    // {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 pm"},
    // {id:5, fileName:"Team", type:"pdf", progress:11, size:"489KB",lastModified:"24 Jun 2024, 9:30 {t('pm')}"},
]
}
const FirstRow = () => {


    const NewChart = useRef(null)
    const {t} = useTranslation();
    
    useEffect(() => {
        if (!NewChart.current) {
          return
        }
    
        var options = {
          series: [{
              name: 'Sales',
              data: [100, 100, 130, 130, 100, 100, 150, 150, 200, 200, 200, 200, 200, 200, 150, 150, 160, 160, 170]
          }],            
          chart: {
              fontFamily: 'inherit',
              type: 'area',
              height: '330px',
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
              colors: ['#7239ea']
          },
          xaxis: {
              categories: ['', 'Apr 02', 'Apr 03', 'May 04', 'Apr 05', 'Apr 06', 'May 07', 'Apr 08', 'Apr 09', 'May 10', 'Apr 11', 'Apr 12', 'May 13', 'Apr 14', 'Apr 15', 'May 16', 'Apr 17', 'Apr 18', ''],
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
                    //   colors: '#A1A5B7',
                      colors: '#fff',
                      fontSize: '12px',
                      
                  }
              },
              crosshairs: {
                  position: 'front',
                  stroke: {
                      color: '#7239ea',
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
              tickAmount: 6,
              max: 250,
              min: 100,
              labels: {
                  style: {
                      colors: '#fff',
                    //   colors: '#A1A5B7',
                      fontSize: '12px'
                  },
                  formatter: function (val) {
                      return  val 
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
                      return   val 
                  }
              }
          },
          colors: ['#7239ea'],
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
              strokeColor: '#7239ea',
              strokeWidth: 3
          }
        }; 
      const chart = new ApexCharts(NewChart.current,options)
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
    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
    <div className="col-xl-4">
      {/*begin::Chart Widget 33*/}
      <div className="card card-flush h-xl-100">
        {/*begin::Header*/}
        <div className="card-header pt-5 mb-6">
          {/*begin::Title*/}
          <h3 className="card-title align-items-start flex-column">
            {/*begin::Statistics*/}
            <div className="d-flex align-items-center mb-2" style={{flexDirection: 'row-reverse'}}>
              {/*begin::Currency*/}
              <span className="fs-3 fw-semibold text-gray-500 align-self-start me-1">
                $
              </span>
              {/*end::Currency*/}
              {/*begin::Value*/}
              <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                3,274.94
              </span>
              {/*end::Value*/}
              {/*begin::Label*/}
              <span className="badge badge-light-success fs-base" style={{marginLeft: '5px'}}>
                <Arrow />
                9.2%
              </span>
              {/*end::Label*/}
            </div>
            {/*end::Statistics*/}
            {/*begin::Description*/}
            <span className="fs-6 fw-semibold text-gray-500">
              {t('Etherium rate')}
            </span>
            {/*end::Description*/}
          </h3>
          {/*end::Title*/}
          {/*begin::Toolbar*/}
          <div className="card-toolbar">
            {/*begin::Menu*/}
            <button
              className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-overflow="true"
            >
              <i className="ki-outline ki-dots-square fs-1 text-gray-500 me-n1" />
            </button>
            {/*begin::Menu 2*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
              data-kt-menu="true"
            >
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                  Quick Actions
                </div>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator mb-3 opacity-75" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link px-3">
                  New Ticket
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link px-3">
                  New Customer
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-start"
              >
                {/*begin::Menu item*/}
                <a href={() => false} className="menu-link px-3">
                  <span className="menu-title">New Group</span>
                  <span className="menu-arrow" />
                </a>
                {/*end::Menu item*/}
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Admin Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Staff Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Member Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link px-3">
                  New Contact
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu separator*/}
              <div className="separator mt-3 opacity-75" />
              {/*end::Menu separator*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <div className="menu-content px-3 py-3">
                  <a className="btn btn-primary  btn-sm px-4" href={() => false}>
                    Generate Reports
                  </a>
                </div>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 2*/}
            {/*end::Menu*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body py-0 px-0">
          {/*begin::Nav*/}
          <ul
            className="nav d-flex justify-content-between mb-3 mx-9"
            role="tablist"
          >
            {/*begin::Item*/}
            <li className="nav-item mb-3" role="presentation">
              {/*begin::Link*/}
              <a
                className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active"
                data-bs-toggle="tab"
                id="kt_charts_widget_33_tab_1"
                href="#kt_charts_widget_33_tab_content_1"
                aria-selected="true"
                role="tab"
              >
                1{t('d')}
              </a>
              {/*end::Link*/}
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="nav-item mb-3" role="presentation">
              {/*begin::Link*/}
              <a
                className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                data-bs-toggle="tab"
                id="kt_charts_widget_33_tab_2"
                href="#kt_charts_widget_33_tab_content_2"
                aria-selected="false"
                tabIndex={-1}
                role="tab"
              >
                5{t('d')}
              </a>
              {/*end::Link*/}
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="nav-item mb-3" role="presentation">
              {/*begin::Link*/}
              <a
                className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                data-bs-toggle="tab"
                id="kt_charts_widget_33_tab_3"
                href="#kt_charts_widget_33_tab_content_3"
                aria-selected="false"
                tabIndex={-1}
                role="tab"
              >
                1{t('m')}
              </a>
              {/*end::Link*/}
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="nav-item mb-3" role="presentation">
              {/*begin::Link*/}
              <a
                className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                data-bs-toggle="tab"
                id="kt_charts_widget_33_tab_4"
                href="#kt_charts_widget_33_tab_content_4"
                aria-selected="false"
                tabIndex={-1}
                role="tab"
              >
                6{t('m')}
              </a>
              {/*end::Link*/}
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="nav-item mb-3" role="presentation">
              {/*begin::Link*/}
              <a
                className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                data-bs-toggle="tab"
                id="kt_charts_widget_33_tab_5"
                href="#kt_charts_widget_33_tab_content_5"
                aria-selected="false"
                tabIndex={-1}
                role="tab"
              >
                1{t('y')}
              </a>
              {/*end::Link*/}
            </li>
            {/*end::Item*/}
          </ul>
          {/*end::Nav*/}
          {/*begin::Tab Content*/}
          <div className="tab-content mt-n6">
            {/*begin::Tap pane*/}
            <div
              className="tab-pane fade active show"
              id="kt_charts_widget_33_tab_content_1"
              role="tabpanel"
              aria-labelledby="kt_charts_widget_33_tab_1"
            >
              {/*begin::Chart*/}
              <div
                ref={NewChart}
                className="h-300px w-100 min-h-auto"
                style={{ minHeight: 315 }}
                ></div>
              {/*end::Chart*/}
              {/*begin::Table container*/}
              <div className="table-responsive mx-9 mt-n6">
                {/*begin::Table*/}
                <table className="table align-middle gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr>
                      <th className="min-w-100px" />
                      <th className="min-w-100px text-end pe-0" />
                      <th className="text-end min-w-50px" />
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          2:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-danger">
                          -139.34
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          3:10 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $3,207.03
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-success">
                          +576.24
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          3:55 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $3,274.94
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-success">
                          +124.03
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*end::Tap pane*/}
            {/*begin::Tap pane*/}
            <div
              className="tab-pane fade "
              id="kt_charts_widget_33_tab_content_2"
              role="tabpanel"
              aria-labelledby="kt_charts_widget_33_tab_2"
            >
              {/*begin::Chart*/}
              <div
                id="kt_charts_widget_33_chart_2"
                data-kt-chart-color="info"
                className="min-h-auto h-200px ps-3 pe-6"
              />
              {/*end::Chart*/}
              {/*begin::Table container*/}
              <div className="table-responsive mx-9 mt-n6">
                {/*begin::Table*/}
                <table className="table align-middle gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr>
                      <th className="min-w-100px" />
                      <th className="min-w-100px text-end pe-0" />
                      <th className="text-end min-w-50px" />
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          2:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-success">
                          +231.01
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          2:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-primary">
                          +233.07
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          2:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,145.55
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-danger">
                          +134.06
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*end::Tap pane*/}
            {/*begin::Tap pane*/}
            <div
              className="tab-pane fade "
              id="kt_charts_widget_33_tab_content_3"
              role="tabpanel"
              aria-labelledby="kt_charts_widget_33_tab_3"
            >
              {/*begin::Chart*/}
              <div
                id="kt_charts_widget_33_chart_3"
                data-kt-chart-color="info"
                className="min-h-auto h-200px ps-3 pe-6"
              />
              {/*end::Chart*/}
              {/*begin::Table container*/}
              <div className="table-responsive mx-9 mt-n6">
                {/*begin::Table*/}
                <table className="table align-middle gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr>
                      <th className="min-w-100px" />
                      <th className="min-w-100px text-end pe-0" />
                      <th className="text-end min-w-50px" />
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          12:40 AM
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,346.25
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-warning">
                          +134.57
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          11:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $1,565.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-danger">
                          +155.03
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          4:25 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-success">
                          +124.03
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*end::Tap pane*/}
            {/*begin::Tap pane*/}
            <div
              className="tab-pane fade "
              id="kt_charts_widget_33_tab_content_4"
              role="tabpanel"
              aria-labelledby="kt_charts_widget_33_tab_4"
            >
              {/*begin::Chart*/}
              <div
                id="kt_charts_widget_33_chart_4"
                data-kt-chart-color="info"
                className="min-h-auto h-200px ps-3 pe-6"
              />
              {/*end::Chart*/}
              {/*begin::Table container*/}
              <div className="table-responsive mx-9 mt-n6">
                {/*begin::Table*/}
                <table className="table align-middle gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr>
                      <th className="min-w-100px" />
                      <th className="min-w-100px text-end pe-0" />
                      <th className="text-end min-w-50px" />
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          3:20 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $3,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-danger">
                          +234.03
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          10:30 AM
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $1,474.04
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-info">-134.03</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          1:30 AM
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-primary">
                          +124.03
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*end::Tap pane*/}
            {/*begin::Tap pane*/}
            <div
              className="tab-pane fade "
              id="kt_charts_widget_33_tab_content_5"
              role="tabpanel"
              aria-labelledby="kt_charts_widget_33_tab_5"
            >
              {/*begin::Chart*/}
              <div
                id="kt_charts_widget_33_chart_5"
                data-kt-chart-color="info"
                className="min-h-auto h-200px ps-3 pe-6"
              />
              {/*end::Chart*/}
              {/*begin::Table container*/}
              <div className="table-responsive mx-9 mt-n6">
                {/*begin::Table*/}
                <table className="table align-middle gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr>
                      <th className="min-w-100px" />
                      <th className="min-w-100px text-end pe-0" />
                      <th className="text-end min-w-50px" />
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          3:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $1,756.25
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-primary">
                          +144.04
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          2:30 {t('PM')}
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,756.26
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-danger">
                          +124.03
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href={() => false} className="text-gray-600 fw-bold fs-6">
                          12:30 AM
                        </a>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="text-gray-800 fw-bold fs-6 me-1">
                          $2,034.65
                        </span>
                      </td>
                      <td className="pe-0 text-end">
                        <span className="fw-bold fs-6 text-success">
                          +184.05
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*end::Tap pane*/}
          </div>
          {/*end::Tab Content*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Chart Widget 33*/}
    </div>
 
    <div className="col-xl-8">
      <div className="card card-flush h-xl-100">
        {/* <div className="card-header pt-7">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-800">
              Active Auctions
            </span>
            <span className="text-gray-500 mt-1 fw-semibold fs-6">
              Updated 37 minutes ago
            </span>
          </h3>
 
        </div> */}
          <OrginalFilesTable requestData={paginatedData}/>          
      </div>
    </div>
  </div>
  )
}

export default FirstRow
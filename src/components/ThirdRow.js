import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'

import { ReactComponent as Dribble  } from '../assets/media/dribbble.svg';
import { ReactComponent as LinkedIn  } from '../assets/media/linkedin.svg';
import { ReactComponent as Slack  } from '../assets/media/slack.svg';
import { ReactComponent as Youtube  } from '../assets/media/youtube.svg';
import { ReactComponent as Instagram  } from '../assets/media/instagram.svg';
import { useTranslation } from 'react-i18next';
import Sessions from './charts/Sessions';
import { ReactComponent as Arrow  } from '../assets/arrow.svg';
import { ReactComponent as DangerArrow  } from '../assets/dangerArrow.svg';

const ThirdRow = () => {
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
                      colors: '#A1A5B7',
                      fontSize: '12px'
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
                      colors: '#A1A5B7',
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
    <div className="row gx-5 gx-xl-10">
  {/*begin::Col*/}
  <div className="col-xxl-4 mb-5 mb-xl-10">
    {/*begin::Chart widget 27*/}
    <div className="card card-flush h-xl-100">
      {/*begin::Header*/}
      <div className="card-header  p-7 orgainc-header">
        {/*begin::Statistics*/}
        <div className="m-0">
          {/*begin::Heading*/}
          <div className="d-flex align-items-center mb-2">
            {/*begin::Title*/}
            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
              35,568
            </span>
            {/*end::Title*/}
            {/*begin::Label*/}
            <span className="badge badge-light-danger fs-base">
              <DangerArrow />
              8.02%
            </span>
            {/*end::Label*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Description*/}
          <span className="fs-6 fw-semibold text-gray-500">
            {t('Organic Sessions')}
          </span>
          {/*end::Description*/}
        </div>
        {/*end::Statistics*/}
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
      <Sessions />
      {/*end::Body*/}
    </div>
    {/*end::Chart widget 27*/}
  </div>
  {/*end::Col*/}

  
  <div className="col-xxl-4 mb-5 mb-xl-10">
    <div className="card card-flush h-xl-100">
      <div className="card-header py-7">
        {/*begin::Statistics*/}
        <div className="m-0">
          {/*begin::Heading*/}
          <div className="d-flex align-items-center mb-2">
            {/*begin::Title*/}
            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
              2,579
            </span>
            {/*end::Title*/}
            {/*begin::Label*/}
            <span className="badge badge-light-success fs-base">
              <Arrow />
              2.2%
            </span>
            {/*end::Label*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Description*/}
          <span className="fs-6 fw-semibold text-gray-500">
            {t('Domain External Links')}
          </span>
          {/*end::Description*/}
        </div>
        {/*end::Statistics*/}
        {/*begin::Toolbar*/}
       
        {/*end::Toolbar*/}
      </div>
      <div className='card-body d-flex justify-content-between flex-column px-0 p-7'>
        <div
          ref={NewChart}
          className="h-300px w-100 min-h-auto"
          style={{ minHeight: 315 }}
        ></div>
        </div>
    </div>
  </div>


  {/*begin::Col*/}
  <div className="col-xxl-4 mb-5 mb-xl-10">
    {/*begin::List widget 9*/}
    <div className="card card-flush h-xl-100">
      {/*begin::Header*/}
      <div className="card-header p-7">
        {/*begin::Statistics*/}
        <div className="m-0">
          {/*begin::Heading*/}
          <div className="d-flex align-items-center mb-2">
            {/*begin::Title*/}
            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
              5,037
            </span>
            {/*end::Title*/}
            {/*begin::Label*/}
            <span className="badge badge-light-success fs-base">
            <Arrow />
              2.2%
            </span>
            {/*end::Label*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Description*/}
          <span className="fs-6 fw-semibold text-gray-500">
            {t('Visits by Social Networks')}
          </span>
          {/*end::Description*/}
        </div>
        {/*end::Statistics*/}
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
      <div className="card-body card-body d-flex justify-content-between flex-column p-7">
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Flag*/}
          <Dribble
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
          {/*end::Flag*/}
          {/*begin::Section*/}
          <div className="d-flex align-items-center flex-stack  flex-row-fluid d-grid gap-2 justify-content-between">
            {/*begin::Content*/}
            <div className="me-5">
              {/*begin::Title*/}
              <a
                href={() => false}
                className="text-gray-800 fw-bold text-hover-primary fs-6"
              >
                {t('Dribbble')}
              </a>
              {/*end::Title*/}
              {/*begin::Desc*/}
              <span className="text-gray-500 fw-semibold fs-7 d-block source-icon  ps-0">
                {t('Community')}
              </span>
              {/*end::Desc*/}
            </div>
            {/*end::Content*/}
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Number*/}
              <span className="text-gray-800 fw-bold fs-4 me-3">579</span>
              {/*end::Number*/}
              {/*begin::Info*/}
              <div className="m-0">
                {/*begin::Label*/}
                <span className="badge badge-light-success fs-base">
                <Arrow />
                  2.6%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-3" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Flag*/}
          <LinkedIn
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
          {/*end::Flag*/}
          {/*begin::Section*/}
          <div className="d-flex align-items-center flex-stack  flex-row-fluid d-grid gap-2 justify-content-between">
            {/*begin::Content*/}
            <div className="me-5">
              {/*begin::Title*/}
              <a
                href={() => false}
                className="text-gray-800 fw-bold text-hover-primary fs-6"
              >
                {t('Linked In')}
              </a>
              {/*end::Title*/}
              {/*begin::Desc*/}
              <span className="text-gray-500 fw-semibold fs-7 d-block source-icon  ps-0">
                {t('Social Media')}
              </span>
              {/*end::Desc*/}
            </div>
            {/*end::Content*/}
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Number*/}
              <span className="text-gray-800 fw-bold fs-4 me-3">1,088</span>
              {/*end::Number*/}
              {/*begin::Info*/}
              <div className="m-0">
                {/*begin::Label*/}
                <span className="badge badge-light-danger fs-base">
                <DangerArrow />
                  0.4%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-3" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Flag*/}
          <Slack
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
          {/*end::Flag*/}
          {/*begin::Section*/}
          <div className="d-flex align-items-center flex-stack  flex-row-fluid d-grid gap-2 justify-content-between">
            {/*begin::Content*/}
            <div className="me-5">
              {/*begin::Title*/}
              <a
                href={() => false}
                className="text-gray-800 fw-bold text-hover-primary fs-6"
              >
                {t("Slack")}
              </a>
              {/*end::Title*/}
              {/*begin::Desc*/}
              <span className="text-gray-500 fw-semibold fs-7 d-block source-icon  ps-0">
                {t('Messanger')}
              </span>
              {/*end::Desc*/}
            </div>
            {/*end::Content*/}
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Number*/}
              <span className="text-gray-800 fw-bold fs-4 me-3">794</span>
              {/*end::Number*/}
              {/*begin::Info*/}
              <div className="m-0">
                {/*begin::Label*/}
                <span className="badge badge-light-success fs-base">
                <Arrow />
                  0.2%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-3" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Flag*/}
          <Youtube
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
          {/*end::Flag*/}
          {/*begin::Section*/}
          <div className="d-flex align-items-center flex-stack  flex-row-fluid d-grid gap-2 justify-content-between">
            {/*begin::Content*/}
            <div className="me-5">
              {/*begin::Title*/}
              <a
                href={() => false}
                className="text-gray-800 fw-bold text-hover-primary fs-6"
              >
                {t('YouTube')}
              </a>
              {/*end::Title*/}
              {/*begin::Desc*/}
              <span className="text-gray-500 fw-semibold fs-7 d-block source-icon  ps-0">
                {t('Video Channel')}
              </span>
              {/*end::Desc*/}
            </div>
            {/*end::Content*/}
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Number*/}
              <span className="text-gray-800 fw-bold fs-4 me-3">978</span>
              {/*end::Number*/}
              {/*begin::Info*/}
              <div className="m-0">
                {/*begin::Label*/}
                <span className="badge badge-light-success fs-base">
                <Arrow />
                  4.1%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-3" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Flag*/}
          <Instagram
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
          {/*end::Flag*/}
          {/*begin::Section*/}
          <div className="d-flex align-items-center flex-stack  flex-row-fluid d-grid gap-2 justify-content-between">
            {/*begin::Content*/}
            <div className="me-5">
              {/*begin::Title*/}
              <a
                href={() => false}
                className="text-gray-800 fw-bold text-hover-primary fs-6"
              >
                {t('Instagram')}
              </a>
              {/*end::Title*/}
              {/*begin::Desc*/}
              <span className="text-gray-500 fw-semibold fs-7 d-block source-icon  ps-0">
                {t('Social Network')}
              </span>
              {/*end::Desc*/}
            </div>
            {/*end::Content*/}
            {/*begin::Wrapper*/}
            <div className="d-flex align-items-center">
              {/*begin::Number*/}
              <span className="text-gray-800 fw-bold fs-4 me-3">1,458</span>
              {/*end::Number*/}
              {/*begin::Info*/}
              <div className="m-0">
                {/*begin::Label*/}
                <span className="badge badge-light-success fs-base">
                <Arrow />
                  8.3%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Info*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Item*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::List widget 9*/}
  </div>
  {/*end::Col*/}
</div>

  )
}

export default ThirdRow
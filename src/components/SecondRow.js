import React from 'react';
import Department from './charts/Department';
import { ReactComponent as Dribble  } from '../assets/media/dribbble.svg';
import { ReactComponent as LinkedIn  } from '../assets/media/linkedin.svg';
import { ReactComponent as Slack  } from '../assets/media/slack.svg';
import { ReactComponent as Youtube  } from '../assets/media/youtube.svg';
import { ReactComponent as Instagram  } from '../assets/media/instagram.svg';
import { ReactComponent as Arrow  } from '../assets/arrow.svg';
import { ReactComponent as DangerArrow  } from '../assets/dangerArrow.svg';
import MyChartComponent from './charts/MyChartComponent';
import { useTranslation } from 'react-i18next';
const SecondRow = () => {
  const {t} = useTranslation();


  return (
    <div className="row gx-5 gx-xl-10">
    {/*begin::Col*/}
    <div className="col-xl-4 mb-5 mb-xl-10">
      {/*begin::List widget 12*/}
      <div className="card card-flush h-xl-100">
        {/*begin::Header*/}
        <div className="card-header p-7">
          {/*begin::Title*/}
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-800">
              {t('Visits by Source')}
            </span>
            <span className="text-gray-500 mt-1 fw-semibold fs-6">
              29.4k {t('visitors')}
            </span>
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
        <div className="card-body p-7">
          {/*begin::Wrapper*/}
          <div className="w-100">
            {/*begin::Item*/}
            <div className="d-flex align-items-center">
              {/*begin::Symbol*/}
              <LinkedIn
                className="me-4 w-30px h-30px"
                style={{ borderRadius: 4 }}
                alt=""
            />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid  justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Direct Source')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                    {t('Direct link clicks')}
                  </span>
                  {/*end::Desc*/}
                </div>
                {/*end::Content*/}
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center">
                  {/*begin::Number*/}
                  <span className="text-gray-800 fw-bold fs-4 me-3">1,067</span>
                  {/*end::Number*/}
                  {/*begin::Info*/}
                  {/*begin::label*/}
                  <span className="badge badge-light-success fs-base">
                    <Arrow />
                    2.6%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-dashed my-3" />
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center ">
              {/*begin::Symbol*/}
              <Youtube
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Social Networks')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                    {t('All Social Channels')}{" "}
                  </span>
                  {/*end::Desc*/}
                </div>
                {/*end::Content*/}
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center">
                  {/*begin::Number*/}
                  <span className="text-gray-800 fw-bold fs-4 me-3">
                    24,588
                  </span>
                  {/*end::Number*/}
                  {/*begin::Info*/}
                  {/*begin::label*/}
                  <span className="badge badge-light-success fs-base">
                  <Arrow />
                    4.1%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-dashed my-3" />
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center">
              {/*begin::Symbol*/}
              <Instagram
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Email Newsletter')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                   {t('Mailchimp Campaigns')}
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
                  {/*begin::label*/}
                  <span className="badge badge-light-success fs-base">
                  <Arrow />
                    0.2%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-dashed my-3" />
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center">
              {/*begin::Symbol*/}
              <Slack
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Referrals')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                    {t('Impact Radius visits')}
                  </span>
                  {/*end::Desc*/}
                </div>
                {/*end::Content*/}
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center">
                  {/*begin::Number*/}
                  <span className="text-gray-800 fw-bold fs-4 me-3">6,578</span>
                  {/*end::Number*/}
                  {/*begin::Info*/}
                  {/*begin::label*/}
                  <span className="badge badge-light-danger fs-base">
                  <DangerArrow />
                    0.4%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-dashed my-3" />
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center">
              {/*begin::Symbol*/}
              
              <Dribble
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Other')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                    {t('Many Sources')}
                  </span>
                  {/*end::Desc*/}
                </div>
                {/*end::Content*/}
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center">
                  {/*begin::Number*/}
                  <span className="text-gray-800 fw-bold fs-4 me-3">
                    79,458
                  </span>
                  {/*end::Number*/}
                  {/*begin::Info*/}
                  {/*begin::label*/}
                  <span className="badge badge-light-success fs-base">
                  <Arrow />
                    8.3%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-dashed my-3" />
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center">
              {/*begin::Symbol*/}
              <Slack
            className="me-4 w-30px h-30px"
            style={{ borderRadius: 4 }}
            alt=""
          />
              {/*end::Symbol*/}
              {/*begin::Container*/}
              <div className="d-flex align-items-center flex-stack d-grid gap-1 flex-row-fluid justify-content-between">
                {/*begin::Content*/}
                <div className="me-5">
                  {/*begin::Title*/}
                  <a
                    href={() => false}
                    className="text-gray-800 fw-bold text-hover-primary fs-6"
                  >
                    {t('Rising Networks')}
                  </a>
                  {/*end::Title*/}
                  {/*begin::Desc*/}
                  <span className="text-gray-500 fw-semibold source-icon  fs-7 d-block ps-0">
                    {t('Social Network')}
                  </span>
                  {/*end::Desc*/}
                </div>
                {/*end::Content*/}
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center">
                  {/*begin::Number*/}
                  <span className="text-gray-800 fw-bold fs-4 me-3">
                    18,047
                  </span>
                  {/*end::Number*/}
                  {/*begin::Info*/}
                  {/*begin::label*/}
                  <span className="badge badge-light-success fs-base">
                  <Arrow />
                    1.9%
                  </span>
                  {/*end::label*/}
                  {/*end::Info*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::List widget 12*/}{" "}
    </div>
    {/*end::Col*/}
    {/*begin::Col*/}
    <div className="col-xl-4 mb-5 mb-xl-10">
      {/*begin::Chart widget 31*/}
      <div className="card card-flush h-xl-100">
        {/*begin::Header*/}
        <div className="card-header p-7 mb-7">
          {/*begin::Title*/}
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-800">
              {t('Warephase stats')}
            </span>
            <span className="text-gray-500 mt-1 fw-semibold fs-6">
              8k {t('social visitors')}
            </span>
          </h3>
          {/*end::Title*/}
          {/*begin::Toolbar*/}
          <div className="card-toolbar">
            <a
              href={() => false}
              className="btn btn-sm btn-light"
            >
              {t('PDF Report')}
            </a>
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body d-flex align-items-end pb-7">
        <MyChartComponent />
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Chart widget 31*/}
    </div>
        <Department />
    
   
  </div>
  ) 
  
};

export default SecondRow;

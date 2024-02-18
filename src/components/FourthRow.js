import React from 'react'
import DashboardCharts from './charts/DashboardCharts';
import Map from './charts/Map';
import { useTranslation } from 'react-i18next';

const FourthRow = () => {
  const {t} = useTranslation();
  return (
  <div className="row g-xl-10 mb-5 gy-md-5">
    <DashboardCharts />
    <div className="col-xl-6 mb-5 mb-lg-10">
      <div className="card card-flush " style={{height:"107%"}}>
        <div className="card-header pt-7">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder text-dark">{t('World Sales')}</span>
            <span className="text-gray-400 pt-2 fw-bold fs-6">
              {t('Top Selling Countries')}
            </span>
          </h3>
          <div className="card-toolbar">
            <button
              className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-overflow="true"
            >
              <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.3"
                    x={2}
                    y={2}
                    width={20}
                    height={20}
                    rx={4}
                    fill="black"
                  />
                  <rect
                    x={11}
                    y={11}
                    width="2.6"
                    height="2.6"
                    rx="1.3"
                    fill="black"
                  />
                  <rect
                    x={15}
                    y={11}
                    width="2.6"
                    height="2.6"
                    rx="1.3"
                    fill="black"
                  />
                  <rect
                    x={7}
                    y={11}
                    width="2.6"
                    height="2.6"
                    rx="1.3"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
              data-kt-menu="true"
            >
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Payments
                </div>
              </div>
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link px-3">
                  Create Invoice
                </a>
              </div>
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link flex-stack px-3">
                  Create Payment
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a target name for future usage and reference"
                  />
                </a>
              </div>
              <div className="menu-item px-3">
                <a href={() => false} className="menu-link px-3">
                  Generate Bill
                </a>
              </div>
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-end"
              >
                <a href={() => false} className="menu-link px-3">
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
                </a>
                <div className="menu-sub menu-sub-dropdown w-175px py-4">

                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Plans
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Billing
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a href={() => false} className="menu-link px-3">
                      Statements
                    </a>
                  </div>
                  <div className="separator my-2" />
                  <div className="menu-item px-3">
                    <div className="menu-content px-3">
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                          name="notifications"
                        />
                        <span className="form-check-label text-muted fs-6">
                          Recuring
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item px-3 my-1">
                <a href={() => false} className="menu-link px-3">
                  Settings
                </a>
              </div>
            </div>
         
          </div>
        </div>
    
        <div className="card-body d-flex flex-center">
          <Map />
        </div>
      </div>
    </div>
  </div>


  )
}

export default FourthRow
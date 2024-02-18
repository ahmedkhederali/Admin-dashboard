import React from 'react'

import { ReactComponent as Book  } from '../assets/book.svg';
import { ReactComponent as Pdf  } from '../assets/pdf.svg';
import { ReactComponent as Arrow  } from '../assets/arrow.svg';
import { ReactComponent as DangerArrow  } from '../assets/dangerArrow.svg';
import { useTranslation } from 'react-i18next';

const ZeroRow = () => {
  const {t} = useTranslation();
  let lang = document.getElementsByTagName('html')[0]?.lang;


  return (
    <div className="card mb-6">
  <div className="card-body p-7 pb-0">
    <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center justify-content-md-between gap-4">
      <div className=" mb-4">
        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative ">
          <Pdf />
        </div>
      </div>
      <div className="flex-grow-1">
        <div className="d-flex flex-wrap flex-stack zero-container">
          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <a
                  href={() => false}
                  className="text-gray-900 text-hover-primary fs-2 fw-bold"
                >
                  {t('File Name')}
                </a>
                <a href={() => false}>
                  <i className="ki-outline ki-verify fs-1 text-primary" />
                </a>
              </div>
              <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                <a
                  href={() => false}
                  className="text-gray-500 text-hover-primary mb-2 text-center"
                >
                  {t('Developer attribute requires a valid value to be accessible')}
                </a>
              </div>

              <div className="d-flex flex-column flex-grow-1 pe-0">
                <div className="d-flex flex-wrap justify-content-start zero-group">
                  <div className="border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3 me-2">
                    <div className="d-flex align-items-center gap-1">
                      <Arrow />
                      <div
                        className="fs-2 fw-bold counted"
                        data-kt-countup="true"
                        data-kt-countup-value={4500}
                        data-kt-countup-prefix="$"
                        data-kt-initialized={1}
                      >
                        $4,500
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-500">{t('Earnings')}</div>
                  </div>
                  <div className="border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3 me-2">
                    <div className="d-flex align-items-center gap-1">
                      <DangerArrow />
                      <div
                        className="fs-2 fw-bold counted"
                        data-kt-countup="true"
                        data-kt-countup-value={80}
                        data-kt-initialized={1}
                      >
                        80
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-500 gap-1">{t('Projects')}</div>
                  </div>
                  <div className="border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                    <div className="d-flex align-items-center gap-1">
                      <Arrow />
                      <div
                        className="fs-2 fw-bold counted"
                        data-kt-countup="true"
                        data-kt-countup-value={60}
                        data-kt-countup-prefix="%"
                        data-kt-initialized={1}
                      >
                        %60
                      </div>
                    </div>
                    <div className="fw-semibold fs-6 text-gray-500">
                      {t('Success Rate')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-xl-flex align-items-center w-200px w-sm-300px flex-column mt-3">
            <Book style={{transform: lang === 'ar' && 'scaleX(-1)'}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ZeroRow
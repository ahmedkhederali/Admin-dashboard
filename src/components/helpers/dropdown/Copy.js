import React from 'react'

const Copy = ({mobile}) => {
  return (
    <div
    id={`close-target2`}
  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px show"
  data-kt-menu="true"
  data-popper-placement="top-end"
  style={ mobile ?
    {
      zIndex: 107,
      // position: 'absolute',
      top: '130px',
      right: '177px',
      inset: "auto 177px 0px auto",
      // transform: "translate(-102px, -114px)"
    } : {
    zIndex: 107,
    position: 'absolute',
    top: '130px',
    right: '177px',
    inset: "auto 177px 0px auto",
    // transform: "translate(-102px, -114px)"
  }}
>
  {/*begin::Card*/}
  <div className="card card-flush">
    <div className="card-body p-4">
      {/*begin::Loader*/}
      <div
        className="d-flex d-none"
        data-kt-filemanger-table="copy_link_generator"
      >
        {/*begin::Spinner*/}
        <div className="me-5" data-kt-indicator="on">
          <span className="indicator-progress">
            <span className="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </div>
        {/*end::Spinner*/}
        {/*begin::Label*/}
        <div className="fs-6 text-gray-900">Generating Share Link...</div>
        {/*end::Label*/}
      </div>
      {/*end::Loader*/}
      {/*begin::Link*/}
      <div
        className="d-flex flex-column text-start"
        data-kt-filemanger-table="copy_link_result"
      >
        <div className="d-flex mb-3">
          <span>{"✔"}</span>
          <div className="fs-6 text-gray-900">Share Link Generated</div>
        </div>
        <input
        id={`close-target2`}
          type="text"
          className="form-control form-control-sm"
          defaultValue="https://path/to/file/or/folder/"
        />
        
      </div>
      {/*end::Link*/}
    </div>
  </div>
  {/*end::Card*/}
</div>

  )
}

export default Copy
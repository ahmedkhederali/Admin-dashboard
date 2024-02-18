import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {ReactComponent as PDF} from "../../assets/pdf.svg"
import Copy from '../helpers/dropdown/Copy';

const ResponsiveOrginalTable = ({paginatedData, handleDeleteRequest}) => {

    const { t } = useTranslation();
    const [copyModel, setCopyModel] = useState(false);
    const myDivRef = useRef(null);
    const [openActions, setOpenActions] = useState(false);

    const handleCloseActions = () => {
      setOpenActions(false);
      setCopyModel(false);
    }

    useEffect(() => {
      const handleClick = (event) => {
        if (myDivRef.current && (myDivRef.current.id !== event.target.id)) {
          setOpenActions(false)
        } 
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);
    
  return (
    <div className="container table-responsive p-4 show-medium-table">
  <div className="row">
    {paginatedData && paginatedData.map((request, index) => (
      <div key={index} className="col-12 mb-4">
        <div className="card" style={{ borderRadius: "13px", padding: '15px' }}>
          <div className="card-body">
            <h5 className="card-title">
              <PDF style={{ width: "20px", height: "20px" }} /> &nbsp;
              {request.fileName}.{request.type}
            </h5>
            <div className="d-flex justify-content-between mb-2">
              <div className="progressSpan custom-td-progress">
                {t("request_completion")}
              </div>
              <div className="custom-td-precentage">{request.progress}%</div>
            </div>
            <div className="h-8px w-100 bg-light-success rounded">
              <div
                className="rounded h-8px"
                role="progressbar"
                style={{
                  width: `${request.progress}%`,
                  backgroundColor: "#17c653",
                }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
              <p>{t("size")}: {request.size}</p>
              <p>{t("last_modified")}: {request.lastModified}</p>
            </div>
            <div className="text-end mt-3">
              <a
              href={() => false}
                id={`close-target2`}
                className="btn btn-light btn-active-light-primary btn-sm custom-td-action actions-btn-mobile"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                onClick={() => {
                  setOpenActions(
                    request.id === openActions ? false : request.id
                  );
                }}
              >
                . . .
                {/* <span className="svg-icon svg-icon-5 m-0 mx-1 custom-td-action">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                      className='custom-td-svg'
                    />
                  </svg>
                </span> */}
              </a>
              <div
                className={
                  request.id === openActions
                    ? "menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4 w-175px custom-td-list"
                    : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                }
                data-kt-menu="true"
                ref={myDivRef}
                id={`close-target2`}
              >
                <div className="menu-item px-3">
                  <a
                  href={() => false}
                    
                    className="menu-link px-3"
                    style={{ textDecoration: "none" }}
                    // onClick={originalFileModal}
                  >
                    {t("show")}
                  </a>
                </div>
                <div className="menu-item px-3">
                  <a
                  href={() => false}
                    
                    className="menu-link px-3"
                    style={{ textDecoration: "none" }}
                  >
                    {t("copy")}
                  </a>
                  {/* {copyModel && <Copy />} */}
                </div>
                <div className="menu-item px-3">
                  <a
                  href={() => false}
                    
                    className="menu-link px-3"
                    data-kt-users-table-filter="delete_row"
                    onClick={() => handleDeleteRequest(request.id)}
                    style={{ textDecoration: "none" }}
                  >
                    {t("delete")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  <ActionsModelDialog isOpen={openActions} onClose={handleCloseActions} allRequests={paginatedData} handleDeleteRequest={handleDeleteRequest} copyModel={copyModel} setCopyModel={setCopyModel}/>
</div>

  )
}

export default ResponsiveOrginalTable


const ActionsModelDialog = ({
  isOpen,
  onClose,
  allRequests,
  handleDeleteRequest,
  copyModel,
  setCopyModel,
}) => {

  const request = allRequests?.find((req) => req.id === isOpen);


  const { t } = useTranslation();

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];

    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "auto";
    }

    return () => {
      bodyElement.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="modal fade show hide-action-modal"
          tabIndex={-1}
          style={{ display: "block", backgroundColor: "rgb(0 0 0 / 59%)" }}
          id={`close-target2`}
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content" style={{ height: "auto" }}>
              {/*begin::Modal header*/}
              <div className="modal-header" id="kt_modal_add_user_header">
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm"
                  data-kt-users-modal-action="close"
                  onClick={onClose}
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        // opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="#99A1B7"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="#99A1B7"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}

              {/*begin::Menu item*/}
              <div className="menu-item px-3" id={`close-target2`}>
                  <a
                  href={() => false}
                    id={`close-target2`}
                    className="menu-link px-3 mobile-action-list"
                    style={{ textDecoration: "none" }}
                    // onClick={originalFileModal}
                  >
                    {t("show")}
                  </a>
                </div>
                <div className="menu-item px-3" id={`close-target2`}>
                  <a
                  href={() => false}
                    id={`close-target2`}
                    className="menu-link px-3 mobile-action-list"
                    onClick={() => setCopyModel(true)}
                    style={{ textDecoration: "none" }}
                  >
                    {t("copy")}
                  </a>
                  {copyModel && 
                    <div id={`close-target2`}>
                      <Copy mobile />
                    </div>
                  }
                </div>
                <div className="menu-item px-3" id={`close-target2`}>
                  <a
                  href={() => false}
                    id={`close-target2`}
                    className="menu-link px-3 mobile-action-list"
                    data-kt-users-table-filter="delete_row"
                    onClick={() => handleDeleteRequest(request.id)}
                    style={{ textDecoration: "none" }}
                  >
                    {t("delete")}
                  </a>
                </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
      )}
    </>
  );
};
import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/charts.css";
import Swal from "sweetalert2";
import {ReactComponent as PDF} from "../../assets/pdf.svg"
import {ReactComponent as Prev} from "../../assets/prvArrow.svg"
import {ReactComponent as Next} from "../../assets/nextArrow.svg"
import Copy from "../helpers/dropdown/Copy";
import { useTranslation } from "react-i18next";
import ResponsiveOrginalTable from "./ResponsiveOrginalTable";

const OrginalFilesTable = ({requestData}) => {

  const { t } = useTranslation();
  const lang = document.getElementsByTagName('html')[0].lang;

  const [RequestsList, setRequestsList] = useState(requestData.files);

  const [openActions, setOpenActions] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const ItemsPerPage = 10;

  const [paginatedData, setPaginatedData] = useState(
    RequestsList?.slice(
      (currentPage - 1) * ItemsPerPage,
      currentPage * ItemsPerPage
    )
  );

  const handlePageChange = (page) => {
    // Add your logic to fetch and display data for the selected page
    setCurrentPage(page);
    setPaginatedData(
      RequestsList?.slice((page - 1) * ItemsPerPage, page * ItemsPerPage)
    );
  };

  const handleDeleteRequest = (id) => {
    const requestdata = RequestsList.find((request) => request.id === id);

    Swal.fire({
      // title: "Are you sure?",
      text: `${t('Are you sure You want to delete')} ${requestdata.fileName}.${requestdata.type} ${lang === 'en' ? '?' : '؟'}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${t("Yes, delete")}!`,
      cancelButtonText: `${t("No, cancel")}`
    }).then((result) => {
      if (result.isConfirmed) {
        let newRequestdata = RequestsList.filter(
          (request) => request.id !== id
        );
        setRequestsList(newRequestdata);
        setPaginatedData(
          newRequestdata?.slice(
            (currentPage - 1) * ItemsPerPage,
            currentPage * ItemsPerPage
          )
        );

        Swal.fire({
          // title: "Deleted!",
          confirmButtonText: `${t('Ok, got it')}!`,
          text: `${t('You have deleted')} ${requestdata.fileName}.${requestdata.type} .`,
          icon: "success"
        });
      }
    });
  };
  const myDivRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (myDivRef.current && (myDivRef.current.id !== event.target.id)) {
        setOpenActions(false)
        setCopyModel(false)
        
      } 
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = () => {
    setOpenActions(false);
    setModalOpen(!isModalOpen);
  };

  const [copyModel, setCopyModel] = useState(false);

  const handleCopy = (e) => {
    setCopyModel(true);
  }

  return (
    <div className="">
      <div className="content flex-row-fluid" id="kt_content">
        <div className="card" style={{borderRadius:"13px"}}>

          <div className="table-responsive p-4 show-large-table">
              <table
                className="table align-middle table-row-dashed fs-6 gy-5 "
                id="kt_table_users"
              >
              <thead className='custom-th'>
                <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                  <th className="min-w-125px">{t("name")}</th>
                  <th className="min-w-125px">{t("progress")}</th>
                  <th className="min-w-125px">{t("size")}</th>
                  <th className="min-w-125px">{t("last_modified")}</th>
                  <th className="text-end min-w-100px custom-th-action">{t("actions")}</th>
                </tr>
              </thead>
          
              <tbody className="text-gray-600 fw-bold custom-td">
                {paginatedData && paginatedData.map((request, index) => (
                  <tr>
                    <td className="userName custom-td-name"><PDF style={{width:"20px", height:"20px"}}/> &nbsp; {request.fileName}.{request.type}</td>
                    <td>
                      <div className="pe-5">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="progressSpan custom-td-progress">{t("request_completion")}</div>
                          <div className='custom-td-precentage'>{request.progress}%</div>
                        </div>
                        <div className="h-8px  w-100 bg-light-success rounded">
                          <div
                            className=" rounded h-8px"
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
                      </div>
                    </td>
                    <td>{request.size}</td>
                    <td>{request.lastModified}</td>
                    <td className="text-end">
                     <div>
                     <a
                     href={() => false}
                     id="close-target2"
                        
                        className="btn btn-light btn-active-light-primary btn-sm custom-td-action"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        onClick={() => {
                          setOpenActions(
                            request.id === openActions ? false : request.id
                          );
                        }}
                      >
                        {t("actions")}
                        <span className="svg-icon svg-icon-5 m-0 mx-1 custom-td-action">
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
                        </span>
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
                            style={{textDecoration:"none"}}
                            // onClick={originalFileModal}
                          >
                            {t("show")}
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a
                          href={() => false}
                            // 
                            className="menu-link px-3"
                            onClick={(e) => handleCopy(e)}
                            style={{textDecoration:"none"}}
                            id="close-target2"
                          >
                            {t("copy")}
                          </a>
                          {copyModel && <Copy />}

                        </div>
                        <div className="menu-item px-3">
                          <a
                          href={() => false}
                            
                            className="menu-link px-3"
                            data-kt-users-table-filter="delete_row"
                            onClick={() => handleDeleteRequest(request.id)}
                            style={{textDecoration:"none"}}
                          >
                            {t("delete")}
                          </a>
                        </div>
                      </div>
                     </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              <ModelDialog isOpen={isModalOpen} onClose={toggleModal} />
            </table>
            {/*end::Table*/}
            <div className="w-100">
              <div className="d-flex justify-content-end">
                <div className="">
                  <PaginationComponent
                    totalPages={Math.ceil(
                      RequestsList?.length / ItemsPerPage
                    )}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <ResponsiveOrginalTable paginatedData={paginatedData} handleDeleteRequest={handleDeleteRequest}/>

          {/*end::Card body*/}
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Post*/}
    </div>
  );
};

export default OrginalFilesTable;

const PaginationComponent = ({
  totalPages,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const isRTL = localStorage.getItem('Locale');

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation" >
      <ul className="pagination pos">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            style={{
              color: currentPage === 1 ? "#24215A" : "#24215A",
              zIndex: "0",
              border: 'none'

            }}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
           {isRTL === 'ar' ? <Next /> : <Prev />}
          </button>
        </li>

        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button
              className="page-link"
              style={{
                backgroundColor: currentPage === page ? "#24215A" : "#FFFFFF",
                color: currentPage === page ? "#FFFFFF" : "#24215A",
                zIndex: "0",
              }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            style={{
              color: currentPage === totalPages ? "#24215A" : "#24215A",
              zIndex: "0",
              border: 'none'
            }}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {isRTL === 'ar' ? <Prev /> : <Next />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const ModelDialog = ({ isOpen, onClose }) => {
  const [value, setValue] = useState(50);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const isMobile = windowWidth <= 767.98;
  return (
    <>
      {isOpen && (
        <div
          className="modal fade show"
          tabIndex={-1}
          style={{ display: "block", backgroundColor: "rgb(0 0 0 / 59%)" }}
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content" style={{ height: "auto" }}>
              {/*begin::Modal header*/}
              <div className="modal-header" id="kt_modal_add_user_header">
                {/*begin::Modal title*/}
                <h2 className="fw-bolder custModalHeader">{!isMobile ? "Add" : "Add Request"}</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-icon btn-sm btn-active-icon-primary"
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
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="black"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                {/*begin::Form*/}
                <form id="kt_modal_add_user_form" className="form" action="#">
                  {/*begin::Scroll*/}
                  <div
                    className="d-flex flex-column scroll-y me-n7 pe-7"
                    id="kt_modal_add_user_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="{default: false, lg: true}"
                    data-kt-scroll-max-height="auto"
                    data-kt-scroll-dependencies="#kt_modal_add_user_header"
                    data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                    data-kt-scroll-offset="300px"
                  >
                    {/*begin::Input group*/}
                    <div className="fv-row mb-7">
                      {/*begin::Label*/}
                      <label className="required fw-bold fs-6 mb-2">Name</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        name="user_name"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                        placeholder="Full name"
                        defaultValue="Emma Smith"
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-7">
                      {/*begin::Label*/}
                      <label className="required fw-bold fs-6 mb-2">
                        Owner
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="email"
                        name="user_email"
                        className="form-control form-control-solid mb-3 mb-lg-0"
                        placeholder="example@domain.com"
                        defaultValue="e.smith@kpmg.com.au"
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-7">
                      {/*begin::Label*/}
                      <div className="d-flex justify-content-between">
                        <label className="required fw-bold fs-6 mb-2">
                          Simularity
                        </label>
                        <span
                          style={{
                            color: "#162343",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {value}%
                        </span>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                      dir='ltr'
                        style={{ width: "100%", cursor: "pointer",
                        background: `linear-gradient(to right, #2EA3C2 0%, #2EA3C2 ${value}%, #F9F9F9 ${value}%, #F9F9F9 100%)`
                      }}
                        type="range"
                        
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    <hr />
                    <h2 className="fw-bolder custModalHeader">Upload Files</h2>
                    <p
                      style={{
                        color: "#99A1B7",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      If you need more info, please check Campaign Guidlines
                    </p>
                    <div className="uploadContainer">
                      <input
                        accept=".doc, .docx, .xls, .xlsx, .csv, .pdf, image/*"
                        multiple
                        type="file"
                        autocomplete="off"
                        tabindex="-1"
                        style={{ display: "none" }}
                      />
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.43135 12.091C5.17935 12.535 2.66602 15.2937 2.66602 18.667C2.66602 22.3483 5.65135 25.3337 9.33268 25.3337H23.9993C26.9447 25.3337 29.3327 22.9457 29.3327 20.0003C29.3327 17.055 26.9447 14.667 23.9993 14.667C23.9993 10.2483 20.418 6.66699 15.9993 6.66699C12.4833 6.66699 9.50468 8.93766 8.43135 12.091Z"
                            stroke="#35373C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M13.1094 16.8893L15.9987 14L18.888 16.8893"
                            stroke="#35373C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M15.9987 20.6667V14"
                            stroke="#35373C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            marginBottom: "0",
                          }}
                        >
                          Drop files here or click to upload.
                        </p>
                        <p>Upload up to 10 files</p>
                      </div>
                    </div>
                  </div>
                  {/*end::Scroll*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-8">
                    <button
                      type="reset"
                      className="btn btn-light me-3"
                      data-kt-users-modal-action="cancel"
                      onClick={onClose}
                    >
                      Discard
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
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

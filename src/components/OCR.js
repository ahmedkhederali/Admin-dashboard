import React, { useEffect, useRef, useState } from "react";

import "./../assets/css/charts.css";
import RequestsListData from "./RequestsData";
import Swal from "sweetalert2";
import OrginalFilesModal from "./OCRComponents/OrginalFilesModal";
import FileUploadComponent from "./helpers/dropdown/FileUploadComponent";
import ShowResults from "./OCRComponents/ShowResults";
import { ReactComponent as Prev } from "../assets/prvArrow.svg";
import { ReactComponent as Next } from "../assets/nextArrow.svg";
import { convertToXLSX } from "./helpers/dropdown/Export";
import ChatModal from "./OCRComponents/ChatModal";
import { useTranslation } from "react-i18next";
const OCR = ({ setHide, pathChange }) => {
  const { t } = useTranslation();
  const lang = document.getElementsByTagName("html")[0].lang;

  const language = localStorage.getItem("Locale");

  const [RequestsList, setRequestsList] = useState(RequestsListData);

  const [requestData, setRequestData] = useState({});

  const [openActions, setOpenActions] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [isActionsModalOpen, setActionsModalOpen] = useState(false);

  const [isOriginalFileModalOpen, setOriginalFileModalOpen] = useState(false);

  const [isChatModalOpen, setChatModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [type, setType] = useState(null);

  const ItemsPerPage = 10;

  const [paginatedData, setPaginatedData] = useState(
    RequestsList.slice(
      (currentPage - 1) * ItemsPerPage,
      currentPage * ItemsPerPage
    )
  );

  const [showResults, setShowResults] = useState(false);

  const [savedReq, setsavedReq] = useState({});

  const [showFilter, setShowFilter] = useState(false);

  const [showFilesNo, setShowFilesNo] = useState(false);

  const [selectedFileNo, setSelectedFileNo] = useState(null);

  const [value, setValue] = useState(0);

  const myDivRef = useRef(null);
  const myDivRef2 = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 767.98;
  const handlePageChange = (page) => {
    // Add your logic to fetch and display data for the selected page
    setCurrentPage(page);
    setPaginatedData(
      RequestsList.slice((page - 1) * ItemsPerPage, page * ItemsPerPage)
    );
  };

  const handleDeleteRequest = (id) => {
    const requestdata = RequestsList.find((request) => request.id === id);

    Swal.fire({
      // title: "Are you sure?",
      text: `${t("Are you sure You want to delete")} ${requestdata.userName} ${
        lang === "en" ? "?" : "؟"
      }`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${t("Yes, delete")}!`,
      cancelButtonText: `${t("No, cancel")}`,
    }).then((result) => {
      if (result.isConfirmed) {
        let newRequestdata = RequestsList.filter(
          (request) => request.id !== id
        );
        setRequestsList(newRequestdata);
        setPaginatedData(
          newRequestdata.slice(
            (currentPage - 1) * ItemsPerPage,
            currentPage * ItemsPerPage
          )
        );

        Swal.fire({
          // title: "Deleted!",
          confirmButtonText: `${t("Ok, got it")}!`,
          text: `${t("You have deleted")} ${requestdata.userName} .`,
          icon: "success",
        });
      }
    });
  };

  const toggleModal = (type) => {
    if (type) {
      setType(type);
    }
    setOpenActions(false);
    setModalOpen(!isModalOpen);
  };

  const toggleActionsModal = () => {
    // setOpenActions(false);
    setActionsModalOpen(false);
  };

  const originalFileModal = (request) => {
    setRequestData(request);
    setOpenActions(false);
    setOriginalFileModalOpen(!isOriginalFileModalOpen);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (myDivRef.current && myDivRef.current.id !== event.target.id) {
        setOpenActions(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (myDivRef2.current && myDivRef2.current.id !== event.target.id) {
        setShowFilter(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  function getRequest(e) {
    let myReq = { ...savedReq };
    myReq[e.target.name] = e.target.value;
    setsavedReq(myReq);
  }

  const handleSaveRequest = () => {};

  const handleDownload = () => {
    convertToXLSX("Request List", "xlsx");
  };

  const handleSelectedNumber = (e) => {
    setSelectedFileNo(e.target.innerText);
    setShowFilesNo(false);
  };

  const handleResetFilter = () => {
    setValue(0);
    setSelectedFileNo(null);
    setShowFilter(false);
  };

  const handleApplyFilter = () => {
    setShowFilter(false);
  };

  useEffect(() => {
    // Retrieve RTL value from local storage
    const isRTL = localStorage.getItem("Locale");

    // Apply RTL styles if needed
    if (isRTL && isRTL === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  useEffect(() => {
    if (showResults) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [showResults, setHide]);

  return (
    <>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-fluid"
        style={{ padding: "20px 70px", paddingTop: "0px" }}
      >
        {showResults ? (
          <ShowResults pathChange={pathChange} />
        ) : (
          <div className="content flex-row-fluid" id="kt_content">
            {/* <BreadcrumbComponent/>  */}
            {/*begin::Card*/}
            <div
              className="card show-large-table"
              style={{ borderRadius: "13px" }}
            >
              {/*begin::Card header*/}
              <div className="card-header border-0 pt-6 card-header-ocr">
                {/*begin::Card title*/}
                <div className="card-title card-search-ocr">
                  {/*begin::Search*/}
                  <div className="d-flex align-items-center position-relative my-1 ">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          // opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height={2}
                          rx={1}
                          transform="rotate(45 17.0365 15.1223)"
                          fill="black"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <input
                      type="text"
                      data-kt-user-table-filter="search"
                      className="form-control form-control-solid w-250px ps-14 cust-btn-height cust-search-ocr cust-btn-align"
                      placeholder={t("search")}
                    />
                  </div>
                  {/*end::Search*/}
                </div>
                {/*begin::Card title*/}
                {/*begin::Card toolbar*/}
                <div className="card-toolbar">
                  {/*begin::Toolbar*/}
                  <div
                    className="d-flex justify-content-end"
                    data-kt-user-table-toolbar="base"
                  >
                    <div style={{ position: "relative" }}>
                      {/*begin::Filter*/}
                      <button
                        type="button"
                        className="btn  me-3 filterCustStyle custom-filter-btn cust-btn-height cust-btn-align"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        onClick={() => setShowFilter(!showFilter)}
                        id="filter-option"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                              fill="none"
                              stroke="#24215A"
                              strokeWidth="2"
                              className="custom-filter-btn-icon"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        {t("Filter")}
                      </button>
                      {/*begin::Menu 1*/}
                      {showFilter && (
                        <div
                          className="menu filter-option-container menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 py-4 w-300px w-md-325px custom-td-list"
                          data-kt-menu="true"
                          ref={myDivRef2}
                          id="filter-option"
                        >
                          {/*begin::Header*/}
                          <div className="px-7 p-4" id="filter-option">
                            <div
                              id="filter-option"
                              className=""
                              style={{
                                color: "#252F4A",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              {t("filter_options")}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Separator*/}
                          <div
                            className="separator border-gray-200"
                            id="filter-option"
                          />
                          {/*end::Separator*/}
                          {/*begin::Content*/}
                          <div
                            id="filter-option"
                            className="px-7 py-2"
                            data-kt-user-table-filter="form"
                          >
                            {/*begin::Input group*/}
                            <div className="mb-10" id="filter-option">
                              <div
                                className="d-flex justify-content-between"
                                id="filter-option"
                              >
                                <label
                                  id="filter-option"
                                  className="form-label fs-6"
                                  style={{ fontWeight: "500" }}
                                >
                                  {t("progress")}
                                </label>
                                <span
                                  id="filter-option"
                                  style={{
                                    color: "#162343",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {value}%
                                </span>
                              </div>
                              <input
                                id="filter-option"
                                dir="ltr"
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                  background: `linear-gradient(to right, #2EA3C2 0%, #2EA3C2 ${value}%, #F9F9F9 ${value}%, #F9F9F9 100%)`,
                                }}
                                type="range"
                                min="1"
                                max="100"
                                value={value}
                                onChange={({ target: { value } }) =>
                                  setValue(value)
                                }
                              />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div
                              className="mb-10"
                              id="filter-option"
                              style={{ position: "relative" }}
                            >
                              <label
                                className="form-label fs-6"
                                id="filter-option"
                                style={{ fontWeight: "500" }}
                              >
                                {t("number_of_files")}
                              </label>
                              {/* <select
                            className="form-select form-select-solid fw-bolder select2-hidden-accessible"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-allow-clear="true"
                            data-kt-user-table-filter="two-step"
                            data-hide-search="true"
                            onClick={() => {setShowFilesNo(!showFilesNo)}}
                          >
                          </select> */}
                              <span
                                className="select2 select2-container select2-container--bootstrap5 select2-container--above select2-container--focus"
                                dir={language !== "ar" ? "ltr" : "rtl"}
                                data-select2-id="select2-data-2-5thm"
                                style={{ width: "100%", cursor: "pointer" }}
                                onClick={() => {
                                  setShowFilesNo(!showFilesNo);
                                }}
                                id="filter-option"
                              >
                                <span className="selection" id="filter-option">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid fw-bold cust-select-list-height"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-t9c8-container"
                                    aria-controls="select2-t9c8-container"
                                    style={{ borderRadius: "8.45px" }}
                                    id="filter-option"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      // id="select2-t9c8-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Select option"
                                      id="filter-option"
                                    >
                                      <span
                                        id="filter-option"
                                        className="select2-selection__placeholder"
                                        style={{
                                          color: "rgb(167 171 187)",
                                          fontSize: "12px",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {selectedFileNo
                                          ? selectedFileNo
                                          : t("select_number")}
                                      </span>
                                    </span>
                                    <span
                                      id="filter-option"
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b
                                        id="filter-option"
                                        role="presentation"
                                      />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  id="filter-option"
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                              {showFilesNo && (
                                <div
                                  id="filter-option"
                                  className="menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 py-3 custom-td-list"
                                  style={{
                                    width: "100%",
                                    position: "absolute",
                                  }}
                                >
                                  {/*begin::Menu item*/}
                                  <div
                                    id="filter-option"
                                    className="menu-item "
                                  >
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      1
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div
                                    className="menu-item "
                                    id="filter-option"
                                  >
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      2{/* {copyModel && <Copy /> } */}
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item" id="filter-option">
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      data-kt-users-table-filter="delete_row"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      3
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                              )}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div
                              className="d-flex justify-content-end"
                              id="filter-option"
                            >
                              <button
                                type="reset"
                                className="btn btn-light   me-2 px-6 cust-reset-btn cust-btn-height cust-btn-align"
                                data-kt-menu-dismiss="true"
                                data-kt-user-table-filter="reset"
                                onClick={() => handleResetFilter()}
                                id="filter-option"
                              >
                                {t("reset")}
                              </button>
                              <button
                                type="submit"
                                className="btn   px-6 cust-apply-btn cust-btn-height cust-btn-align"
                                data-kt-menu-dismiss="true"
                                data-kt-user-table-filter="filter"
                                style={{ backgroundColor: "#25215a" }}
                                onClick={() => handleApplyFilter()}
                              >
                                {t("apply")}
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Content*/}
                        </div>
                      )}
                      {/*end::Menu 1*/}
                      {/*end::Filter*/}
                    </div>
                    {/*begin::Export*/}
                    <button
                      type="button"
                      className="btn me-3 customBtn custom-export-btn cust-btn-height cust-btn-align"
                      // data-bs-toggle="modal"
                      // data-bs-target="#kt_modal_export_users"
                      onClick={handleDownload}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="red"
                          className="custom-export-btn-icon"
                        >
                          <rect
                            // opacity="0.3"
                            x="12.75"
                            y="4.25"
                            width={12}
                            height={2}
                            rx={1}
                            transform="rotate(90 12.75 4.25)"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                          <path
                            d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                          <path
                            d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {t("Export")}
                    </button>
                    {/*end::Export*/}
                    {/*begin::Add user*/}
                    <button
                      type="button"
                      className="btn customBtn custom-addReq-btn cust-btn-height cust-btn-align"
                      onClick={() => toggleModal("add")}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          className="custom-addReq-btn-icon"
                        >
                          <rect
                            // opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="black"
                            className="custom-addReq-btn-icon"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="black"
                            className="custom-addReq-btn-icon"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {t("add_request")}
                    </button>
                    {/*end::Add user*/}
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::Group actions*/}
                  <div
                    className="d-flex justify-content-end align-items-center d-none"
                    data-kt-user-table-toolbar="selected"
                  >
                    <div className="fw-bolder me-5">
                      <span
                        className="me-2"
                        data-kt-user-table-select="selected_count"
                      />
                      Selected
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-kt-user-table-select="delete_selected"
                    >
                      Delete Selected
                    </button>
                  </div>
                  {/*end::Group actions*/}
                  {/*begin::Modal - Adjust Balance*/}
                  <div
                    className="modal fade"
                    id="kt_modal_export_users"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                      {/*begin::Modal content*/}
                      <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header">
                          {/*begin::Modal title*/}
                          <h2 className="fw-bolder">Export Users</h2>
                          {/*end::Modal title*/}
                          {/*begin::Close*/}
                          <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
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
                          <form
                            // id="kt_modal_export_users_form"
                            className="form"
                            // action="#"
                          >
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="fs-6 fw-bold form-label mb-2">
                                Select Roles:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <select
                                name="role"
                                data-control="select2"
                                data-placeholder="Select a role"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bolder"
                              >
                                <option />
                                <option value="Administrator">
                                  Administrator
                                </option>
                                <option value="Analyst">Analyst</option>
                                <option value="Developer">Developer</option>
                                <option value="Support">Support</option>
                                <option value="Trial">Trial</option>
                              </select>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-bold form-label mb-2">
                                Select Export Format:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <select
                                name="format"
                                data-control="select2"
                                data-placeholder="Select a format"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bolder"
                              >
                                <option />
                                <option value="excel">Excel</option>
                                <option value="pdf">PDF</option>
                                <option value="cvs">CVS</option>
                                <option value="zip">ZIP</option>
                              </select>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="text-center">
                              <button
                                type="reset"
                                className="btn btn-light me-3"
                                data-kt-users-modal-action="cancel"
                              >
                                Discard
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                // data-kt-users-modal-action="submit"
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
                  {/*end::Modal - New Card*/}
                </div>
                {/*end::Card toolbar*/}
              </div>
              {/*end::Card header*/}
              {/*begin::Card body*/}
              <div className="card-body py-4 card-body-ocr mainconts">
                {/*begin::Table*/}

                {/* display on 4k & laptob L */}
                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="xtable"
                >
                  {/*begin::Table head*/}
                  <thead className="custom-th">
                    {/*begin::Table row*/}
                    <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      {/* <th className="w-10px pe-2">
                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-kt-check="true"
                        data-kt-check-target="#kt_table_users .form-check-input"
                        defaultValue={1}
                      />
                    </div>
                  </th> */}
                      <th className="min-w-125px">{t("name")}</th>
                      <th className="min-w-125px">{t("number_of_files")}</th>
                      <th className="min-w-125px">{t("progress")}</th>
                      <th className="min-w-125px">{t("date")}</th>
                      <th className="min-w-125px">{t("estimated_time")}</th>
                      <th className="text-end min-w-100px custom-th-action">
                        {t("actions")}
                      </th>
                    </tr>
                    {/*end::Table row*/}
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody className="text-gray-600 fw-bold custom-td">
                    {/*begin::Table row*/}
                    {paginatedData.map((request, index) => (
                      <tr>
                        <td className="userName custom-td-name">
                          {request.userName}
                        </td>
                        <td>{request.fileNo}</td>
                        <td>
                          <div className="pe-5">
                            <div className="d-flex justify-content-between mb-2">
                              <div className="progressSpan custom-td-progress">
                                {t("request_completion")}
                              </div>
                              <div className="custom-td-precentage">
                                {request.progress}%
                              </div>
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
                        <td>{request.date}</td>
                        <td>{request.estimatedTime}</td>
                        <td className="text-end d-flex justify-content-start">
                          <div>
                            <a
                            href={() => false}
                              id={`close-target`}
                              to="#"
                              className="btn btn-light btn-active-light-primary btn-sm custom-td-action"
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-end"
                              onClick={() => {
                                setOpenActions(
                                  request.id === openActions
                                    ? false
                                    : request.id
                                );
                              }}
                            >
                              {t("actions")}
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                              <span className="svg-icon svg-icon-5 m-0 mx-1 custom-td-action">
                                <svg
                                  id={`close-target`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    className="custom-td-svg"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                            {/*begin::Menu*/}
                            <div
                              className={
                                request.id === openActions
                                  ? "menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4 w-175px custom-td-list"
                                  : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                              }
                              data-kt-menu="true"
                              id={`close-target`}
                              ref={myDivRef}
                            >
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                href={() => false}
                                  className="menu-link px-2"
                                  onClick={() => originalFileModal(request)}
                                >
                                  {t("show_original_files")}
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                href={() => false}
                                  className="menu-link px-2"
                                  onClick={() => {
                                    setShowResults(true);
                                  }}
                                >
                                  {t("show_results")}
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                href={() => false}
                                  className="menu-link px-2"
                                  onClick={() => setChatModalOpen(true)}
                                  id="chat-close-btn"
                                >
                                  {t("chat")}
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                href={() => false}
                                  className="menu-link px-2"
                                  onClick={() => toggleModal("edit")}
                                >
                                  {t("edit")}
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                href={() => false}
                                  className="menu-link px-2"
                                  data-kt-users-table-filter="delete_row"
                                  onClick={() =>
                                    handleDeleteRequest(request.id)
                                  }
                                >
                                  {t("delete")}
                                </a>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu*/}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/*end::Table body*/}
                </table>

                {/*end::Table*/}
                <div className="w-100">
                  <div className="d-flex justify-content-end">
                    <div className="">
                      <PaginationComponent
                        totalPages={Math.ceil(
                          RequestsList.length / ItemsPerPage
                        )}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*end::Card body*/}
            </div>
            {/*end::Card*/}
            <ModelDialog
              isOpen={isModalOpen}
              onClose={toggleModal}
              type={type}
              getRequest={getRequest}
              handleSaveRequest={handleSaveRequest}
            />

            <ActionsModelDialog
              isOpen={isActionsModalOpen}
              onClose={toggleActionsModal}
              allRequests={paginatedData}
              originalFileModal={originalFileModal}
              setShowResults={setShowResults}
              setChatModalOpen={setChatModalOpen}
              toggleModal={toggleModal}
              handleDeleteRequest={handleDeleteRequest}
            />

            {/* display on laptob  */}
            <div className="show-medium-table">
              <div className="card-header border-0 pt-6 card-header-ocr">
                {/*begin::Card title*/}
                <div className="card-title card-search-ocr">
                  {/*begin::Search*/}
                  <div className="d-flex align-items-center position-relative my-1 ">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          // opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height={2}
                          rx={1}
                          transform="rotate(45 17.0365 15.1223)"
                          fill="black"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <input
                      type="text"
                      data-kt-user-table-filter="search"
                      className="form-control form-control-solid w-250px ps-14 cust-btn-height cust-search-ocr cust-btn-align"
                      placeholder={t("search")}
                    />
                  </div>
                  {/*end::Search*/}
                </div>
                {/*begin::Card title*/}
                {/*begin::Card toolbar*/}
                <div className="card-toolbar">
                  {/*begin::Toolbar*/}
                  <div
                    className="d-flex justify-content-end on-mobile-toolbar-design"
                    data-kt-user-table-toolbar="base"
                  >
                    <div style={{ position: "relative" }}>
                      {/*begin::Filter*/}
                      <button
                        type="button"
                        className="btn  me-3 filterCustStyle custom-filter-btn cust-btn-height cust-btn-align"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        onClick={() => setShowFilter(!showFilter)}
                        id="filter-option"
                      >
                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                        <span className="svg-icon svg-icon-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                              fill="none"
                              stroke="#24215A"
                              strokeWidth="2"
                              className="custom-filter-btn-icon"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        {t("Filter")}
                      </button>
                      {/*begin::Menu 1*/}
                      {showFilter && (
                        <div
                          className="menu filter-option-container menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 py-4 w-300px w-md-325px custom-td-list"
                          data-kt-menu="true"
                          id="filter-option"
                          ref={myDivRef2}
                        >
                          {/*begin::Header*/}
                          <div id="filter-option" className="px-7 py-2">
                            <div
                              id="filter-option"
                              className=""
                              style={{
                                color: "#252F4A",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              {t("filter_options")}
                            </div>
                          </div>
                          {/*end::Header*/}
                          {/*begin::Separator*/}
                          <div
                            id="filter-option"
                            className="separator border-gray-200"
                          />
                          {/*end::Separator*/}
                          {/*begin::Content*/}
                          <div
                            id="filter-option"
                            className="px-7 py-4"
                            data-kt-user-table-filter="form"
                          >
                            {/*begin::Input group*/}
                            <div id="filter-option" className="mb-10">
                              <div
                                id="filter-option"
                                className="d-flex justify-content-between"
                              >
                                <label
                                  id="filter-option"
                                  className="form-label fs-6"
                                  style={{ fontWeight: "500" }}
                                >
                                  {t("progress")}
                                </label>
                                <span
                                  id="filter-option"
                                  style={{
                                    color: "#162343",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {value}%
                                </span>
                              </div>
                              <input
                                dir="ltr"
                                id="filter-option"
                                style={{
                                  width: "100%",
                                  cursor: "pointer",
                                  background: `linear-gradient(to right, #2EA3C2 0%, #2EA3C2 ${value}%, #F9F9F9 ${value}%, #F9F9F9 100%)`,
                                }}
                                type="range"
                                min="1"
                                max="100"
                                value={value}
                                onChange={({ target: { value } }) =>
                                  setValue(value)
                                }
                              />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div
                              id="filter-option"
                              className="mb-10"
                              style={{ position: "relative" }}
                            >
                              <label
                                id="filter-option"
                                className="form-label fs-6"
                                style={{ fontWeight: "500" }}
                              >
                                {t("number_of_files")}
                              </label>
                              {/* <select
                            className="form-select form-select-solid fw-bolder select2-hidden-accessible"
                            data-kt-select2="true"
                            data-placeholder="Select option"
                            data-allow-clear="true"
                            data-kt-user-table-filter="two-step"
                            data-hide-search="true"
                            onClick={() => {setShowFilesNo(!showFilesNo)}}
                          >
                          </select> */}
                              <span
                                className="select2 select2-container select2-container--bootstrap5 select2-container--above select2-container--focus"
                                dir={language !== "ar" ? "ltr" : "rtl"}
                                data-select2-id="select2-data-2-5thm"
                                style={{ width: "100%", cursor: "pointer" }}
                                onClick={() => {
                                  setShowFilesNo(!showFilesNo);
                                }}
                                id="filter-option"
                              >
                                <span className="selection" id="filter-option">
                                  <span
                                    className="select2-selection select2-selection--single form-select form-select-solid fw-bold cust-select-list-height"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={0}
                                    aria-disabled="false"
                                    aria-labelledby="select2-t9c8-container"
                                    aria-controls="select2-t9c8-container"
                                    style={{ borderRadius: "8.45px" }}
                                    id="filter-option"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      // id="select2-t9c8-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Select option"
                                      id="filter-option"
                                    >
                                      <span
                                        id="filter-option"
                                        className="select2-selection__placeholder"
                                        style={{
                                          color: "rgb(167 171 187)",
                                          fontSize: "12px",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {selectedFileNo
                                          ? selectedFileNo
                                          : t("select_number")}
                                      </span>
                                    </span>
                                    <span
                                      id="filter-option"
                                      className="select2-selection__arrow"
                                      role="presentation"
                                    >
                                      <b
                                        id="filter-option"
                                        role="presentation"
                                      />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  id="filter-option"
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                              {showFilesNo && (
                                <div
                                  id="filter-option"
                                  className="menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 py-3 custom-td-list"
                                  style={{
                                    width: "100%",
                                    position: "absolute",
                                  }}
                                >
                                  {/*begin::Menu item*/}
                                  <div
                                    id="filter-option"
                                    className="menu-item "
                                  >
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      1
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item ">
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      2{/* {copyModel && <Copy /> } */}
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                  {/*begin::Menu item*/}
                                  <div className="menu-item" id="filter-option">
                                    <a
                                    href={() => false}
                                      id="filter-option"
                                      className="menu-link px-3"
                                      data-kt-users-table-filter="delete_row"
                                      style={{ textDecoration: "none" }}
                                      onClick={handleSelectedNumber}
                                    >
                                      3
                                    </a>
                                  </div>
                                  {/*end::Menu item*/}
                                </div>
                              )}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div
                              id="filter-option"
                              className="d-flex justify-content-end"
                            >
                              <button
                                id="filter-option"
                                type="reset"
                                className="btn btn-light   me-2 px-6 cust-reset-btn cust-btn-height cust-btn-align"
                                data-kt-menu-dismiss="true"
                                data-kt-user-table-filter="reset"
                                onClick={() => handleResetFilter()}
                              >
                                {t("reset")}
                              </button>
                              <button
                                type="submit"
                                className="btn   px-6 cust-apply-btn cust-btn-height cust-btn-align"
                                data-kt-menu-dismiss="true"
                                data-kt-user-table-filter="filter"
                                style={{ backgroundColor: "#25215a" }}
                                onClick={() => handleApplyFilter()}
                              >
                                {t("apply")}
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </div>
                          {/*end::Content*/}
                        </div>
                      )}
                      {/*end::Menu 1*/}
                      {/*end::Filter*/}
                    </div>
                    {/*begin::Export*/}
                    <button
                      type="button"
                      className="btn me-3 customBtn custom-export-btn cust-btn-height cust-btn-align"
                      // data-bs-toggle="modal"
                      // data-bs-target="#kt_modal_export_users"
                      onClick={handleDownload}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="red"
                          className="custom-export-btn-icon"
                        >
                          <rect
                            // opacity="0.3"
                            x="12.75"
                            y="4.25"
                            width={12}
                            height={2}
                            rx={1}
                            transform="rotate(90 12.75 4.25)"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                          <path
                            d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                          <path
                            d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                            fill="red"
                            className="custom-export-btn-icon"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {t("Export")}
                    </button>
                    {/*end::Export*/}
                    {/*begin::Add user*/}
                    <button
                      type="button"
                      className="btn customBtn custom-addReq-btn cust-btn-height cust-btn-align"
                      onClick={() => toggleModal("add")}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          className="custom-addReq-btn-icon"
                        >
                          <rect
                            // opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="black"
                            className="custom-addReq-btn-icon"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="black"
                            className="custom-addReq-btn-icon"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {isMobile ? t("add") : t("add_request")}
                    </button>
                    {/*end::Add user*/}
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::Group actions*/}
                  <div
                    className="d-flex justify-content-end align-items-center d-none"
                    data-kt-user-table-toolbar="selected"
                  >
                    <div className="fw-bolder me-5">
                      <span
                        className="me-2"
                        data-kt-user-table-select="selected_count"
                      />
                      Selected
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-kt-user-table-select="delete_selected"
                    >
                      Delete Selected
                    </button>
                  </div>
                  {/*end::Group actions*/}
                  {/*begin::Modal - Adjust Balance*/}
                  <div
                    className="modal fade"
                    id="kt_modal_export_users"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    {/*begin::Modal dialog*/}
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                      {/*begin::Modal content*/}
                      <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header">
                          {/*begin::Modal title*/}
                          <h2 className="fw-bolder">Export Users</h2>
                          {/*end::Modal title*/}
                          {/*begin::Close*/}
                          <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
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
                          <form
                            // id="kt_modal_export_users_form"
                            className="form"
                            // action="#"
                          >
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="fs-6 fw-bold form-label mb-2">
                                Select Roles:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <select
                                name="role"
                                data-control="select2"
                                data-placeholder="Select a role"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bolder"
                              >
                                <option />
                                <option value="Administrator">
                                  Administrator
                                </option>
                                <option value="Analyst">Analyst</option>
                                <option value="Developer">Developer</option>
                                <option value="Support">Support</option>
                                <option value="Trial">Trial</option>
                              </select>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-bold form-label mb-2">
                                Select Export Format:
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <select
                                name="format"
                                data-control="select2"
                                data-placeholder="Select a format"
                                data-hide-search="true"
                                className="form-select form-select-solid fw-bolder"
                              >
                                <option />
                                <option value="excel">Excel</option>
                                <option value="pdf">PDF</option>
                                <option value="cvs">CVS</option>
                                <option value="zip">ZIP</option>
                              </select>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="text-center">
                              <button
                                type="reset"
                                className="btn btn-light me-3"
                                data-kt-users-modal-action="cancel"
                              >
                                Discard
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                // data-kt-users-modal-action="submit"
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
                  {/*end::Modal - New Card*/}
                </div>
                {/*end::Card toolbar*/}
              </div>
              <div className="row">
                {paginatedData.map((request, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 col-12 p-3"
                  >
                    <div
                      className="card "
                      style={{ borderRadius: "13px", padding: "15px" }}
                    >
                      <div
                        className="userName pb-1"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#252F4A",
                        }}
                      >
                        {request.userName}
                      </div>
                      <div
                        className="py-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#78829D",
                        }}
                      >
                        {request.fileNo}
                      </div>
                      <div>
                        <div className="pe-5 py-2">
                          <div className="d-flex justify-content-between mb-2">
                            <div
                              className="progressSpan"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#071437",
                              }}
                            >
                              Request Completion
                            </div>
                            <div
                              className=""
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#99A1B7",
                              }}
                            >
                              {request.progress}%
                            </div>
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
                      </div>
                      <div
                        className="py-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#78829D",
                        }}
                      >
                        {request.date}
                      </div>
                      <div
                        className="py-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#78829D",
                        }}
                      >
                        {request.estimatedTime}
                      </div>
                      <div className="text-end d-flex justify-content-end pt-2">
                        <div>
                          <a
                          href={() => false}
                            id={`close-target`}
                            to="#"
                            className="btn btn-light btn-active-light-primary btn-sm custom-crd-action actions-btn-mobile"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            onClick={() => {
                              setActionsModalOpen(request.id);
                            }}
                          >
                            . . .
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            {/* <span className="svg-icon svg-icon-5 m-0 custom-crd-action">
                                <svg
                                  id={`close-target`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    className='custom-crd-svg'
                                  />
                                </svg>
                              </span> */}
                            {/*end::Svg Icon*/}
                          </a>
                          {/*begin::Menu*/}
                          <div
                            className={
                              request.id === openActions
                                ? "menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4 w-175px custom-crd-list"
                                : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                            }
                            // style={{marginRight:"4.5rem",marginTop:'2.7rem'}}
                            data-kt-menu="true"
                            id={`close-target`}
                            ref={myDivRef}
                            // margin-right: 4.5rem;
                            // margin-top: 2.7rem;
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                              <a
                              href={() => false}
                                className="menu-link px-3"
                                onClick={() => originalFileModal(request)}
                              >
                                Show Original Files
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                              <a
                              href={() => false}
                                className="menu-link px-3"
                                onClick={() => setShowResults(true)}
                              >
                                Show Results
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                              href={() => false}
                                className="menu-link px-3"
                                onClick={() => setChatModalOpen(true)}
                                id="chat-close-btn"
                              >
                                {t("chat")}
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                              <a
                              href={() => false}
                                className="menu-link px-3"
                                onClick={() => toggleModal("edit")}
                              >
                                Edit
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item">
                              <a
                              href={() => false}
                                className="menu-link px-3"
                                data-kt-users-table-filter="delete_row"
                                onClick={() => handleDeleteRequest(request.id)}
                              >
                                Delete
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu*/}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <OrginalFilesModal
          isOpen={isOriginalFileModalOpen}
          onClose={originalFileModal}
          requestData={requestData}
        />

        <ChatModal isOpen={isChatModalOpen} onClose={setChatModalOpen} />
      </div>
    </>
  );
};

export default OCR;

const PaginationComponent = ({
  totalPages,
  currentPage,
  onPageChange,
  itemsPerPage,
}) => {
  const isRTL = localStorage.getItem("Locale");
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              style={{
                color: currentPage === 1 ? "#24215A" : "#24215A",
                zIndex: "0",
                border: "none",
              }}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {isRTL === "ar" ? <Next /> : <Prev />}
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
                  border: "none",
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
                border: "none",
              }}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {isRTL === "ar" ? <Prev /> : <Next />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

const ModelDialog = ({
  isOpen,
  onClose,
  type,
  getRequest,
  handleSaveRequest,
}) => {
  const { t } = useTranslation();

  const [value, setValue] = useState(50);

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
                <h2 className="custModalHeader">
                  {type === "add" ? t("add_request") : t("edit_request")}
                </h2>
                {/*end::Modal title*/}
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
              <div
                className="modal-body scroll-y  request__popup"
                style={{ padding: "1.75rem 1.75rem !important" }}
              >
                {/*begin::Form*/}
                <div
                  // id="kt_modal_add_user_form"
                  className="form"
                  // action="#"
                >
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
                      <label className="required mb-2 cust-label">
                        {t("name")}
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        name="user_name"
                        className="form-control form-control-solid mb-3 mb-lg-0 cust-btn-height cust-search-ocr"
                        placeholder={t("enter_name")}
                        defaultValue={type === "add" ? "" : "Emma Smith"}
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-7">
                      {/*begin::Label*/}
                      <label className="required mb-2 cust-label">
                        {t("owner")}
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        name="user_email"
                        className="form-control form-control-solid mb-3 mb-lg-0 cust-btn-height cust-search-ocr"
                        placeholder={t("example@domain.com")}
                        defaultValue={
                          type === "add" ? "" : "e.smith@kpmg.com.au"
                        }
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-7">
                      {/*begin::Label*/}
                      <div className="d-flex justify-content-between">
                        <label className="required mb-2 cust-label">
                          {t("simularity")}
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
                        dir="ltr"
                        style={{
                          width: "100%",
                          cursor: "pointer",
                          background: `linear-gradient(to right, #2EA3C2 0%, #2EA3C2 ${value}%, #F9F9F9 ${value}%, #F9F9F9 100%)`,
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
                    <h2 className="custModalHeader">{t("upload_files")}</h2>
                    <FileUploadComponent />
                  </div>
                  {/*end::Scroll*/}
                  {/*begin::Actions*/}
                  <div className="text-center pt-8">
                    <button
                      type="reset"
                      className="btn btn-light cust-reset-btn cust-btn-height me-3"
                      data-kt-users-modal-action="cancel"
                      onClick={onClose}
                    >
                      {t("discard")}
                    </button>
                    <button
                      type="submit"
                      className="btn cust-apply-btn cust-btn-height"
                      // data-kt-users-modal-action="submit"
                    >
                      <span className="indicator-label" onClick={onClose}>
                        {t("submit")}
                      </span>
                      <span className="indicator-progress">
                        {t("please_wait")}
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </div>
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

const ActionsModelDialog = ({
  isOpen,
  onClose,
  allRequests,
  originalFileModal,
  setShowResults,
  setChatModalOpen,
  toggleModal,
  handleDeleteRequest,
}) => {
  const request = allRequests.find((req) => req.id === isOpen);

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
              <div className="menu-item">
                <a
                href={() => false}
                  className="menu-link px-3 mobile-action-list"
                  onClick={() => {
                    originalFileModal(request);
                    onClose();
                  }}
                >
                  {t("show_original_files")}
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item">
                <a
                href={() => false}
                  className="menu-link px-3 mobile-action-list"
                  onClick={() => {
                    setShowResults(true);
                    onClose();
                  }}
                >
                  {t("show_results")}
                </a>
              </div>
              <div className="menu-item">
                <a
                href={() => false}
                  className="menu-link px-3 mobile-action-list"
                  onClick={() => {
                    setChatModalOpen(true);
                    onClose();
                  }}
                  id="chat-close-btn"
                >
                  {t("chat")}
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item">
                <a
                href={() => false}
                  className="menu-link px-3 mobile-action-list"
                  onClick={() => {
                    toggleModal("edit");
                    onClose();
                  }}
                >
                  {t("edit")}
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item">
                <a
                href={() => false}
                  className="menu-link px-3 mobile-action-list"
                  data-kt-users-table-filter="delete_row"
                  onClick={() => {
                    handleDeleteRequest(request.id);
                    onClose();
                  }}
                >
                  {t("delete")}
                </a>
              </div>
              {/*end::Menu item*/}
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

import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';

const ChatModal = ({ isOpen, onClose, }) => {
    const { t } = useTranslation();

  const language = localStorage.getItem('Locale');
    

    const imgName = (fullName) => {
        const words = fullName?.split(" ");
        const initials = words?.slice(0, 2).map(word => word[0]);
        const result = initials.join("");
        return result;
    }

    useEffect(() => {
        const bodyElement = document.getElementsByTagName('body')[0];
    
        if (isOpen) {
            bodyElement.style.overflow = 'hidden';
        } else {
            bodyElement.style.overflow = 'auto';
        }
    
        return () => {
            bodyElement.style.overflow = 'auto';
        };
    }, [isOpen]);

    const myDivRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
          if (myDivRef.current && (myDivRef.current.id !== event.target.id)) {
            onClose(false)
          } 
        };
    
        document.addEventListener('click', handleClick);
    
        return () => {
          document.removeEventListener('click', handleClick);
        };
      });


    return (
        <>
            {(
                <div className={`${isOpen ? 'orginal-open' : 'orginal-close'}`} >
                    <div ref={myDivRef} className={`offcanvas chat-container transition-div ${isOpen ? 'visible' : 'hidden'}`}
                        tabIndex="-1" id="chat-close-btn"
                        aria-labelledby="offcanvasExampleLabel"
                        style={{ height: "100%", width: "30%", right: "0" }}
                    >
                            {/*begin::Messenger*/}
                            <div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger" style={{height:"100%"}}>
                                {/*begin::Card header*/}
                                <div className={language === "ar" ? "card-header ps-5": "card-header pe-5"} id="kt_drawer_chat_messenger_header">
                                    {/*begin::Title*/}
                                    <div className="card-title">
                                        {/*begin::User*/}
                                        <div className="d-flex justify-content-center flex-column me-3">
                                            <a
                                                href={() => false}
                                                className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1 remove-link-style"
                                            >
                                                AI Bot
                                            </a>
                                            {/*begin::Info*/}
                                            <div className="mb-0 lh-1">
                                                <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                                                <span className="fs-7 fw-semibold text-muted">{t("Active")}</span>
                                            </div>
                                            {/*end::Info*/}
                                        </div>
                                        {/*end::User*/}
                                    </div>
                                    {/*end::Title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        {/*begin::Menu*/}
                                        <div className="me-0">
                                            <button
                                                className="btn btn-sm btn-icon btn-active-color-primary"
                                                data-kt-menu-trigger="click"
                                                data-kt-menu-placement="bottom-end"
                                            >
                                                <i className="ki-outline ki-dots-square fs-2" />{" "}
                                            </button>
                                            {/*begin::Menu 3*/}
                                            <div
                                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                                data-kt-menu="true"
                                            >
                                                {/*begin::Heading*/}
                                                <div className="menu-item px-3">
                                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                                        Contacts
                                                    </div>
                                                </div>
                                                {/*end::Heading*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href={() => false}
                                                        className="menu-link px-3"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_users_search"
                                                    >
                                                        Add Contact
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3">
                                                    <a
                                                        href={() => false}
                                                        className="menu-link flex-stack px-3"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_invite_friends"
                                                    >
                                                        Invite Contacts
                                                        <span
                                                            className="ms-2"
                                                            data-bs-toggle="tooltip"
                                                            aria-label="Specify a contact email to send an invitation"
                                                            data-bs-original-title="Specify a contact email to send an invitation"
                                                            data-kt-initialized={1}
                                                        >
                                                            <i className="ki-outline ki-information fs-7" />{" "}
                                                        </span>
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div
                                                    className="menu-item px-3"
                                                    data-kt-menu-trigger="hover"
                                                    data-kt-menu-placement="right-start"
                                                >
                                                    <a href={() => false} className="menu-link px-3">
                                                        <span className="menu-title">Groups</span>
                                                        <span className="menu-arrow" />
                                                    </a>
                                                    {/*begin::Menu sub*/}
                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href={() => false}
                                                                className="menu-link px-3"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Coming soon"
                                                                data-kt-initialized={1}
                                                            >
                                                                Create Group
                                                            </a>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href={() => false}
                                                                className="menu-link px-3"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Coming soon"
                                                                data-kt-initialized={1}
                                                            >
                                                                Invite Members
                                                            </a>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                        {/*begin::Menu item*/}
                                                        <div className="menu-item px-3">
                                                            <a
                                                                href={() => false}
                                                                className="menu-link px-3"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-original-title="Coming soon"
                                                                data-kt-initialized={1}
                                                            >
                                                                Settings
                                                            </a>
                                                        </div>
                                                        {/*end::Menu item*/}
                                                    </div>
                                                    {/*end::Menu sub*/}
                                                </div>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu item*/}
                                                <div className="menu-item px-3 my-1">
                                                    <a
                                                        href={() => false}
                                                        className="menu-link px-3"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-original-title="Coming soon"
                                                        data-kt-initialized={1}
                                                    >
                                                        Settings
                                                    </a>
                                                </div>
                                                {/*end::Menu item*/}
                                            </div>
                                            {/*end::Menu 3*/}
                                        </div>
                                        {/*end::Menu*/}
                                        {/*begin::Close*/}
                                        <button type="button" id='chat-close-btn' className="btn-close btn-close-black" style={{fontSize:"13px",opacity:"1",border:"2px solid",borderRadius:"5px"}} onClick={() => onClose(false)}></button>
                                        {/*end::Close*/}
                                    </div>
                                    {/*end::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body" id="kt_drawer_chat_messenger_body">
                                    {/*begin::Messages*/}
                                    <div
                                        className="scroll-y p-5"
                                        data-kt-element="messages"
                                        data-kt-scroll="true"
                                        data-kt-scroll-activate="true"
                                        data-kt-scroll-height="auto"
                                        data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                                        data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                                        data-kt-scroll-offset="0px"
                                        style={{ height: "70vh" }}
                                    >
                                        {/*begin::Message(in)*/}
                                        <div className="d-flex justify-content-start mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-start">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("A I")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Details*/}
                                                    <div className="ms-3">
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1 remove-link-style"
                                                        >
                                                            AI Bot
                                                        </a>
                                                        <span className="text-muted fs-7 mb-1">2 mins</span>
                                                    </div>
                                                    {/*end::Details*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                    data-kt-element="message-text"
                                                >
                                                    How likely are you to recommend our company to your friends and
                                                    family ?{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(in)*/}
                                        {/*begin::Message(out)*/}
                                        <div className="d-flex justify-content-end mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-end">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Details*/}
                                                    <div className="me-3">
                                                        <span className="text-muted fs-7 mb-1">5 mins</span>
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1 remove-link-style"
                                                        >
                                                            You
                                                        </a>
                                                    </div>
                                                    {/*end::Details*/}
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic-user">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("You")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                    data-kt-element="message-text"
                                                >
                                                    Hey there, we’re just writing to let you know that you’ve been
                                                    subscribed to a repository on GitHub.{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(out)*/}
                                        {/*begin::Message(in)*/}
                                        <div className="d-flex justify-content-start mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-start">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("A I")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Details*/}
                                                    <div className="ms-3">
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1 remove-link-style"
                                                        >
                                                            AI Bot
                                                        </a>
                                                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                                                    </div>
                                                    {/*end::Details*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                    data-kt-element="message-text"
                                                >
                                                    Ok, Understood!{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(in)*/}
                                        {/*begin::Message(out)*/}
                                        <div className="d-flex justify-content-end mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-end">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Details*/}
                                                    <div className="me-3">
                                                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1 remove-link-style"
                                                        >
                                                            You
                                                        </a>
                                                    </div>
                                                    {/*end::Details*/}
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic-user">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("You")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                    data-kt-element="message-text"
                                                >
                                                    You’ll receive notifications for all issues, pull requests!{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(out)*/}
                                        {/*begin::Message(in)*/}
                                        <div className="d-flex justify-content-start mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-start">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("A I")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Details*/}
                                                    <div className="ms-3">
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1 remove-link-style"
                                                        >
                                                            AI Bot
                                                        </a>
                                                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                                                    </div>
                                                    {/*end::Details*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                    data-kt-element="message-text"
                                                >
                                                    You can unwatch this repository immediately by clicking here:{" "}
                                                    <a href="https://keenthemes.com">Keenthemes.com</a>{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(in)*/}
                                        {/*begin::Message(out)*/}
                                        <div className="d-flex justify-content-end mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-end">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Details*/}
                                                    <div className="me-3">
                                                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1 remove-link-style"
                                                        >
                                                            You
                                                        </a>
                                                    </div>
                                                    {/*end::Details*/}
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic-user">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("You")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                    data-kt-element="message-text"
                                                >
                                                    Most purchased Business courses during this sale!{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(out)*/}
                                        {/*begin::Message(in)*/}
                                        <div className="d-flex justify-content-start mb-10 ">
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-start">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("A I")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Details*/}
                                                    <div className="ms-3">
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1 remove-link-style"
                                                        >
                                                            AI Bot
                                                        </a>
                                                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                                                    </div>
                                                    {/*end::Details*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                    data-kt-element="message-text"
                                                >
                                                    Company BBQ to celebrate the last quater achievements and goals.
                                                    Food and drinks provided{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(in)*/}
                                        {/*begin::Message(template for out)*/}
                                        <div
                                            className="d-flex justify-content-end mb-10 d-none"
                                            data-kt-element="template-out"
                                        >
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-end">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Details*/}
                                                    <div className="me-3">
                                                        <span className="text-muted fs-7 mb-1">Just now</span>
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1 remove-link-style"
                                                        >
                                                            You
                                                        </a>
                                                    </div>
                                                    {/*end::Details*/}
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic-user">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("You")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                                                    data-kt-element="message-text"
                                                ></div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(template for out)*/}
                                        {/*begin::Message(template for in)*/}
                                        <div
                                            className="d-flex justify-content-start mb-10 d-none"
                                            data-kt-element="template-in"
                                        >
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-column align-items-start">
                                                {/*begin::User*/}
                                                <div className="d-flex align-items-center mb-2">
                                                    {/*begin::Avatar*/}
                                                    <div className="symbol  symbol-35px symbol-circle chat-pic">
                                                        {/* <img
                                                            alt="Pic"
                                                            src="/metronic8/demo51/assets/media/avatars/300-25.jpg"
                                                        /> */}
                                                        {imgName("A I")}
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    {/*begin::Details*/}
                                                    <div className="ms-3">
                                                        <a
                                                            href={() => false}
                                                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1 remove-link-style"
                                                        >
                                                            AI Bot
                                                        </a>
                                                        <span className="text-muted fs-7 mb-1">Just now</span>
                                                    </div>
                                                    {/*end::Details*/}
                                                </div>
                                                {/*end::User*/}
                                                {/*begin::Text*/}
                                                <div
                                                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                                                    data-kt-element="message-text"
                                                >
                                                    Right before vacation season we have the next Big Deal for you.{" "}
                                                </div>
                                                {/*end::Text*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Message(template for in)*/}
                                    </div>
                                    {/*end::Messages*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card footer*/}
                                <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                                    {/*begin::Input*/}
                                    <input
                                        className="form-control form-control-flush mb-3 py-3"
                                        style={{backgroundColor:"#F5F8FA",borderRadius:"8.45px"}}
                                        rows={1}
                                        data-kt-element="input"
                                        placeholder={t("type_message")}
                                        // defaultValue={"                \n            "}
                                    />
                                    {/*end::Input*/}
                                    {/*begin:Toolbar*/}
                                    <div className="d-flex flex-stack">
                                        {/*begin::Actions*/}
                                        <div className="d-flex align-items-center me-2">
                                            {/* <button
                                                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                                                type="button"
                                                data-bs-toggle="tooltip"
                                                aria-label="Coming soon"
                                                data-bs-original-title="Coming soon"
                                                data-kt-initialized={1}
                                            >
                                                <i className="ki-outline ki-paper-clip fs-3" />{" "}
                                            </button>
                                            <button
                                                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                                                type="button"
                                                data-bs-toggle="tooltip"
                                                aria-label="Coming soon"
                                                data-bs-original-title="Coming soon"
                                                data-kt-initialized={1}
                                            >
                                                <i className="ki-outline ki-cloud-add fs-3" />{" "}
                                            </button> */}
                                        </div>
                                        {/*end::Actions*/}
                                        {/*begin::Send*/}
                                        <button
                                            className="btn  cust-apply-btn cust-btn-height cust-btn-align"
                                            type="button"
                                            data-kt-element="send"
                                        >
                                            {t("Send")}
                                        </button>
                                        {/*end::Send*/}
                                    </div>
                                    {/*end::Toolbar*/}
                                </div>
                                {/*end::Card footer*/}
                            </div>
                            {/*end::Messenger*/}
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatModal
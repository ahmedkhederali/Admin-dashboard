import { useEffect } from "react";
import OrginalFilesTable from "./OrginalFilesTable";
import img from './../../assets/images/folders.png'
import { useTranslation } from "react-i18next";

const OrginalFilesModal = ({ isOpen, onClose, requestData }) => {
  const { t } = useTranslation();

  useEffect(()=>{
  },[isOpen])

  useEffect(()=>{
  },[])

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

    return (
      <>
        {(
          <div className={`${isOpen ? 'orginal-open' : 'orginal-close'}`}>
            <div className={`offcanvas orginal-container transition-div ${isOpen ? 'visible' : 'hidden'}`}
             tabIndex="-1" id="offcanvasExample" 
             aria-labelledby="offcanvasExampleLabel"
             style={{height:"100%",width:"80%",right:"0"}}
             >
              <div dir="ltr" className="offcanvas-header px-5 py-0 py-4 folders-bg"  style={{backgroundColor:"#071437"}}>
              <img alt="book" className="mostafa" src={img} ></img>

                <div className="folder-text" style={{zIndex:"1"}}>
                  <h3 className="offcanvas-title text-white" id="offcanvasExampleLabel">{t("original_files")}</h3>
                  <p className='mt-2' style={{fontWeight:"500",fontSize:"15px",color:"#FFFFFFB2"}}>{t("original_files_subheader")}</p>
                </div>
                <div>
                <button type="button" className="btn-close btn-close-white" style={{fontSize:"13px",opacity:"1",border:"2px solid",borderRadius:"5px"}} onClick={onClose}></button>
                </div>
              </div>
              <div className="card folder-space" style={{boxShadow: 'none', height: '95px'}}>
                
              </div>
              <div className="offcanvas-body" key={isOpen} style={{paddingTop: '0px'}}>
                <OrginalFilesTable requestData={requestData}/>
              </div>


            </div>
          </div>
        )}
      </>
    );
  };

  export default OrginalFilesModal;
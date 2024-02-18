import React from "react";
import "./style.css"
import "../menu/style.css"
import { FaArrowLeft, FaChartLine, FaFileAlt, FaTachometerAlt, FaTimes,FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const MenuModal = ({ isOpen, onClose ,lang,changeLanguage}) => {
    const { t } = useTranslation();
    return (
      <>
        {isOpen && (
          <>
            <div className="overlay"></div>
            <div className="drawer drawer-left slide bg-drawer-style" style={{width:"60%"}} tabindex="-1" role="dialog" aria-labelledby="drawer-1-title" aria-hidden="true" id="drawer-1">
            <div className="overlay-div"></div>
              <div className="drawer-content drawer-content-scrollable w-100" role="document">
                  <div className="drawer-header p-5">
                      <div className="drawer-title" id="drawer-1-title"> 
                      <FaUser size={32} className="user-icon-menu" style={{border:"2px solid #fff"}}/><br/>
                      <p style={{margin:0}}>{t("client name")}</p>
                      <p style={{margin:0}}>{t("client email")}</p>
                      </div>
                  </div>
                  <div className="drawer-body ">
                  <div className='popup-menu'>
            
                  <ul className="smart-ul">
                  <li>
                    <Link className='link-style' to="/dashboard">
                   
                      <FaTachometerAlt className="icon" /> 
                      <span> {t("Dashboard")}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='link-style' to="/ocr">
                      <FaFileAlt className="icon" /> 
                      <span> {t("OCR")}</span>
                      
                    </Link>
                  </li>
                  <li>
                    <Link className='link-style' to="/prediction">
                      <FaChartLine className="icon" />
                      <span>  {t("Prediction")} </span>
                       
                    </Link>
                  </li>
                  <li>
                    <Link className='link-style' to="/dashboard">
                      <FaArrowLeft className="icon" />
                      <span> {t("Back to Dashboard")}</span>
                    </Link>
                  </li>
                  <li className="speacific-li">
                  <div className="hoverd-lang">
            {lang === 'en' ? (
                      <>
                      <Link className='link-style' onClick={() => changeLanguage('ar')}>
                        <MdLanguage className="icon" />
                        <span>  
                       {t("Arabic")}</span>
                      </Link>
                     
                      </>
                      ) : (
                      <>
                       <Link className='link-style' onClick={() => changeLanguage('en')}>
                        <MdLanguage className="icon" />
                        <span>  
                       {t("English")}</span>
                      </Link>
  
                      </>
                      )}
            </div>
                  </li>
                </ul>
     
        </div>
  
                  </div>
                  <FaTimes className="popup-screen-icon" size={32} color={"#a12d2d"}  onClick={onClose}/>
  
              </div>
          </div>
        </>
        )}
      </>
    );
  };
  
  export default MenuModal;

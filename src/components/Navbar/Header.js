import React, { useEffect, useState } from 'react'
import { ReactComponent as DashboardIcon } from '../../assets/Dashboards.svg'; 
import { ReactComponent as OCRIcon } from '../../assets/OCR.svg'; 
import { ReactComponent as PredictionIcon  } from '../../assets/Prediction.svg';
import { ReactComponent as Logo  } from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { FaList } from 'react-icons/fa';

// import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../assets/back.svg'; 
import "./style.css"
import MenuModal from './MenuUpdated/OrginalFilesModal';
import LoaderCompo from './Loader/LoaderCompo';
const Tabs = [
    {id: 1, name: 'Dashboard', icon: <DashboardIcon />},
    {id: 2, name: 'OCR', icon: <OCRIcon />},
    {id: 3, name: 'Prediction', icon: <PredictionIcon />}
]
const Header = ({setPathChange}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [lang, setLang] = useState(localStorage.getItem('Locale') || 'en');
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    if(window.location.pathname === '/') {
        window.location.pathname = '/dashboard'
    }
    const [pathName, setPathName] = useState(window.location.pathname)
    const [loading, setLoading] = useState(false); // Add loading state

    useEffect(() => {
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    },[lang])

    useEffect(() => {
        setPathChange(pathName)
    },[pathName, setPathChange])

    const changeLanguage = (lng) => {
        setLoading(true); // Show loader when changing language
        i18n.changeLanguage(lng);
        localStorage.setItem('Locale', lng);
        document.getElementsByTagName('html')[0].lang = lng
        // Set the language state after a delay
        setTimeout(() => {
          setLang(lng);
          setLoading(false); // Hide loader after the page is ready
        }, 500); // Adjust the delay duration as needed
      };

    const handleIcon = (title) => {
        switch(title) {
            case 'Dashboard':
                return <DashboardIcon className= {pathName === `/${title.toLowerCase()}` ? 'active-class hover-icon': 'hover-icon'}/>
            case 'OCR':
                return <OCRIcon className= {pathName === `/${title.toLowerCase()}` ? 'active-class hover-icon': 'hover-icon'}/>
            case 'Prediction':
                return <PredictionIcon className= {pathName === `/${title.toLowerCase()}` ? 'active-class hover-icon': 'hover-icon'}/>
            default:
                return null

        }

    }
    const handleFlistClick = () => {
        setIsPopupOpen(true);
        document.body.style.overflow = 'hidden';
      };
    
      const handleClosePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = 'auto';

      };
    return (
        <>
      {window.innerWidth <= 1024 ? 
      (
      loading ? <LoaderCompo/> : (<div style={{position:"relative"}}><div className='mobile-logo appear-tabs-in-mobile'>
        <Logo />
        {/* <div>
        {lang === 'en' ? (
                <MdLanguage size={32}  onClick={() => changeLanguage('ar')}/>
                ) : (
                <MdLanguage  size={32} onClick={() => changeLanguage('en')}/>
                )}
        </div> */}
        <FaList size={32} onClick={handleFlistClick}/>
      </div>
      {isPopupOpen && (
        <div >
          <MenuModal changeLanguage={changeLanguage} lang={lang} setLang={setLang} isOpen={isPopupOpen} onClose={handleClosePopup}/>
          {/* <FaTimes className="popup-screen-icon" size={32} color={"red"} onClick={handleClosePopup}/> */}
        </div>
      )}
      </div>)
      ) 
  : loading ? <LoaderCompo/> : ( 
    <div className='container-fluid navbar-parent' style={{padding: '0px 70px', height: '103px'}}>
  
              <div className='mobile-logo disappear-tabs-in-mobile'>
                  <Logo />
              </div>
              <div className='navbar-tabs-parent mob disappear-tabs-in-mobile'>
                  {Tabs.map((item) => {
                      return (
                      <Link className='navbar-tabs' 
                          to={`/${item.name.toLowerCase(`/${item.name.toLowerCase()}`)}`}
                          onClick={() => setPathName(`/${item.name.toLowerCase()}`)}
                          style={{color: pathName === `/${item.name.toLowerCase()}` && '#fff',
                          backgroundColor:  pathName === `/${item.name.toLowerCase()}` && 'rgba(36, 33, 90, 1)'}}>
                          {handleIcon(item.name)}
                          <span className="icon-text-navbar" style={{color: pathName === `/${item.name.toLowerCase()}` && '#fff'}} >{t(item.name)}</span>
                      </Link>
                      )
                  })}
                  
                  
              </div>
  
              <div className='navbar-button disappear-tabs-in-mobile'>
                  <button className='navbar-back-button'>
                  <div className='parent-backto-dash w-100'>
                     <BackIcon width={24} height={24} />
                      <span className="back-to-dashboard" style={{fontWeight:500}}>{t('Back To Dashboard')}</span>
                     </div>
                  </button>
                  {lang === 'en' ? (
                  <button className='lang-handler disappear-tabs-in-mobile' onClick={() => changeLanguage('ar')}>العربية</button>
                  ) : (
                  <button className='lang-handler disappear-tabs-in-mobile' onClick={() => changeLanguage('en')}>English</button>
                  )}
               </div>
  
  
          </div>
          )
        }
        </>
    );
}

export default Header
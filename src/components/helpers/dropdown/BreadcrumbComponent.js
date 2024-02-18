import { Breadcrumb } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function BreadcrumbComponent({pathChange,showResult}) {
  const { t } = useTranslation();
  let path = window.location.pathname;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const homeIcon = () => <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.14114 0.32932C5.37713 0.117293 5.68318 0 6.00043 0C6.31768 0 6.62373 0.117293 6.85971 0.32932L11.574 4.56532C11.708 4.68586 11.8152 4.83323 11.8886 4.99788C11.962 5.16253 12 5.34077 12 5.52103V11.5682C12 11.9092 11.8645 12.2362 11.6234 12.4773C11.3823 12.7184 11.0553 12.8539 10.7143 12.8539H8.57143C8.23044 12.8539 7.90341 12.7184 7.66229 12.4773C7.42117 12.2362 7.28571 11.9092 7.28571 11.5682V8.56818C7.28571 8.45451 7.24056 8.3455 7.16019 8.26513C7.07982 8.18476 6.97081 8.13961 6.85714 8.13961H5.14286C5.02919 8.13961 4.92018 8.18476 4.83981 8.26513C4.75944 8.3455 4.71429 8.45451 4.71429 8.56818V11.5682C4.71429 11.9092 4.57883 12.2362 4.33771 12.4773C4.09659 12.7184 3.76956 12.8539 3.42857 12.8539H1.28571C0.944722 12.8539 0.617695 12.7184 0.376577 12.4773C0.135459 12.2362 0 11.9092 0 11.5682V5.52103C0 5.15675 0.154286 4.80961 0.426857 4.56532L5.14114 0.32932ZM6.28629 0.967035C6.20764 0.896438 6.10568 0.857389 6 0.857389C5.89432 0.857389 5.79236 0.896438 5.71371 0.967035L0.999429 5.20303C0.954769 5.24312 0.919027 5.29214 0.894516 5.34692C0.870005 5.4017 0.857273 5.46102 0.857143 5.52103V11.5682C0.857143 11.6818 0.902296 11.7909 0.982669 11.8712C1.06304 11.9516 1.17205 11.9967 1.28571 11.9967H3.42857C3.54224 11.9967 3.65124 11.9516 3.73162 11.8712C3.81199 11.7909 3.85714 11.6818 3.85714 11.5682V8.56818C3.85714 8.22718 3.9926 7.90016 4.23372 7.65904C4.47484 7.41792 4.80186 7.28246 5.14286 7.28246H6.85714C7.19814 7.28246 7.52516 7.41792 7.76628 7.65904C8.0074 7.90016 8.14286 8.22718 8.14286 8.56818V11.5682C8.14286 11.6818 8.18801 11.7909 8.26838 11.8712C8.34875 11.9516 8.45776 11.9967 8.57143 11.9967H10.7143C10.828 11.9967 10.937 11.9516 11.0173 11.8712C11.0977 11.7909 11.1429 11.6818 11.1429 11.5682V5.52103C11.1427 5.46102 11.13 5.4017 11.1055 5.34692C11.081 5.29214 11.0452 5.24312 11.0006 5.20303L6.28629 0.967035Z" fill="black"/>
  </svg>
  

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

  const breadcrumbStyle = {
      display: 'flex',
      alignItems: 'center',
      // padding: isMobile && '0px 30px',
  };
  const breadcrumbStyleParent = {
    display: 'flex',
    alignItems: 'center',
    padding: isMobile ? '0px 30px' : (showResult ? "70px 0px 0px 0px" :'20px 70px'),
};

useEffect(() => {
}, [pathChange])
  return (
    <div className={`d-flex align-items-start flex-column breadcrumbStyleParent-cust ${localStorage.getItem("Locale") === "ar" &&  'breadcrumbStyleParent-cust-ar' }`} style={breadcrumbStyleParent}>
    {
    
      (path !== '/' && path !== '/dashboard' )&& (
        <div>
        <Breadcrumb aria-label="Default breadcrumb example" className='breadCrumb' style={breadcrumbStyle}>
          <Breadcrumb.Item href={() => false} icon={homeIcon} style={styles.breadcrumbItem}>
        
      </Breadcrumb.Item>
      <Breadcrumb.Item href={() => false} style={styles.breadcrumbItem}>
        {t("Qiyas")}
      </Breadcrumb.Item>
      <Breadcrumb.Item href={() => false} style={styles.breadcrumbItem} className='text-black-700'>
        {path === '/ocr' ? t('OCR') : t('Prediction') }
      </Breadcrumb.Item><br/>
      {showResult && (
        <Breadcrumb.Item href={() => false} style={styles.breadcrumbItem}>
        Team.pdf
      </Breadcrumb.Item>
      )}
    </Breadcrumb>
    {!showResult && <div style={{ ...styles.breadcrumbItem,fontWeight:"700",fontSize:'1.2rem'} }>{path === '/ocr' ? (t('request_list')) : 'Team.pdf' } </div>}
    </div>
      )
    
    }
    </div>
  );
}

const styles = {
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    
  },
  breadcrumbItem: {
    display: 'flex',
    alignItems: 'center',
    fontWeight:"700",
    groupFirstHidden: {
      marginLeft: '1rem',
      height: '1.5rem',
      width: '1.5rem',
      color: '#718096',
      '@media (min-width: 768px)': {
        marginLeft: '2rem',
      },
    },
    hrefOff: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#9CA3AF',
      darkText: {
        color: '#1A202C',
      },
    },
    hrefOn: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#4A5568',
      darkText: {
        color: '#2D3748',
      },
      hoverText: {
        color: '#2C5282',
      },
      darkHoverText: {
        color: '#2C5282',
      },
    },
    icon: {
      marginRight: '0.5rem',
      height: '1.5rem',
      width: '1.5rem',
    },
  },
};


export default BreadcrumbComponent;
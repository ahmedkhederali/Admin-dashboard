import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as PDF } from "../../assets/pdf.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import IMG1 from "../../assets/images/pdf1.png"
import IMG2 from "../../assets/images/pdf2.png"
import BreadcrumbComponent from "../helpers/dropdown/BreadcrumbComponent";


const ShowResults = ({pathChange}) => {

  const language = localStorage.getItem('Locale');

  const myDivRef = useRef(null);
  const [,setDivHeight] = useState(myDivRef?.current?.clientHeight)

  const [currentFile,setCurrentFile] = useState(filesData[0])

  useEffect(() => {
    if (myDivRef.current) {
      const getDivHeight = myDivRef.current.clientHeight;
      setDivHeight(getDivHeight)
    }
  }, []);

  const setFile = (file) => {
    setCurrentFile(file);
  }



  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: language === 'ar' ? <SamplePrevArrow /> : <SampleNextArrow />,
    prevArrow: language === 'ar' ? <SampleNextArrow /> : <SamplePrevArrow />,
  };
  return (
    <div className="" style={{ width: "100%", position: "relative" }}>
      <div
        className="slider-container slider-container-cust-style"
        style={language === "ar" ? { position: "absolute", left: "0" } : { position: "absolute",  right: "0" }}
        id="myDiv" ref={myDivRef}
      >
        <Slider {...settings}>
          {filesData.map((file) => (
            <div className="px-3 d-flex flex-column align-items-center pointer" style={{cursor:"pointer"}} onClick={()=>{setFile(file)}}>
            <div className="circulr-progress-cust-style">
              <CircularProgressbar
                value={80}
                text={"80%"}
                styles={buildStyles({
                  // strokeLinecap: "butt",
                  textSize: "19px",
                  fontWeight:"600",
                  pathTransitionDuration: 0.5,
                  pathColor: `#0086B9`,
                  textColor: "#242731",
                  trailColor: `#E2E4EC`,
                  rotation: 0.5
                })}
              />
            </div>
            <div className={`d-flex text-center  ${currentFile.id === file.id ? "important-border" : "not-important-border"}`}>
              {file.files.map((fileName) => (
                <div>
                <PDF className="pdf-cust-style"/>
                <p className="pdf-name">{fileName.name}</p>
              </div>
              ))}
            </div>
          </div>
          ))}
          {/*  */}
          
        </Slider>
      </div>

      <div className="">
        <div>
        <BreadcrumbComponent pathChange={pathChange} showResult={true}/>
        </div>
        <h3 style={{fontSize:"17px",fontWeight:"600"}}>{currentFile.name}</h3></div>
      <div style={{marginTop:`120px`,marginBottom:"50px"}}>
        <div className="row" style={{border:"1px solid #F1F1F4",boxShadow: '0px 3px 4px 0px #00000008'}}>
          <div className="col-6 p-0">
            <img alt="pdf1" src={IMG1} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="col-6 p-0">
            <img alt="pdf1" src={IMG2} style={{width:"100%",height:"100%"}}/>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ShowResults;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  const containsDisabled = className.includes("slick-disabled");

  return (

      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`${className} important-color`}
      style={containsDisabled ? { ...style, display: "block", opacity:0.25 } : { ...style, display: "block" }}
      onClick={onClick}
      >
      <path d="M1.31836 12C1.21536 12.0005 1.11331 11.9804 1.01819 11.9409C0.923056 11.9014 0.836776 11.8433 0.764406 11.7701C0.617616 11.6231 0.535156 11.4238 0.535156 11.2161C0.535156 11.0084 0.617616 10.8091 0.764406 10.6622L5.43635 5.99022L0.764406 1.31827C0.625946 1.16968 0.550556 0.973132 0.554146 0.770052C0.557726 0.566982 0.639996 0.373222 0.783616 0.229592C0.927236 0.085972 1.121 0.00371199 1.32408 0.000121987C1.52716 -0.00345901 1.7237 0.0719219 1.8723 0.210392L7.09818 5.43628C7.24498 5.58325 7.32748 5.78249 7.32748 5.99022C7.32748 6.19795 7.24498 6.39718 7.09818 6.54416L1.8723 11.7701C1.79993 11.8433 1.71365 11.9014 1.61852 11.9409C1.5234 11.9804 1.42135 12.0005 1.31836 12Z" fill="#24215A"/>
      </svg>

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  const containsDisabled = className.includes("slick-disabled");

  return (
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`${className} important-color`}
      style={containsDisabled ? { ...style, display: "block", opacity:0.25 } : { ...style, display: "block" }}
      onClick={onClick}
      >
      <path d="M6.61524 -1.90735e-06C6.71824 -0.000501633 6.82029 0.019598 6.91541 0.0590982C7.01054 0.0985985 7.09682 0.156698 7.16919 0.229898C7.31598 0.376899 7.39844 0.576199 7.39844 0.783898C7.39844 0.991598 7.31598 1.1909 7.16919 1.3378L2.49725 6.00978L7.16919 10.6817C7.30765 10.8303 7.38304 11.0269 7.37945 11.2299C7.37587 11.433 7.2936 11.6268 7.14998 11.7704C7.00636 11.914 6.8126 11.9963 6.60952 11.9999C6.40644 12.0035 6.2099 11.9281 6.0613 11.7896L0.835418 6.56372C0.688618 6.41675 0.606117 6.21751 0.606117 6.00978C0.606117 5.80205 0.688618 5.60282 0.835418 5.45584L6.0613 0.229898C6.13367 0.156698 6.21995 0.0985985 6.31508 0.0590982C6.4102 0.019598 6.51225 -0.000501633 6.61524 -1.90735e-06Z" fill="#24215A"/>
      </svg>
  );
}


const filesData = [
  {id:1,name:"Team.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:2,name:"Team1.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:3,name:"Team2.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:4,name:"Team3.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:5,name:"Team4.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:6,name:"Team5.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:7,name:"Team6.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:8,name:"Team7.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:9,name:"Team8.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
  {id:10,name:"Team9.pdf",files:[{name:"Eslam"},{name:"Tarek"}]},
]
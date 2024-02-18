
import React from 'react';
import './../assets/css/charts.css'
import "./Navbar/style.css"
import DashboardCharts from './charts/DashboardCharts.js';



const Charts = () => {

  return (
    <div className='container-fluid charts-container' style={{padding: '10px 70px 30px 70px'}}>
    <div className="row  gy-md-5  g-xl-5" >
      <DashboardCharts />
      {/* <div className="col-xl-6 mb-5 mb-lg-10 responsive-mobile-img" style={{display: "flex" , flexDirection: "row-reverse"}}>
          <img src={img1} />
      </div> */}

    </div>
    </div>
  );
};

export default Charts;


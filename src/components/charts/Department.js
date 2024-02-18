import React, { useEffect } from 'react';
import { ReactComponent as Arrow  } from '../../assets/arrow.svg';
import { useTranslation } from 'react-i18next';
const Department = () => {

  const {t} = useTranslation();
  useEffect(() => {
    const chart = window.am4core.create('chartdiv', window.am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0;

    am4core.ready(function() {
    
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        var chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        
        chart.data = [
          {
            country: "Lithuania",
            value: 401
          },
          {
            country: "Czech Republic",
            value: 300
          },
          {
            country: "Ireland",
            value: 200
          },
          {
            country: "Germany",
            value: 165
          },
          {
            country: "Australia",
            value: 139
          },
          {
            country: "Austria",
            value: 128
          }
        ];
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;  
        
        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";
        
        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;
        
        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        
        chart.legend = new am4charts.Legend();

        })

    return () => {
      chart.dispose();
    };
  }, []);

  return (

    <div className="col-xl-4 mb-5 mb-xl-10">
      {/*begin::Chart widget 30*/}
      <div className="card card-flush h-xl-100">
        {/*begin::Header*/}
        <div className="card-header pt-7 mb-7">
          {/*begin::Title*/}
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-800">
              {t('Stats by Department')}
            </span>
            <span className="text-gray-500 mt-1 fw-semibold fs-6">
              8k {t('social visitors')}
            </span>
          </h3>
          {/*end::Title*/}
          {/*begin::Toolbar*/}
          <div className="card-toolbar">
            <a
               href={() => false}
              className="btn btn-sm btn-light"
            >
              {t('PDF Report')}
            </a>
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-7 ">
          {/*begin::Items*/}
          <div className="d-flex flex-wrap d-grid gap-5 mb-10" style={{direction: 'ltr'}}>
            {/*begin::Item*/}
            <div className="border-end-dashed border-gray-300 pe-xxl-7" style={{borderWidth: '1px'}}>
              {/*begin::Statistics*/}
              <div className="d-flex mb-2">
                <span className="fs-4 fw-semibold text-gray-500 me-1">$</span>
                <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                  8,035
                </span>
              </div>
              {/*end::Statistics*/}
              {/*begin::Description*/}
              <span className="fs-6 fw-semibold text-gray-500">
                {t('Actual for April')}
              </span>
              {/*end::Description*/}
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="border-end-dashed  border-gray-300 pe-xxl-7" style={{borderWidth: '1px'}}>
              {/*begin::Statistics*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Currency*/}
                <span className="fs-4 fw-semibold text-gray-500 align-self-start me-1">
                  $
                </span>
                {/*end::Currency*/}
                {/*begin::Value*/}
                <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                  4,684
                </span>
                {/*end::Value*/}
                {/*begin::Label*/}
                <span className="badge badge-light-success fs-base">
                 <Arrow />
                  4.5%
                </span>
                {/*end::Label*/}
              </div>
              {/*end::Statistics*/}
              {/*begin::Description*/}
              <span className="fs-6 fw-semibold text-gray-500">{t('GAP')}</span>
              {/*end::Description*/}
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Items*/}
          {/*begin::Chart container*/}
          <div id="chartdiv" dir='ltr' style={{ width: '100%', height: '300px' }} />
          {/*end::Chart container*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Chart widget 30*/}
    </div>

  ) 
  
};

export default Department;

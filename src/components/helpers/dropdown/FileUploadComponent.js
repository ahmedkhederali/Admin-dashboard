import React, { useState, useRef } from 'react';

import pdf from './../../../assets/pdf.png'
import excel from './../../../assets/Excel.png'
import word from './../../../assets/word.png'
import image from './../../../assets/image.png'
import uploadImg from './../../../assets/images/upload.png'
import { useTranslation } from 'react-i18next';

const FileUploadComponent = () => {

  const { t } = useTranslation();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };


  const handleFileInputClick = () => {
    // Trigger file input click when "Upload" button is clicked
    fileInputRef.current.click();
  };
  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();

    switch (extension) {
      case 'pdf':
        return pdf;
      case 'xls':
      case 'xlsx':
        return excel;
      case 'docx':
      case 'doc':
        return word;
      case 'tiff':
      case 'tif':
      case 'bmp':
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'png':
      case 'eps':
      case 'raw':
      case 'cr2':
      case 'webp':
      case 'nef':
        return image

      default:
        return null;
    }
  };
  return (
    <div style={{overflow: 'none'}}>
      <p style={{ color: "#99A1B7", fontSize: '14px', fontWeight: "400" }}>
        {t("upload_desc")}
      </p>
      <div
       style={{overflow: 'none'}}
        className='uploadContainer'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleFileInputClick}
      >
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".doc, .docx, .xls, .xlsx, .csv, .pdf, image/*"
          multiple
          type="file"
          autoComplete="off"
          tabIndex="-1"
          style={{ display: "none" }}
        />
        <div className='d-flex py-3'  style={{overflow: 'none'}}> 
          <div>
            <img src={uploadImg} alt="uploded iamge" className='mx-3' style={{width:"45px",height:"45px",color:"#24215A"}}/>        
          </div>
          <div>
            <p style={{ fontWeight: "500", fontSize: "14px", marginBottom: "0" }}>
              {t("drop_desc1")}
            </p>
            <p className='m-0'>{t("drop_desc2")}</p>
          </div>
        </div>
      </div>
      <div>
        {selectedFiles.length > 0 && <h6 style={{margin: '15px 0'}}>{t("uploaded_files")}</h6> }
        <ul style={{overflow: 'auto', listStyle: 'none', display: 'flex', flexDirection: 'column', gap:'10px', maxHeight: '150px'}}>
          {selectedFiles.map((file, index) => (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <li key={index} style={{display: 'flex', flexDirection: 'row-reverse', gap: '5px', alignItems: 'center'}}>
                {file.name} 
                <span>{file.size}</span>
                <img src={getFileType(file.name)}  alt='' style={{width: '30px', height: '30px'}}/>
             </li>
                <button  style={{padding: '5px 13px', border: 'none', borderRadius: '4px'}}
                onClick={() => handleRemoveFile(index)}>{t("remove")}</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploadComponent;

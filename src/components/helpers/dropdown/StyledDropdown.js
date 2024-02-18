import React, { useEffect, useRef, useState } from "react";

const dropdownStyle = {
  position: "relative",
  display: "inline-block",
  outline: "none",
};

const selectStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "none", // Remove border
  borderRadius: "4px",
  backgroundColor: "white", // Set background color to white
  // appearance: 'none', /* Remove default arrow in some browsers */
  cursor: "pointer",
  outline: "none", // Remove outline when focused
  color: "#454545",
  fontWeight: "400",
  lineHeight: "16.94px",
};


const StyledDropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [openSelect, setOpenSelect] = useState(false);

  const myDivRef = useRef(null);

  const handleSelectChange = (option) => {
    // const value = event.target.value;
    setSelectedOption(option);
    if (onChange) {
      onChange(option.value);
    }
    setOpenSelect(false)
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (myDivRef.current && (myDivRef.current.id !== event.target.id)) {
        setOpenSelect(false)
      } 
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div style={dropdownStyle}>
      {/* <select style={selectStyle} value={selectedOption} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
      {/* <span style={arrowStyle}>&#9662;</span> */}

      <div>
        <a
          id={`close-target`}
          href={() => false}
          className="btn custom-td-action"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          style={selectStyle}
          onClick={() => { setOpenSelect(!openSelect); }}
        >
          {selectedOption.label}
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
          <span className="svg-icon svg-icon-5 m-0 mx-2 custom-td-action">
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
          className={openSelect ? "menu menu-sub-show menu-sub-show-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7  py-4  custom-td-list" : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"}
          data-kt-menu="true"
          id={`close-target`}
          ref={myDivRef}
        >
          {options.map((option) => (
            <div className="menu-item">
            <a
              className="menu-link px-2"
              href={() => false}
              onClick={() => handleSelectChange(option)}
              style={{textDecoration:"none"}}
            >
              {option.label}
            </a>
          </div>
          ))}
        </div>
        {/*end::Menu*/}
      </div>
    </div>
  );
};

export default StyledDropdown;

import React from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#062226" : "transparent",
    color: state.isFocused ? "white" : "black",
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    width: "full",
    borderRadius: 0,
    boxShadow: "none !important",
    '@media (min-width: 320px)': {
      width: '290px', 
      position: "absolute", 
      left: "50%", 
      transform: "translateX(-50%)", 
    },
    '@media (min-width: 640px)': {
      width: '437px',
      position: "absolute", 
      left: "50%", 
      transform: "translateX(-50%)", 
    },
    '@media (min-width: 768px)': {
      width: '437px',
      position: "absolute", 
      left: "50%", 
      transform: "translateX(-50%)", 
    },
    '@media (min-width: 1024px)': {
      width: '715px',
      position: "none", 
      left: "0%", 
      transform: "translateX(0%)", 
    },
    '@media (min-width: 1280px)': {
      width: '892px',
      position: "none", 
      left: "0%", 
      transform: "translateX(0%)", 
      
    },
    '@media (min-width: 1440px)': {
      width: '892px',
      position: "none", 
      left: "0%", 
      transform: "translateX(0%)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

function CustomSelect({ options, value, onChange }) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder="Select location"
      isSearchable
      styles={customStyles}
    />
  );
}

export default CustomSelect;


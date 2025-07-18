// components/CustomSelect.js
import React from "react";
import { Form } from "react-bootstrap";

const CustomSelect = ({
  options = [],
  label,
  value,
  onChange,
  placeholder = "Select an option",
  displayKey = "name",
  valueKey = "id",
}) => {
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={"all"}>{"All"}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt[valueKey]}>
            {opt[displayKey]}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default CustomSelect;

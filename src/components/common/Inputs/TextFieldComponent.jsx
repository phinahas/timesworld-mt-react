import { Form } from "react-bootstrap";

function TextFieldComponent({
  type = "text",
  as = "input",
  placeholder,
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <Form.Control
      className="w-100"
      as={as}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      //isInvalid={!!error}
      {...props}
    />
  );
}

export default TextFieldComponent;

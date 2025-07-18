import React, { useState } from "react";

//bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";

//redux
import { useDispatch } from "react-redux";
import { SET_USER } from "../../../store/actions";

//icons
import Google from "../../../assets/lineicons/google";
import Faceebook from "../../../assets/lineicons/Faceebook";
import Twitter from "../../../assets/lineicons/Twitter";
import Linkedin from "../../../assets/lineicons/Linkedin";

// UI Components
import TextFieldComponent from "../../common/Inputs/TextFieldComponent";
import Simplebutton from "../../common/Buttons/Button";
import DividerWithText from "../DividerWithText/DividerWithText";
import { useNavigate } from "react-router-dom";

export default function LoginSectionComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const [passwordError, setPasswordError] = useState([]);

  const setUsername = (e) => {
    setusername(e.target.value);
  };

  const setPassword = (e) => {
    setpassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const setCheckBox = (e) => {
    setIsChecked(e.target.checked);
  };

  const validatePassword = (password) => {
    const errors = [];

    if (/\s/.test(password)) {
      errors.push("Should not contain spaces.");
    }

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push("Must include at least one special character.");
    }

    return errors;
  };

  const login = () => {
    dispatch({
      type: SET_USER,
      payload: {
        username: username,
      },
    });
    sessionStorage.setItem("user", JSON.stringify({ username: username }));
    navigate("/");
  };

  return (
    <Container className="">
      <Row className="signInDescSec mb-3">
        <Col className="">
          <h4>Sign In</h4>
        </Col>
        <Row>
          <Col>
            New User? <a href="#">Create an account</a>
          </Col>
        </Row>
      </Row>
      <Row className="singInUserName mb-2 ">
        <Col lg={5} md={6} className="p-1">
          <TextFieldComponent
            onChange={setUsername}
            value={username}
            placeholder={"username or email"}
          />
        </Col>
      </Row>
      <Row className="singInUserPass mb-2 ">
        <Col lg={5} md={6} className="p-1">
          <TextFieldComponent
            onChange={setPassword}
            value={password}
            placeholder={"password"}
            type={"password"}
          />
        </Col>
        {passwordError.length > 0 && password.length > 0 && (
          <ul>
            {passwordError.map((error, index) => (
              <li key={index} className="text-danger">
                {error}
              </li>
            ))}
          </ul>
        )}
      </Row>

      <Row className="signInCheckBox mb-2">
        <Col lg={5} md={6} className="p-1">
          <Form.Check
            type="checkbox"
            label="Keep me signed in"
            checked={isChecked}
            onChange={setCheckBox}
          />
        </Col>
      </Row>
      <Row className="signInCheckBox mb-2">
        <Col lg={5} md={6} className="p-1">
          <Simplebutton
            label="Sign In"
            disabled={
              username != null &&
              username != "" &&
              passwordError.length == 0 &&
              password != null
                ? false
                : true
            }
            onClick={login}
          />
        </Col>
      </Row>
      <Row className="signInDivider">
        <Col lg={5} md={6} className="p-1">
          <DividerWithText />
        </Col>
      </Row>

      <Row
        className="signInDivider d-flex flex-nowrap "
        style={{ backgroundColor: "", paddingLeft: "" }}
      >
        <Col lg={5} md={6} className="p-1">
          <Row style={{justifyContent: "center"}}>
            <Col xs="auto" className="p-1">
              <Google />
            </Col>
            <Col xs="auto" className="p-1">
              <Faceebook />
            </Col>
            <Col xs="auto" className="p-1">
              <Linkedin />
            </Col>
            <Col xs="auto" className="p-1">
              <Twitter />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

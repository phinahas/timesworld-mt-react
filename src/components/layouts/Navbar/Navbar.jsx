// components/ResponsiveNavbar.js
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../store/actions";
const ResponsiveNavbar = () => {
  const dispatch = useDispatch();
  const userAuthConfigFromStore = useSelector((state) => state.userAuth);

  const onLogout = () => {
    sessionStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  };

  return (
    <Navbar bg="light" expand="md" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#">Timesworld MT</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="align-items-center gap-2">
            <span className="text-dark fw-semibold">
              Hello, {userAuthConfigFromStore?.user?.username}
            </span>
            <Button variant="outline-danger" size="sm" onClick={onLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;

import Nav from "react-bootstrap/Nav";
import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  return (
    //for navigation
    <Nav>
      <Nav.Item>
        <Nav.Link onClick={() => navigate("/all-users")}>All Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => navigate("/add-users")}>Add Users</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;

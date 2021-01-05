import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import PersonIcon from "@material-ui/icons/Person";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#1769aa" }} expand="lg">
          <Navbar.Brand href="/">Marka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/products">Tüm Ürünler</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            {/*  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
    </NavDropdown>*/}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button style={{ marginRight: "500px" }} variant="outline-info">
                Search
              </Button>
              <Button href="/cart">
                <ShoppingCartSharpIcon>Sepete Git</ShoppingCartSharpIcon>
                Sepete Git
              </Button>
              <Button href="/login" style={{ marginLeft: "20px" }}>
                <PersonIcon>Sepete Git</PersonIcon>
                Giriş Yap
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <br />
      </div>
    );
  }
}

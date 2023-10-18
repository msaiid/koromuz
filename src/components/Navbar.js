import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/Logo.svg";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-light">
      <Container className="">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2  my-lg-3 ">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="#">Искать работу</Nav.Link>
            <Nav.Link href="#">Работадатель</Nav.Link>
            <Nav.Link href="#">Кандидат</Nav.Link>
            <Nav.Link href="#">О нас</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Button variant="link" className="text-decoration-none">
              Загрузите резюме
            </Button>
            <Button variant="outline-primary" className="mx-2">
              Вход / Регистрация
            </Button>
            <Button variant="primary">Добавить вакансию</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import "./Add__Vacancy.css";
import card1 from "../img/card profile 1.svg";
import card2 from "../img/card profile 2.svg";
import card3 from "../img/card profile 3.svg";
import card4 from "../img/card profile 4.svg";
import card5 from "../img/card profile 5.svg";
import card6 from "../img/card profile 6.svg";
import Documents from "./Documents";

function Add__Vacancy() {
  return (
    <Container fluid style={{ background: "#F5F7FC" }} className="pt-5 pb-5">
      <Row className="d-flex flex-row">
        <Col md="4" className="align-self-center">
          <h1>Разместите вакансию на</h1>
          <h1>KOROMUZ.TJ</h1>
          <p>
            И находите сотрудников среди тех, кто хочет у вас работать.
            koromuz.tj - это твоя новая любимая работа
          </p>
          <Button className="btn-lg">Разместить вакансию</Button>
        </Col>
        <Col
          className="map d-flex flex-column align-items-center justify-content-center"
          md="8"
        >
          <div className="cards-one d-flex ">
            <img src={card1} alt="card1" className="align-self-start" />
            <img src={card2} alt="card2" />
            <img src={card3} alt="card3" />
          </div>

          <div className="cards-two">
            <img src={card4} alt="card4" />
            <img src={card5} alt="card5" />
            <img src={card6} alt="card6" />
          </div>
        </Col>
      </Row>

      <Row className="d-flex flex-column align-items-center mt-5 pb-5 pt-5">
        <Col className="text-center">
          <h2>
            Какие сотрудники есть на{" "}
            <span style={{ color: "#3276FA" }}>koromuz.tj?</span>
          </h2>
          <p>
            Не ждите откликов - найдите идеального сотрудника сами среди 94 734
            резюме
          </p>
        </Col>

        <Col className="w-75 mt-5">
          <InputGroup className="mb-3 position-relative" style={{ zIndex: 0 }}>
            <Form.Control
              className="rounded-pill px-4 py-4"
              placeholder="Поиск по резюме"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="primary"
              id="button-addon2"
              className="rounded-pill"
              style={{
                width: "201px",
                height: "60px",
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: 99,
              }}
            >
              Найти сотрудника
            </Button>
          </InputGroup>

          <p>
            Часто ищут резюме:
            <a
              href="#"
              className="text-dark nav-link badge mx-2"
              style={{ background: "#D3E5FF" }}
            >
              Продавец консультант
            </a>
            <a
              href="#"
              className="text-dark nav-link badge"
              style={{ background: "#E0F9E6" }}
            >
              Программист
            </a>
            <a
              href="#"
              className="text-dark nav-link badge mx-2"
              style={{ background: "#FEF2D9" }}
            >
              Дизайнер
            </a>
          </p>
        </Col>
      </Row>
    </Container>

    

  );
}

export default Add__Vacancy;

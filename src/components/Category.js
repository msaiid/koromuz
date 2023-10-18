import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Category.css";
import money from "../img/money.svg";
import megaphone from "../img/megaphone.png";
import start from "../img/start.svg";
import web from "../img/web-programming.png";
import research from "../img/research.svg";
import manag from "../img/manag.png";
import support from "../img/support.svg";
import health from "../img/first-aid-kit.svg";
import car from "../img/car.svg";

function Category() {
  return (
    <Container fluid className="mt-5 mb-5">
      <Container>
        <Row>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={money} alt="money" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Финансы и учеты
                </a>
                <p>(14 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={megaphone} alt="megaphone" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Маркетинг
                </a>
                <p>(14 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={start} alt="start" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Дизайн
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={web} alt="web" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Разработка
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={research} alt="research" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Отдел кадров
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={manag} alt="managment" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Проджект менеджемент
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={support} alt="support" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Обслуживание клиентов
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={health} alt="health" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Health and Care
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-4">
            <Card className="rounded d-flex flex-row align-items-center px-3 category__card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "grid",
                  placeContent: "center",
                }}
                className="me-3 category__card__icon"
              >
                <img src={car} alt="car" />
              </div>
              <div>
                <a href="#" className="nav-link">
                  Automotive Jobs
                </a>
                <p>(12 открытых вакансии)</p>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Button className="btn-lg">Все вакансии</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Category;

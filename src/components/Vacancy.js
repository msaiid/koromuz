import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import alif from "../img/logo-alif.svg";
import dc from "../img/logo-dc.svg";
import humo from "../img/logo-humo.png";
import orien from "../img/logo-orien.svg";
import asia from "../img/logo-asia.svg";
import tcell from "../img/logo-tcell.svg";
import vacancy from "../img/vacancy.svg";
import geo from "../img/geo.svg";
import time from "../img/time.svg";
import money from "../img/money (1) 2.svg";
import "./Vacancy.css";

function Vacancy() {
  return (
    <Container fluid style={{ background: "#F5F7FC" }}>
      <Container className="pt-5 pb-5">
        <Row>
          <Col className="text-center mt-5 mb-3">
            <h2>Рекомендуемые Вакансии</h2>
            <p>Know your worth and find the job that qualify your life</p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={alif} alt="alif" className="h-50" />
              </div>
              <div>
                <h2>UX/UI дизайнер (Figma)</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2" />
                  <span>Алиф Банк</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 3000с</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="6">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={dc} alt="dc" className="h-50" />
              </div>
              <div>
                <h2>Программист HTML разработчик</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2" />
                  <span>Душанбе Сити</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 3000с</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="6" className="mt-5">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={humo} alt="humo" className="h-50" />
              </div>
              <div>
                <h2>Фронтенд-инжинер React</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2 " />
                  <span>Хумо</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 9000с</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="6" className="mt-5">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={orien} alt="orien" className="h-50" />
              </div>
              <div>
                <h2>UX/UI дизайнер (Figma)</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2" />
                  <span>Ориёнбанк</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 3000с</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="6" className="mt-5">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={asia} alt="asia" className="h-50" />
              </div>
              <div>
                <h2>UX/UI дизайнер (Figma)</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2" />
                  <span>Азия-Плюс</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 3000с</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="6" className="mt-5">
            <Card className="d-flex flex-row vacancy__card justify-content-around py-4">
              <div className="">
                <img src={tcell} alt="tcell" className="h-50" />
              </div>
              <div>
                <h2>UX/UI дизайнер (Figma)</h2>
                <div className="d-flex flex-row justify-content-between ">
                  <img src={vacancy} alt="vacancy" className="mx-2" />
                  <span>Tcell</span>
                  <img src={geo} alt="geo" className="mx-2" />
                  <span>Душанбе</span>
                  <img src={time} alt="time" className="mx-2" />
                  <span>11 ч. назад</span>
                  <img src={money} alt="money" className="mx-2" />
                  <span>от 3000с</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="">
          <Col className="text-center mt-3">
            <Button className="btn-lg">Загрузить больше</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Vacancy;

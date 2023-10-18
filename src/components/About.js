import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./About.css";
import drawing from "../img/drawing 1.svg";
import process from "../img/process 1.svg";
import task from "../img/task 1.svg";
import finger from "../img/one-finger-click 1.svg";
import alif from "../img/alif.png";
import asia from "../img/asia.png";
import tcell from "../img/tcell.png";
import humo from "../img/humo.png";
import mob from '../img/image 116.png'
import googleplay from '../img/google.png'
import appstore from '../img/apple.png'
import amazon from '../img/amazon.png'
import air from '../img/air.png'
import invision from '../img/invision.png'
import paypal from '../img/paypal.png'
import spotify from '../img/spotify.png'

function About() {
  return (
    <>
      <Container fluid className="pb-5 pt-5">
        <Container className="w-75">
          <Row>
            <Col className="text-center">
              <h2>Как это работает?</h2>
              <p>Прости шаги для того чтобы найти подходящую работу</p>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <div className="d-flex flex-column card__about">
                <div className="blob">
                  <img src={drawing} alt="" />
                </div>
                <h4>Зарегистрируйтесь</h4>
                <p>
                  Пройдите простую процедуру регистрации подтвердив свой номер
                  телефона
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex flex-column card__about">
                <div className="blob">
                  <img src={process} alt="process" />
                </div>
                <h4>Создать профиль</h4>
                <p>
                  Легко создайте свой профиль, заполнив все необходимые поля.
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex flex-column card__about">
                <div className="blob">
                  <img src={task} alt="task" />
                </div>
                <h4>Загрузите резюме</h4>
                <p>
                  Если у Вас есть готовый резюме загрузите его если нет Вы
                  можете создать резюме онлайн
                </p>
              </div>
            </Col>
            <Col md="3">
              <div className="d-flex flex-column card__about">
                <div className="blob">
                  <img src={finger} alt="finger" />
                </div>
                <h4>Отправляйте отклики на вакансии</h4>
                <p>
                  Теперь вы можете отправлять отклики на понравившиеся вакансии
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="pb-5 pt-5" style={{ background: "#EEF1F8" }}>
        <Container className="w-75">
          <Row>
            <Col className="text-center mt-5 mb-5">
              <h2>Крупнейшие работодатели</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </p>
            </Col>
          </Row>

          <Row className="d-flex justify-content-around">
            <Col md="3">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "300px", height: "294px" }}
              >
                <div>
                  <img src={alif} alt="alif" className="my-3" />
                </div>

                <h4>Алиф Банк</h4>
                <p> 12 вакансии </p>
              </div>
            </Col>
            <Col md="3">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "300px", height: "294px" }}
              >
                <div>
                  <img src={asia} alt="process" className="my-3" />
                </div>

                <h4>Азия-Плюс</h4>
                <p>12 вакансии</p>
              </div>
            </Col>
            <Col md="3">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "300px", height: "294px" }}
              >
                <div>
                  <img src={tcell} alt="task" className="my-3" />
                </div>

                <h4>Tcell</h4>
                <p>12 вакансии</p>
              </div>
            </Col>
            <Col md="2" className="mb-5">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "300px", height: "294px" }}
              >
                <div>
                  <img src={humo} alt="finger" className="my-3" />
                </div>

                <h4>Хумо</h4>
                <p>12 вакансии</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

   
       
     {/* App start */}

      <Container fluid className="pb-5 pt-5">

        <Container>
          <Row>
            <Col md='7' xs='12'>
            <img src={mob} alt="smartphone" className="smartphone" />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
            <a href="#" className="text-decoration-none">СКАЧАЙТЕ И НАСЛАЖДАЙТЕСЬ</a>
            <h2>Загрузите приложение KOROMUZ.TJ для поиска стажёрство и работы</h2>
            <p>Просмотрите миллионы вакансий и найдите подходящую. Просто скачайте приложение и зарегестрируйтесь.</p>
            <div className="d-flex justify-content-between flex-wrap">
             <a href="#">
              <img src={appstore} alt="appstore" />
              </a>
             <a href="#">
             <img src={googleplay} alt="googleplay" />
              </a> 
            </div>
            </Col>
          </Row>
        </Container>

      </Container>

           {/* App end */}

     {/*  Parters start  */}       

     <Container fluid className="pb-5 pt-5" style={{ background: "#EEF1F8" }}>
        <Container className="w-75">
          <Row>
            <Col className="text-center mt-5 mb-5">
              <h2>Партнеры</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              </p>
            </Col>
          </Row>

          <Row className="d-flex justify-content-around">
            <Col>
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "190px", height: "89px" }}
              >
                <div>
                  <img src={amazon} alt="amazon" className="my-3" />
                </div>

              </div>
            </Col>
            <Col>
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "190px", height: "89px" }}
              >
                <div>
                  <img src={air} alt="airbnb" className="my-3" />
                </div>

              </div>
            </Col>
            <Col>
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "190px", height: "89px" }}
              >
                <div>
                  <img src={invision} alt="invision" className="my-3" />
                </div>

               
              </div>
            </Col>
            <Col  className="mb-5">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "190px", height: "89px" }}
              >
                <div>
                  <img src={paypal} alt="paypal" className="my-3" />
                </div>

    
              </div>
            </Col>

            <Col  className="mb-5">
              <div
                className="card__about d-flex flex-column justify-content-center align-items-center"
                style={{ background: "#fff", width: "190px", height: "89px" }}
              >
                <div>
                  <img src={spotify} alt="spotify" className="my-3" />
                </div>

    
              </div>
            </Col>
          </Row>
        </Container>
      </Container>



    </>
  );
}

export default About;

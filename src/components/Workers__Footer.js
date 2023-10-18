import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import arrow from "../img/стрелка.svg";
import "./Workers__Footer.css";
import static1 from "../img/static1.png";
import static2 from "../img/static2.png";
import static3 from "../img/static3.png";
import bg from '../img/20943594 1.png'
function Workers__Footer() {
  return (
    <>
      {/* С чего начать поиск сотрудников? */}

      <Container fluid style={{ background: "#F5F7FC" }}>
        <Container className="pb-5 pt-5">
          <Row className="d-flex flex-column">
            <Col>
              <h2 className="text-center">С чего начать поиск сотрудников?</h2>
              <div className="row d-flex flex-row justify-content-around mt-5">
                <div className="col-md-3 d-flex flex-row">
                  <div>
                    <h1 className="num">01</h1>
                    <h4>Зарегистрируйтесь</h4>
                    <p>И получите доступ ко всем услугам koromuz.tj</p>
                  </div>

                  <div className="arrow" style={{ position: "relative" }}>
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{ position: "absolute", top: "20%" }}
                    />
                  </div>
                </div>

                <div className="col-md-3 d-flex flex-row">
                  <div>
                    <h1 className="num">02</h1>
                    <h4>Разместите вакансию</h4>
                    <p>Получите отклики с контактами соискателей</p>
                  </div>

                  <div className="arrow" style={{ position: "relative" }}>
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{ position: "absolute", top: "20%" }}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div>
                    <h1 className="num">03</h1>
                    <h4>Выберите лучших</h4>
                    <p>Из тех кто уже хочет с вами работать</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="text-center mt-5">
              <Button className="btn-lg">Начать подборк на kor.tj</Button>
              <div className="mt-3">
                <span
                  style={{ width: "10px", height: "10px" }}
                  className="rounded-circle bg-success d-inline-block"
                ></span>
                <b>37354 компании </b>
                <span>ищут сейчас сотрудников</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Почему стоит разместить вакансию на koromuz.tj */}

      <Container fluid>
        <Container className="pt-5 pb-5">
          <Row className="d-flex flex-row justify-content-center ">
            <Col className="mt-5" md='5'>
              <h2>
                Почему стоит разместить вакансию на{" "}
                <span className="text-primary">koromuz.tj</span>
              </h2>
              <p>
                Вакансия - это обьявление о поиске сотрудника. Опишите, кто
                нуден, и выбирайте лучших откликнувшихся
              </p>
              <Button className="btn-lg ">Разместить вакансию бесплатно</Button>
            </Col>

            <Col className="d-flex flex-column justify-content-between">
              <Card
                className="d-flex flex-row align-items-center mb-4 w-75"
                style={{ height: "165px" }}
              >
                <div>
                  <img src={static1} alt="static" />
                </div>
                <div>
                  <h4>Вакансию увидит каждый второй</h4>
                  <p>Получите отклики с контактами соискателей</p>
                </div>
              </Card>

              <Card
                className="d-flex align-items-center flex-row mb-4 w-75"
                style={{ height: "165px" }}
              >
                <div>
                  <img src={static2} alt="static" />
                </div>

                <div>
                  <p>
                    <a href="#" className="text-decoration-none">
                      На 95% вакансий откликаются.{" "}
                    </a>
                    На koromuz.tj самая активная аудитория
                  </p>
                </div>
              </Card>

              <Card
                className="d-flex align-items-center flex-row w-75"
                style={{ height: "165px" }}
              >
                <div>
                  <img src={static3} alt="static" />
                </div>
                <div>
                  <h4>Откликнутся те, кто подходит именно вам</h4>

                  <p>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      87% работодателей
                    </a>{" "}
                    находят сотрудников при помощи размещения вакансии
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Кто будет откликаться? */}

      <Container fluid style={{ background: "#F5F7FC" }}>

    <Container className="pt-5 pb-5">
    <Row className="mt-5 mb-5">

<Col>
<img src={bg} alt="bg" />
</Col>

<Col>
<h1 className="mb-5">Кто будет откликаться?</h1>
<div>
   <h4>Кандидаты нам доверяют</h4>
   <p><a href="#" className="text-decoration-none">koromuz.tj занимает первое место</a> - среди сайтов по поиску работы и персонала</p>

</div>

<div>
   <h4>Ваш кандидат уже здесь</h4>
   <p>34836 резюме размещено на сервисе. Больше миллиона посетителей на koromuz.tj каждый день</p>

</div>

<div>
   <h4>Качественные и проверенные кандидаты</h4>
   <p>Свыше 75% пользователей на сервисе с подтвержденными телефонными номерами</p>

</div>

<div>
   <h4>Активные и заинтересованные кандидаты</h4>
   <p> На kor.tj пользователи проводят больше времени, чем на других сайтах по поиску работы и персонала </p>

</div>
</Col>

</Row>
    </Container>


      </Container>
    </>
  );
}

export default Workers__Footer;

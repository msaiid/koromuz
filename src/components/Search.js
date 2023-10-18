import React from "react";
import { Container, Row, Col, Button, Card ,InputGroup,Form} from "react-bootstrap";
import logo from "../img/Агентии меҳнат.svg";
import img1 from "../img/cv.png";
import img2 from "../img/image 152.png";
import img3 from "../img/image 149.png";
import img4 from "../img/image 151.png";

function Search() {
  return (
    <Container fluid style={{background: '#F5F7FC'}} className="pt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <img src={logo} alt="лого" />
          </Col>
        </Row>
        <Row className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
          <Col className=" w-75">
            <h2>Лучшие Вакансии ждут вас здесь</h2>
            <p>Найдите работу среди 4500+ вакансии</p>
          </Col>
          <Col className="w-75">
          <InputGroup className="mb-3 position-relative" style={{zIndex:0}}>
        <Form.Control
          className="rounded-pill px-4 py-4"
          placeholder="Профессия, должность или компания"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2" className="rounded-pill" style={{width:'201px',height:'60px', position:'absolute',right:'10px',top:'5px', zIndex:99}} >
        Найти работу
        </Button>
      </InputGroup>
            <a href="/workers" className="text-decoration-none nav-link">
              Я ищу сотрудника
            </a>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "300px", height: "293px" }} className="d-flex flex-column align-items-center justify-content-center">
              <div className="w-50 rounded-circle text-center py-3" style={{background:'#EAF0FF',width:'133px',height:'133px'}}>
                <img src={img1}  className="" />
              </div>
              <Card.Title>Создать Резюме</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "300px", height: "293px" }} className="d-flex flex-column align-items-center justify-content-center">
              <div className="w-50 rounded-circle text-center py-3" style={{background:'#FFEAEA',width:'133px',height:'133px'}}>
                <img src={img2} alt="" className="" />
              </div>
              <Card.Title>Стажёрство</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "300px", height: "293px" }} className="d-flex flex-column align-items-center justify-content-center">
              <div className="w-50 rounded-circle text-center py-3" style={{background:'#EAFFEC',width:'133px',height:'133px'}}>
                <img src={img3} alt="" className="" />
              </div>
              <Card.Title className="text-center">Трудоустройство для студентов</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "300px", height: "293px" }} className="d-flex flex-column align-items-center justify-content-center">
                <div className="w-50 rounded-circle text-center py-3" style={{background:'#EEEAFF',width:'133px',height:'133px'}}>
                <img src={img4} alt="" className="" />
                </div>
              <Card.Title className="text-center">Трудоустройство для инвалидов</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Search;

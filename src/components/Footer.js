import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import logo from '../img/Logo-footer.png'
import appstore from '../img/appstore.png'
import googleplay from '../img/googleplay.png'
import fb from '../img/fb.svg'
import youtube from '../img/youtube.svg'
import insta from '../img/insta.svg'
import twitter from '../img/twitter.svg'



function Footer() {
  return (
    <Container fluid style={{background:'#101843'}} className='py-5 px-5'>

  <Row>
 <Col>
 <Nav className='d-flex flex-column '>
 <Nav.Link href='#'><img src={logo} alt="logo" /></Nav.Link>
 <Nav.Link className='text-white'>Главная</Nav.Link>    
 <Nav.Link className='text-white'>Мероприятия</Nav.Link>    
 <Nav.Link className='text-white'>Организация</Nav.Link>    
 <Nav.Link className='text-white'>Новосты</Nav.Link>    
 <Nav.Link className='text-white'>О нас</Nav.Link>    

</Nav> 
 </Col>

 <Col>
<Nav className='d-flex flex-column'>
  <Nav.Link href='#' className='text-white'>(+992) 250 32 52</Nav.Link> 
  <p className='text-white'>  Душанбе, А. Навои 5/1 </p> 
  <Nav.Link href='#' className='text-white'>info@koromuz.tj</Nav.Link> 

</Nav>
</Col>

 <Col>
 <Nav className='d-flex flex-column'>
   <p className='text-white'>Мобильное приложение</p>
   <div className='d-flex'>
   <Nav.Link href='#'><img src={appstore} alt="apptore" /></Nav.Link> 
   <Nav.Link href='#'><img src={googleplay} alt="googleplay" /></Nav.Link> 
   </div>
   <p>Соц. сети</p>
   <Nav> 
    <Nav.Link href='https://facebook.com'><img src={fb} alt="facebook" /></Nav.Link> 
    <Nav.Link href='https://youtube.com'><img src={youtube} alt="youtube" /></Nav.Link> 
    <Nav.Link href='https://instagram.com'><img src={insta} alt="instagram" /></Nav.Link> 
    <Nav.Link href='https://twitter.com'><img src={twitter} alt="twitter" /></Nav.Link> 

    </Nav>
 </Nav>
 </Col>
  </Row>

  <Row>
 <Col><p>© 2023 KOROMUZ.TJ Все права защищены</p></Col>
  </Row>


    </Container>
  )
}

export default Footer
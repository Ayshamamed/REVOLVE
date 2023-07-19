import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import flag from "../images/az_flag.png";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useCart } from 'react-use-cart';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

const Headers = () => {
  const { t } = useTranslation();
  const { totalItems } = useCart();

  const changeLang=(lang)=>{
    i18n.changeLanguage(lang);

  }





  return (

    <>
      <Navbar expand="lg" className="nav-initial bg-body-tertiary border-bottom" >
        <Container fluid>
          <Navbar.Brand href="#" className='fw-semibold'>REVOLVE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1" className='fw-bolder text-dark fs-5'>FWRD</Nav.Link>
            </Nav>

            <Nav className="mx-auto my-2 my-lg-0 me-5" navbarScroll >

              {/* <Nav.Link href="/" className='img-en-azn ms-5'>
                <img width={30} className='img_flag' src={flag} alt="/" />
                <span className='img-en-azn p-2 text-dark '>|</span>
                <span className='img-en-azn text-dark fw-semibold '>EN</span>
                <span className='img-en-azn p-2 text-dark'>|</span>
                <span className='img-en-azn text-dark fw-semibold'>AZN</span>
              </Nav.Link> */}
              <Nav.Link className='langLink-nav text-dark' >
                <div className="dropdown">
                 <button className='btn-sm langLink-nav btn d-flex justify-content-center align-items-center dropdown-toggle 'data-bs-toggle="dropdown" aria-expanded="false" ><LanguageOutlinedIcon className='langBtn-nav fs-4' /></button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" href="#" onClick={()=>changeLang("az")} >AZ</button></li>
                    <li><button className="dropdown-item" href="#"onClick={()=>changeLang("en")} >EN</button></li>
                  </ul>
                </div>
              </Nav.Link>

              <Nav.Link href="#action1" className='text-dark bold'>{t("header.0")}</Nav.Link>

              <NavDropdown className='ms-3 text-dark fw-bolder' title={t("header.1")} id="navbarScrollingDropdown">

                <NavDropdown.Item href="#action3" className='chat-nav fw-bolder'>{t("header.2")}: <span className='ms-2'>{t("header.3")}!</span></NavDropdown.Item>

                <NavDropdown.Item href="#action4" className=' phone-nav fw-bolder'>
                 {t("header.4")}: <span className='ms-2'> +1-562-926-5672</span>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" className='fw-bolder'>
                  Email: <span className='ms-2'>sales@revolve.com</span>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" className='fw-bolder'>
                  {t("header.5")}: <span className='ms-2'>{t("header.6")}</span>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" className='fw-bolder'>
                  {t("header.7")}: <span className='ms-2 '>{t("header.8")}t</span>
                </NavDropdown.Item>

              </NavDropdown>
              <LinkContainer to="/my-account" style={{ height: "14px" }}>
                <button className='ms-3  text-dark fw-small fw-semibold btn btn-outline-light' >{t("header.9")}</button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="navs sticky">

        <Navbar expand="lg" className=" bg-body-tertiary nav-two mx-4">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className=' fs-4' href="#action1">{t("header.10")}</Nav.Link>
                <Nav.Link className=' fs-4' href="#action2">{t("header.11")}</Nav.Link>
              </Nav>

              <LinkContainer to="/">
                <Navbar.Brand href="#" id='revolve-middle-brand' className='fw-semibold '>REVOLVE</Navbar.Brand>
              </LinkContainer>

              <Form className="d-flex border-bottom">
                <Form.Control
                  type="search"
                  placeholder={t("header.12")}
                  className="border-0  "
                  aria-label="Search"
                />
                <Button id='nav-button' variant="outline-none border-0"><i class="fa-solid fa-magnifying-glass"></i></Button>
              </Form>


              <Nav className='d-flex '>

                <LinkContainer to="/wishlist">
                  <a className=" position-relative shop-div ms-3 text-dark mt-3" href='/'>
                    <FavoriteBorderOutlinedIcon className='heart fs-3' />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </LinkContainer>
                <LinkContainer to="/basket">
                  <a className=" position-relative shop-div  text-dark mt-3 ms-4" href='/'>
                    <ShoppingBagOutlinedIcon className='shop fs-3' />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {totalItems}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </LinkContainer>

                <LinkContainer to="/my-account">
                  <Nav.Link className=' login-div  text-dark' ><button className='btn  text-dark'><PermIdentityOutlinedIcon className='login fs-2' /></button></Nav.Link>
                </LinkContainer>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Nav className='d-flex justify-content-center border-top fs-5'>
          <LinkContainer to="/">
            <Nav.Link className='nav-third text-dark fw-semibold ms-5' href="#features">{t("header.13")}</Nav.Link>
          </LinkContainer>
          <Nav.Link className='nav-third text-dark fw-semibold ms-5' >{t("header.14")}</Nav.Link>
          <LinkContainer to="/about">
            <Nav.Link className='nav-third text-dark fw-semibold ms-5' href="#features">{t("header.15")}</Nav.Link>
          </LinkContainer>
          <Nav.Link className='nav-third text-dark fw-semibold ms-5' href="#features">{t("header.16")}</Nav.Link>
          <LinkContainer to="/contact">
            <Nav.Link className='nav-third text-dark fw-semibold ms-5' href="#features">{t("header.17")}</Nav.Link>
          </LinkContainer>
        </Nav>


      </div>

    </>


  )
}

export default Headers

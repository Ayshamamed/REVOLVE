import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useCart } from 'react-use-cart';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import { ListGroup, NavDropdown } from 'react-bootstrap';
import AuthBtn from '../LOGIN/AuthBtn';
import product from "../data/FiltersProduct";
import { useContext, useEffect, useState } from 'react';
import { useWishlist } from 'react-use-wishlist';
import { ModeContext } from '../context/ModeContext';
import { useNavigate } from 'react-router-dom';


const Headers = () => {
  const location =useNavigate();
  const { isWishlistEmpty, totalWishlistItems, inWishlist, } = useWishlist();

  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart, isEmpty } = useCart();
  const { t } = useTranslation();
  const { totalItems } = useCart();
  const { darkMode, setDarkMode, toggleBtn } = useContext(ModeContext);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(product);


  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }


  return (

    <>
      <div className="navbar-page">
        <Navbar expand="lg" className="nav-initial bg-body-tertiary border-bottom" >
          <Container fluid>
            <Navbar.Brand href="#" className='nav-revolve fw-semibold'>REVOLVE</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link href="#action1" className='nav-fwrd fw-bolder  fs-5'>FWRD</Nav.Link>
              </Nav>

              <Nav className="mx-auto my-2 my-lg-0 me-5" navbarScroll >

                <Nav.Link className='langLink-nav ' >
                  <div className="dropdown">
                    <button className='btn-sm langLink-nav btn d-flex justify-content-center align-items-center dropdown-toggle ' data-bs-toggle="dropdown" aria-expanded="false" ><LanguageOutlinedIcon className='langBtn-nav fs-4' /></button>
                    <ul className="dropdown-menu lang-drop ">
                      <li><button className="dropdown-item fw-bolder" href="#" onClick={() => changeLang("az")} >AZ</button></li>
                      <li><button className="dropdown-item fw-bolder" href="#" onClick={() => changeLang("en")} >EN</button></li>
                    </ul>
                  </div>
                </Nav.Link>

                <Nav.Link className='navbar-info text-bolder'>{t("header.0")}</Nav.Link>

                <NavDropdown className=' help ms-3 fw-bolder' title={t("header.1")} id="navbarScrollingDropdown">

                  <NavDropdown.Item className='chat-nav fw-bolder'>{t("header.2")}: <span className='ms-2'>{t("header.3")}!</span></NavDropdown.Item>

                  <NavDropdown.Item className=' phone-nav fw-bolder'>
                    {t("header.4")}: <span className='ms-2'> +1-562-926-5672</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='fw-bolder'>
                    Email: <span className='ms-2'>sales@revolve.com</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='fw-bolder'>
                    {t("header.5")}: <span className='ms-2'>{t("header.6")}</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item className='fw-bolder'>
                    {t("header.7")}: <span className='ms-2 '>{t("header.8")}</span>
                  </NavDropdown.Item>

                </NavDropdown>

                {/* DARK-LIGHT MODE  */}
                <div className="toggle ">
                  <div className="main d-flex">
                    <i className="moon fa-solid fa-moon"></i>
                    <div className="form-check form-switch">
                      <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleBtn} />
                      <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                    <i className="sun fa-solid fa-sun" />
                  </div>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="navs sticky " >

          <Navbar expand="lg" className=" bg-body-tertiary nav-two mx-4">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link className='women fs-4' href="#action1">{t("header.10")}</Nav.Link>
                  <Nav.Link className='men fs-4' href="#action2">{t("header.11")}</Nav.Link>
                </Nav>

                <LinkContainer to="/">
                  <Navbar.Brand href="#" id='revolve-middle-brand' className='revolve-middle fw-semibold '>REVOLVE</Navbar.Brand>
                </LinkContainer>

                <Form className="d-flex border-bottom">
                  <Form.Control
                    type="search"
                    placeholder={t("header.12")}
                    className=" header-input border-0  "
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  />
                  <Button id='nav-button' variant="outline-none border-0" ><i class="fa-solid fa-magnifying-glass"></i></Button>
                </Form>

                <div>
                  {/* Modal */}
                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5 fw-bolder " id="staticBackdropLabel">Search your product</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <Form className="d-flex border-bottom">
                            <Form.Control
                              type="search"
                              placeholder={t("header.18")}
                              className=" header-input border-0  "
                              aria-label="Search"
                              onChange={e => setQuery(e.target.value)}

                            />
                            <Button id='nav-button1' variant="outline-none border-0" ><i class="search-icon fa-solid fa-magnifying-glass"></i></Button>
                          </Form>
                         <div className="scroll-search">
                         {query.length===0? "" : product.filter(q => q.title.toLocaleLowerCase().includes(query)).map(item => {
                            return <ListGroup className='mt-4'>
                                <LinkContainer to={`/productDetails/${item.id}`}>
                                  <button className='text-dark btn btn-light d-flex justify-space-between align-items-center'>
                                    <img src={item.img} alt="" style={{width:"100px", height:"100px", objectFit:"contain"}}/>
                                    {item.title}</button>
                                  
                                </LinkContainer>
                            </ListGroup>
                          })}
                         </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary fw-bolder" data-bs-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <Nav className='d-flex '>


                  <LinkContainer to="/wishlist">
                    <button className="btn btn-wishlist fav-btn ms-3 " href='/' >
                      <FavoriteBorderOutlinedIcon className='heart fs-3' />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {totalWishlistItems / 2}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </LinkContainer>

                  {/* <LinkContainer to="/basket"> */}
                  <button className="btn  shop-btn  ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                    <ShoppingBagOutlinedIcon className='shop fs-3 ' />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {totalItems}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  {/* </LinkContainer> */}

                  <LinkContainer to="/my-account">
                    <AuthBtn />
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Nav className='d-flex justify-content-center border-top fs-5'>
            <LinkContainer to="/">
              <Nav.Link className='nav-third fw-semibold ms-5'>{t("header.13")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link className='nav-third fw-semibold ms-5' >{t("header.14")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className='nav-third fw-semibold ms-5' >{t("header.15")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
              <Nav.Link className='nav-third fw-semibold ms-5' >{t("header.16")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className='nav-third fw-semibold ms-5' >{t("header.17")}</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* SIDEBAR  */}
          <div>
            <div className="offcanvas offcanvas-end bg-light" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasRightLabel">Shopping Bag</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <Container>
                  {items.map((item, index) => {
                    return <div className="card mb-3" key={index} >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={item.img} className="img-fluid rounded-start" alt="/" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title text-danger">{item.price.toFixed() * item.quantity}$<span></span></h5>
                            <h5 className="card-title "> Quantity: <span className='text-danger'>{item.quantity}</span></h5>
                            <p className="card-text">{item.title}</p>
                            <Button variant='light rounded-pill' onClick={() => removeItem(item.id)} style={{ marginLeft: "130px" }} ><i class="fa-solid fa-x"></i></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  })}
                  <h4 className='fw-bolder'>Total Price: <span className='text-danger'>{cartTotal.toFixed()}</span>$</h4>
                  <LinkContainer to="/basket">
                    <Button variant='light rounded-pill btn-lg btn-outline-dark fw-bolder' >GO TO BASKET</Button>
                  </LinkContainer>
                </Container>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Headers;
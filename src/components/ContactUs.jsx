import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PersonIcon from '@mui/icons-material/Person';
import { LinkContainer } from 'react-router-bootstrap';

const ContactUs = () => {

    return (
        <>
            <Container fluid>
                <Row className=' my-1 '>

                    <div className="image-contact-us mb-5">
                        <div className="cotactUs-navs">
                            <nav className='contactUs-nav' style={{ zIndex: "1" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <LinkContainer to="/">
                                        <li className="breadcrumb-item "><a className='home-contactUs text-white ' href="/">Home </a></li>
                                    </LinkContainer>
                                    <li className="breadcrumb-item active ms-2" aria-current="page"><span>/</span> Contact Us Page</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                   

                    <div className="cards-contact row g-5 my-3  ">


                        <div className="col-sm-6 col-md-3 text-center ">
                            <div className="card-body">
                                <h4 className='' style={{ fontWeight: "900" }}>  CALL US</h4>
                                <h6>Send us a text & an ambassador will respond when available.</h6>
                                <h6>+994 703309100</h6>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 text-center  ">
                            <div className="card-body">
                                <h4 className='' style={{ fontWeight: "900" }}>  ADDRESS </h4>
                                <h6>74 Lermontov prospekti, Bakı</h6>
                                <h6>Mikayıl Huseynov Prospekti 26b, Bakı</h6>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 text-center ">
                            <div className="card-body">
                                <h4 className='fw-bold' style={{ fontWeight: "900" }}> WE'RE OPEN </h4>
                                <h6 >Our store has re-opened for shopping, exchanges</h6>
                                <h6 >Every day 11am to 7pm</h6>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 text-center ">
                            <div className="card-body">
                                <h4 className='' style={{ fontWeight: "900" }}> SOCIAL MEDIA </h4>
                                <nav className='mt-3'>
                                    <ul className=' about-ul d-flex justify-content-center align-items-center list-unstyled '>
                                        <li className='abouts-li'><a href="https://www.tiktok.com/@revolve?is_from_webapp=1&sender_device=pc" className='abouts-a'><i className=" about-icons fa-brands fa-tiktok fs-4 ms-4"></i></a></li>
                                        <li className='abouts-li'><a href="/" className='abouts-a'><i class="about-icons fa-brands fa-youtube fs-4 ms-4"></i></a></li>
                                        <li className='abouts-li'><a href="/" className='abouts-a'><i class="about-icons fa-brands fa-instagram fs-4 ms-4"></i></a></li>
                                        <li className='abouts-li'><a href="/" className='abouts-a'><i class=" about-icons fa-brands fa-facebook-f fs-4 ms-4"></i></a></li>
                                    </ul>
                                </nav>
                                <h5 className='text-lowercase'>sales@revolve.com</h5>
                                <h5 className='text-lowercase'>contact@revolve.com</h5>
                            </div>
                        </div>
                    </div>

                    <Col sm={12}>
                        <div className="iframe mt-2 mb-5">
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=19RxVsHeNNrA2tC5Nz30NzGIevDo32J0&ehbc=2E312F" width="100%" height="580"></iframe>
                        </div>

                    </Col>

                  
                    <div className="get d-flex justify-content-center align-items-center mt-5">
                        <Col sm={6} md={8}  >

                            <section className="get-in-touch ">
                                <h1 className="get-title">Get in touch</h1>
                                <form className="contact-form row" action='https://formspree.io/f/mknljaoy' method='POST'>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="form-field col x-50">
                                            <input id="name" className="input-text1 js-input" type="text" name="username" autoComplete='off' required />
                                            <label className="label" htmlFor="name"> <PersonIcon style={{ marginBottom: "10px" }} /> Name</label>
                                        </div>

                                        <div className="form-field col x-50 ms-4">
                                            <input id="email" className="input-text2 js-input text-lowercase" type="email" name="email" autoComplete='off' required />
                                            <label className="label" htmlFor="email"><MailIcon style={{ marginBottom: "10px" }} /> E-mail</label>
                                        </div>
                                    </div>

                                    <div className="form-field col x-100">
                                        <input id="phone" className="input-text3 js-input" type="phone"  name="phone" autoComplete='off' required />
                                        <label className="label" htmlFor="phone"> <CallIcon style={{ marginBottom: "10px" }} /> Phone Number</label>
                                    </div>

                                    <div className="form-field col x-100">
                                        <input id="message" className="input-text4 js-input" type="message" name="message" autoComplete='off' required />

                                        <label className="label" htmlFor="message"><TextsmsIcon style={{ marginBottom: "10px" }} /> Message</label>
                                    </div>

                                    <div className="form-field col x-100 text-center">
                                        <input className="submit-btn" type="submit" defaultValue="Submit" />
                                    </div>
                                </form>
                            </section>
                        </Col>
                    </div>

                </Row>
            </Container>

        </>
    )
}

export default ContactUs
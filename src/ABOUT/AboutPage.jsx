import React from 'react';
import page from "../images/aboutPage.png";
import iphone from '../images/iphone.png';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReadMore from './ReadMore';

const AboutPage = () => {

    return (
        <>
         
                <Container fluid >
                    <Row className='about-row my-3 bg-dark'>
                        <div className="image-about ">
                            <div className="about-navs img-fluid">
                            <nav className='about-nav' style={{ zIndex: "1" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <Link to="/">
                                            <li className="breadcrumb-item "><a className='home-about text-white ' href="/">Home </a></li>
                                        </Link>
                                        <li className="breadcrumb-item active ms-2" aria-current="page"><span>/</span> About Page</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </Row>
                </Container>
        
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">ABOUT US</h1>
                <div className="col-lg-8 mx-auto">
                   <ReadMore/>
                </div>
            </div>

            <Container>
                <div className=" about-page  my-5 ">
                    <div className="row  rounded-3 align-items-center  ">
                        <div className="col-md-6  ">
                            <img className="aboutPage " src={page} alt='/' />
                        </div>
                        <div className="col-md-6 p-2 p-lg-5 pt-lg-4  ">
                            <h6 className="display-6 fw-bold lh-1">REVOLVE ON THE GO</h6>
                            <p className="lead text-center">Download our super easy-to-use app available on iPhone, iPad & Android</p>
                            <div className="d-grid gap-5 d-md-flex justify-content-md-center mb-5 mb-lg-3">
                                <a href="https://apps.apple.com/us/app/revolveclothing/id377018720">
                                    <img src={iphone} alt="/" width={140} />
                                </a>
                                <a href="https://apps.apple.com/app/id1062028881?mt=8">
                                    <img src={iphone} alt="/" width={140} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.revolve&referrer=utm_source%3Dfooter%26utm_medium%3Dappdlbutton%26utm_term%3Dfooter&pli=1">
                                    <img src={iphone} alt="/" width={140} />
                                </a>
                            </div>

                            <h3 className=" fw-bold mt-5">LET'S GET SOCIAL</h3>
                            <p className="lead text-center fw-semibold">See what we're up to. Follow @REVOLVE!</p>

                            <nav >
                                <ul className=' about-ul d-flex justify-content-center align-items-center list-unstyled '>
                                    <li className='abouts-li'><a href="https://www.tiktok.com/@revolve?is_from_webapp=1&sender_device=pc" className='abouts-a'><i className=" about-icons fa-brands fa-tiktok fs-4 ms-4"></i></a></li>
                                    <li className='abouts-li'><a href="/" className='abouts-a'><i class="about-icons fa-brands fa-youtube fs-4 ms-4"></i></a></li>
                                    <li className='abouts-li'><a href="/" className='abouts-a'><i class="about-icons fa-brands fa-instagram fs-4 ms-4"></i></a></li>
                                    <li className='abouts-li'><a href="/" className='abouts-a'><i class=" about-icons fa-brands fa-facebook-f fs-4 ms-4"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AboutPage
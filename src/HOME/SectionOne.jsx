import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import sectione1 from "../images/sectione1.png";
// import sectione from "../images/sectione.png";
import delivery from "../images/delivery.png";
import tel from "../images/tel.png";
import arrow from "../images/arrow.png";
const SectionOne = () => {

    return (
        <Container>
            <Row>

                {/* <Col sm={6} md={4}>
                    <Card className=' border border-0 ' data-aos="fade-up"
                     data-aos-anchor-placement="top-center">
                        <Card.Img src={sectione1} alt="Card image" className='rounded-4 ' />
                    </Card>
                </Col>

                <Col sm={6} md={4}>
                    <Card className=' border border-0 rounded-4 text-center mt-5'
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-center"
                    >
                        <Card.ImgOverlay>
                            <Card.Title className=' sectione-text fw-bolder fs-2 '> 6 BEAUTIFUL SHADES, 12 HOUR HYDRATION</Card.Title>
                            <Card.Text className='fs-4' >
                                enriched with jojoba oil, tinted butter balm moisturizes, softens, &amp; smooths lip lines.
                            </Card.Text>
                            <Button variant='btn btn-lg btn-outline-dark'>Shop Now</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col> */}


{/* 
                <Col sm={6} md={4} data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <Card className=' border border-0'>
                        <Card.Img src={sectione} alt="Card image" className='mt-2' />
                    </Card>
                </Col> */}

                <Col sm={6} md={4} className='my-2'>
                    <Card className=' rounded-start border-light'>
                        <Card.Body className='section-one-cards  rounded-start d-flex'>
                            <Card.Title> <img src={delivery} alt="/"className='delivery' /> </Card.Title>
                            <div className="card-body">
                                <Card.Title className='section-one-title  fw-bold'> Free Shipping on all US order or</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted "> order above $99</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} md={4} className='card2 my-2'>
                    <Card className=' rounded-start border-light'>
                        <Card.Body className='section-one-cards  rounded-start d-flex '>
                            <Card.Title><img src={tel} alt="/" className='tel'/> </Card.Title>
                            <div className="card-body">
                                <Card.Title className='section-one-title  fw-bold'> Support 24/7 :</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted ">Contact us 24 hours a day, 7 days a week</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={6} md={4} className='my-2'>
                    <Card className=' rounded-start  border-light'>
                        <Card.Body className='section-one-cards  rounded-start d-flex'>
                            <Card.Title className='image-icon'><img src={arrow} alt="" className='arrow' /> </Card.Title>
                            <div className="card-body">
                                <Card.Title className='section-one-title  fw-bold'> 30 Days Return : </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted  ">Simply return it within 30 days for an exchange.</Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionOne


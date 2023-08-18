import React, { useEffect } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import customData from "../data/CustomerData"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const CustomerSays = () => {

    return (
        
        // style={{backgroundColor:"#EEE"}}
        <section className='customer mt-5'  >
            <Container fluid >
                <h1 className='text-center fw-bold mt-5 text-uppercase' style={{ fontSize: "50px" }}>What Our Customer Saying?</h1>
                <button className="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide04-track"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width={40} height={40} focusable="false" /></button>

                <Splide aria-label="My Favorite Images" options={{
                    fixedWidth: "100%",
                    rewind: true,
                    type: "loop",
                    gap: "3rem",
                    isNavigation: true,
                    arrows:false,
                    pagination:false,
                    autoplay: true,
                    autoScroll: {
                        speed: 1,
                      },

                }}>
                    {customData.map(item => {
                        return <SplideSlide className=' d-flex justify-content-center align-items-center' key={item.id}>
                            <Col sm={12} md={8}  className='splidejs'>
                            <Card  className='border-0 splidejs'  >
                                <Card.Text className='stars text-center  '>
                                    <StarIcon className='star1 ms-1 fs-2' />
                                    <StarIcon className='star1 ms-1 fs-2' />
                                    <StarIcon className='star1 ms-1 fs-2' />
                                    <StarIcon className='star1 ms-1 fs-2' />
                                    <StarIcon className='star1 ms-1 fs-2' />
                                </Card.Text>
                                <Card.Body className='text-center '>
                                    <Card.Title className='fs-3'>{item.comment}</Card.Title>
                                    {/* <Card.Text className='text-muted my-2' style={{ marginLeft: "600px", marginTop: "-20px", fontSize: "20px" }}>
                                        {item.month} {item.year}
                                    </Card.Text> */}
                                    <Card.Img variant="top" className='border border-5' src={item.img} style={{ width: "80px", height: "80px", borderRadius: "50%", marginLeft: "480px", objectFit: "cover", }} />
                                    <Card.Text style={{ marginLeft: "480px", fontSize: "25px" }}>
                                        {item.name}
                                    </Card.Text>
                                    <Card.Text className='text-muted' style={{ marginLeft: "480px", marginTop: "-20px", fontSize: "20px" }}>
                                        {item.work}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        </SplideSlide>
                    })}
                </Splide>


            </Container>

        </section>

    )
}

export default CustomerSays
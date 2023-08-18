import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';


const Statistics = () => {
    const [countOn, setCountOn] = useState(false);

    return (
        <Container fluid className="section-statistika" style={{backgroundColor:"#3333"}}>
            <Container fluid className="statis-container" >
                <ScrollTrigger
                    onEnter={() => setCountOn(true)}
                    onExit={() => setCountOn(false)}>
                    <Row className="g-5 my-3 ">
                        <h1 className="fw-bolder  text-white">Our track record</h1>
                        <h2 className="text-white " style={{marginTop:"-1px"}}>trusted thousands of creators worldwide</h2>
                        <Col sm={6} md={4} >
                            <Card className="col-1-stat border-0" style={{backgroundColor:"#3333", color:"#fff"}}>
                                <Card.Body >
                                    {countOn && <Card.Title className="d-flex justify-content-center align-items-center"><CountUp className="fs-1 fw-bold" start={0} end={8000} duration={2} delay={0} /><span className=" fs-1 fw-bold">+</span></Card.Title>}

                                    <Card.Text className="text-uppercase text-center fs-6 fw-bold">
                                        our customers
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={6} md={4} >
                            <Card className="col-2-stat border-0" style={{backgroundColor:"#3333", color:"#fff"}}>
                                <Card.Body>
                                    {countOn && <Card.Title className="d-flex justify-content-center align-items-center"><CountUp className="fs-1 fw-bold" start={0} end={99} duration={2} delay={0} /><span className=" fs-1 fw-bold">.<CountUp className="fs-1 fw-bold" start={0} end={9} duration={2} delay={0} />%</span></Card.Title>}

                                    <Card.Text className="text-uppercase text-center fs-6 fw-bold">
                                        Order for month
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col  sm={6} md={4} >
                            <Card className="col-3-stat border-0" style={{backgroundColor:"#3333", color:"#fff"}} >
                                <Card.Body>
                                    {countOn && <Card.Title className="d-flex justify-content-center align-items-center"><span className=" fs-1 fw-bold">$</span><CountUp className="fs-1 fw-bold" start={0} end={70} duration={2} delay={0} /><span className=" fs-1 fw-bold">M</span></Card.Title>}

                                    <Card.Text className="text-uppercase text-center fs-6 fw-bold">
                                        our monthly income
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </ScrollTrigger>

            </Container>
        </Container>
    )
}

export default Statistics
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import google from "../images/google-login.png";
import facebook from "../images/facebook-login.png";
import { LinkContainer } from 'react-router-bootstrap';



function Login() {

    return (


        <Container className='my-5 '>

            <h3 className='text-uppercase fw-semibold'>MY REVOLVE</h3>
            <p className='fs-5'>Please sign in or create an account</p>
            <hr />
            <div className="buttons-login d-flex justify-content-center mt-5 " >
                <a className=' text-decoration-none text-dark bg-light fs-4 fw-bolder text-center d-flex justify-content-center align-items-center' style={{ width: "340px" }}>SIGN IN</a>

                <LinkContainer to="/register" style={{ width: "340px", height: "70px" }}>
                    <button className='text-decoration-none text-white bg-dark fs-4 fw-bold text-center d-flex justify-content-center align-items-center' style={{ width: "340px", height: "70px" }}>SIGN UP</button>
                </LinkContainer>

            </div>

            <Row className='g-5  justify-content-center'>

                <Col md={7} className='shadow-lg rounded ' style={{ height: "700px" }} >

                    <Container>
                        <Form className='border-5 mx-5 '>
                            <h3 className='fw-bolder text-center my-5'>SIGN IN BY E-MAIL</h3>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>E-mail </Form.Label>
                                <Form.Control type="email" placeholder='E-mail' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder='password' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='signIn-button fw-semibold text-center'>
                                SIGN IN
                            </Button>
                        </Form>

                        <Link className='d-flex justify-content-center my-3 mt-5 text-decoration-none text-dark fs-6 fw-semibold '> Did You Forgot Password?</Link>

                        <div className="or fw-bolder fs-4 d-flex justify-content-center mt-4 mb-4">
                            or
                        </div>

                        <h3 className='fw-bolder  text-center'>SIGN IN</h3>
                        <div className="accounts-login mt-4 d-flex justify-content-center ">
                            <a className='border text-center fs-4 fw-bolder text-decoration-none d-flex align-items-center justify-content-center text-dark ' style={{ width: "260px", height: "60px" }}>  <img className='m-2' src={google} alt=":/" style={{ width: "20px" }} /> Google</a >
                            <a className='border text-center  fs-4 fw-bolder text-decoration-none d-flex align-items-center justify-content-center text-dark  ms-2' style={{ width: "260px", height: "60px" }}><img src={facebook} alt=":/" style={{ width: "40px" }} />  Facebook</a>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;
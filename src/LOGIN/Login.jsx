import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import google from "../images/google-login.png";
import facebook from "../images/facebook-login.png";
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const userData = {
    email: "aisem667@gmail.com",
    pass: "aisha"
};

function Login() {

    const { t } = useTranslation();
    const refMail=useRef();
    const refPass=useRef();
    const navigate =useNavigate();
    const submitform=(e)=>{
        e.preventDefault();
        if (refMail.current.value === userData.email && refPass.current.value===userData.pass) {
            alert("CORRECT");
            localStorage.setItem("User",  JSON.stringify(userData));
            navigate ("/")
            
        }else{
            alert("INCORRECT")

        }

    }

    return (

        <Container className='my-5'>

            <h3 className='text-uppercase fw-semibold'>{t("login.0")}</h3>
            <p className='fs-5'>{t("login.1")}</p>
            <hr />
            <div className="buttons-login d-flex justify-content-center mt-5 " >
                <a href='/' className=' text-decoration-none text-dark bg-light fs-4 fw-bolder text-center d-flex justify-content-center align-items-center' style={{ width: "340px" }}>{t("login.2")}  </a>

                <LinkContainer to="/register" style={{ width: "340px", height: "70px" }}>
                    <button className='text-decoration-none text-white bg-dark fs-4 fw-bold text-center d-flex justify-content-center align-items-center' style={{ width: "340px", height: "70px" }}>{t("login.3")}</button>
                </LinkContainer>

            </div>

            <Row className='g-5  justify-content-center mt-1' style={{ height: "700px" }} >

                <Col md={7} className='shadow-lg rounded ' style={{ height: "700px" }} >

                    <Container>
                        <Form className='border-5 mx-5 ' onSubmit={submitform}>
                            <h3 className='fw-bolder text-center my-5'>{t("login.4")}</h3>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>E-mail </Form.Label>
                                <Form.Control type="email" placeholder='E-mail' className='text-lowercase' ref={refMail}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t("login.5")}</Form.Label>
                                <Form.Control type="password" placeholder={t("login.5")} ref={refPass} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label={t("login.6")} />
                            </Form.Group>
                            <Button variant="dark" type="submit" className='signIn-button fw-semibold text-center'>
                                {t("login.2")}
                            </Button>
                        </Form>

                        <Link className='d-flex justify-content-center my-3 mt-5 text-decoration-none text-dark fs-6 fw-semibold '> {t("login.7")}</Link>

                        <div className="or fw-bolder fs-4 d-flex justify-content-center mt-4 mb-4">
                            {t("login.8")}
                        </div>

                        <h3 className='fw-bolder  text-center'>{t("login.2")}</h3>
                        <div className="accounts-login mt-4 d-flex justify-content-center ">
                            <a href='/' className='border text-center fs-4 fw-bolder text-decoration-none d-flex align-items-center justify-content-center text-dark ' style={{ width: "260px", height: "60px" }}>  <img className='m-2' src={google} alt=":/" style={{ width: "20px" }} /> Google</a >
                            <a href='/' className='border text-center  fs-4 fw-bolder text-decoration-none d-flex align-items-center justify-content-center text-dark  ms-2' style={{ width: "260px", height: "60px" }}><img src={facebook} alt=":/" style={{ width: "40px" }} />  Facebook</a>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { t } = useTranslation();
    const location = useNavigate()

    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname:"",
        email: "",
        phone:"",
        password: "",
        paymentMethod:"",
        paymentMethod:"",
        day:"",
        month:"",
        year:"",
    })


    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('User', JSON.stringify(newUser))
        location('/my-account')
    };
    console.log(newUser);

    return (
        <>
            <Container className='my-5 ' >

                <h3 className='text-uppercase fw-semibold'>{t("login.0")}</h3>
                <p className='border-bottom fs-5'>{t("login.1")}</p>

                <div className="buttons-login d-flex justify-content-center mt-5 " >

                    <LinkContainer to="/my-account" style={{ width: "340px", height: "70px", borderRadius: "0px" }}>
                        <button className='btn btn-outline-none text-dark bg-light fs-4 fw-bolder text-center d-flex justify-content-center align-items-center' style={{ width: "340px", borderRadius: "0px" }}>{t("login.2")}</button>
                    </LinkContainer>

                    <LinkContainer to="/register" style={{ width: "340px", height: "70px", borderRadius: "0px" }}>
                        <button className='btn text-white bg-dark fs-4 fw-bold text-center d-flex justify-content-center align-items-center' style={{ width: "340px", height: "70px" }}>{t("login.3")}</button>
                    </LinkContainer>

                </div>
                <Row className='g-5  justify-content-center mt-1'>

                    <Col md={7} className='shadow-lg rounded '  >

                        <Container className='col-md-10 col-lg-10 mb-5'>
                            <h3 className='fw-semibold my-5'>{t("login.3")}</h3>
                            <form className="needs-validation " noValidate onSubmit={loginSubmit}>

                                <div className="col-12 mb-3">
                                    <label htmlFor="email" className="form-label text-muted ">Email</label>
                                    <input type="email" className="form-control text-lowercase" id="email" name='email' placeholder="you@example.com" onChange={handleChange} />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                               
                                <div className="col-12 mb-3">
                                    <label htmlFor="phone" className="form-label text-muted">{t("login.10")}</label>
                                    <input type="tel" name="phone" className="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder defaultValue={"+994"} required  onChange={handleChange}/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div> 
                                
                               
                              <div className="row g-3">

                              <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label text-muted"> {t("login.11")}</label>
                                    <input type="text" className="form-control" name='firstname' id="firstName" placeholder={t("login.11")} onChange={handleChange} />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                   
                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label text-muted">{t("login.12")}</label>
                                        <input type="text" className="form-control" name='lastname' id="lastName" placeholder={t("login.12")}  onChange={handleChange}/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                             


                                    <Form.Group className="mb-1" controlId="formBasicPassword">
                                        <Form.Label className='text-muted'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="password" name="password" onChange={handleChange} />
                                    </Form.Group>
                                    

                                    <p className='text-muted'>{t("login.17")}</p>

                                    <div className="col-lg-4">
                                        <select className="form-select" id="country" name='day' required onChange={handleChange} >
                                            <option value>{t("login.19")}</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <select className="form-select" id="state" name="month" required onChange={handleChange}>
                                            <option value>{t("login.20")}</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>Martch</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>Octomber</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <select className="form-select" id="state1"  name="year" required onChange={handleChange}>
                                            <option value>{t("login.21")}</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                  
                                </div>

                             <p className='text-muted my-2'>Gender</p>
                                <div className="my-3 d-flex justify-content-start ">
                                    <div className="form-check">
                                        <input id="gender" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="gender">{t("login.23")}</label>
                                    </div>
                                    <div className="form-check ms-5">
                                        <input id="gender1" name="paymentMethod" type="radio" className="form-check-input" required onChange={handleChange} />
                                        <label className="form-check-label " htmlFor="gender">{t("login.24")}</label>
                                    </div>
                                </div>

                                <hr />
                                <Button variant="dark" type="submit" className='signUp-button fw-semibold text-center mb-5'>
                                    SIGN UP
                                </Button>

                            </form>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp
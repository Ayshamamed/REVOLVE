import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const SignUp = () => {
    return (
        <>
            <Container className='my-5 '>

                <h3 className='text-uppercase fw-semibold'>MY REVOLVE</h3>
                <p className='border-bottom fs-5'>Please sign in or create an account</p>

                <div className="buttons-login d-flex justify-content-center mt-5 " >

                    <LinkContainer to="/my-account" style={{ width: "340px", height: "70px" }}>
                        <a href='/' className=' text-decoration-none text-dark bg-light fs-4 fw-bolder text-center d-flex justify-content-center align-items-center' style={{ width: "340px" }}>SIGN IN</a>
                    </LinkContainer>

                    <LinkContainer to="/register" style={{ width: "340px", height: "70px" }}>
                        <button className='text-decoration-none text-white bg-dark fs-4 fw-bold text-center d-flex justify-content-center align-items-center' style={{ width: "340px", height: "70px" }}>SIGN UP</button>
                    </LinkContainer>

                </div>
                <Row className='g-5  justify-content-center'>

                    <Col md={7} className='shadow-lg rounded ' style={{ height: "850px" }} >

                        <Container className='col-md-10'>
                            <h3 className='fw-semibold my-5'>SIGN UP</h3>
                            <form className="needs-validation" noValidate>

                                <div className="col-12 mb-3">
                                    <label htmlFor="email" className="form-label text-muted">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>


                                <div className="col-12 mb-3">
                                    <label htmlFor="phone" className="form-label text-muted">Phone</label>
                                    <input type="tel" name="phone" className="form-control" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder defaultValue={"+994"} required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label text-muted">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder='Name' />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label text-muted">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder='Surname' />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className='text-muted'>Password</Form.Label>
                                        <Form.Control type="password" placeholder='password' />
                                    </Form.Group>

                                    <Form.Group className="mb-1" controlId="formBasicPassword">
                                        <Form.Label className='text-muted'>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder='Confirm Password' />
                                    </Form.Group>

                                    <p className='text-muted'>Birthday options</p>

                                    <div className="col-md-4">
                                        <select className="form-select" id="country" required>
                                            <option value>Day</option>
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

                                    <div className="col-md-4">
                                        <select className="form-select" id="state" required>
                                            <option value>Month</option>
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

                                    <div className="col-md-4">
                                        <select className="form-select" id="state" required>
                                            <option value>Year</option>
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
                                        <input id="gender" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                                        <label className="form-check-label" htmlFor="gender">Male</label>
                                    </div>
                                    <div className="form-check ms-5">
                                        <input id="gender" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label " htmlFor="gender">Female</label>
                                    </div>
                                </div>

                                <hr className="my-4" />
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
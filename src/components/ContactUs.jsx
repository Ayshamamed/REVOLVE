import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';



const ContactUs = () => {
    return (
        <>
            {/* <nav className='contact-na' aria-label="breadcrumb">
            <ol className="breadcrumb">
                <Link to="/">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                </Link>
                <li className="breadcrumb-item active" aria-current="page">Contact Us Page</li>
            </ol>
        </nav> */}


            <Row className='g-5 my-1'>
                
                <Col sm={6} md={3}>
                    <div className="get">
                        <h1 className=' contact-get fw-bolder text-center' style={{ fontSize: "50px", marginTop: "100px" }}>GET IN TOUCH </h1>
                        <button className='text center  btn btn-dark btn-lg btn-outline-light' style={{ marginLeft: "100px" }}>Write us  <SouthEastOutlinedIcon /></button>
                    </div>
                </Col>

                <Col sm={6} md={9}>
                    <div className="iframe">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=19RxVsHeNNrA2tC5Nz30NzGIevDo32J0&ehbc=2E312F" width="1100" height="480"></iframe>
                    </div>

                </Col>

                <div className="col-sm-6 col-md-3">
                    <h3 className='fw-bold'> <PhoneInTalkOutlinedIcon style={{ fontSize: "40px" }} /> Phone</h3>
                    <h5>+994 70 3300000</h5>
                    <h5>+ 994 10 3300000</h5>
                    <h5>+994 55 3300000</h5>
                </div>
                <div className="col-sm-6 col-md-3">
                    <h3 className='fw-bold'> <EmailOutlinedIcon style={{ fontSize: "40px" }} /> Mail </h3>
                    <h5 className='text-lowercase'>sales@revolve.com</h5>
                    <h5 className='text-lowercase'>contact@revolve.com</h5>
                </div>
                <div className="col col-md-6">
                    <div className="col-8">
                        <h3 className='fw-bold'><PinDropOutlinedIcon style={{ fontSize: "40px", borderRadius: "50%", backgroundColor: "black", color: "white" }} /> Address</h3>
                        <div className="card-text-adress d-flex justify-content-between">
                            <h6>REVOLVE MALL</h6>
                            <h6 className='fw-bolder'>DANIZ MALL</h6>

                        </div>
                        <div className="card-text-adress d-flex justify-content-between mx-4 text-center align-items-center">
                            <h6>74 Lermontov prospekti, Bakı</h6>
                            <h5 className='ms-5'>Mikayıl Useynov Prospekti 26b, Bakı</h5>

                        </div>
                    </div>
                </div>
            </Row>
        </>
    )
}

export default ContactUs
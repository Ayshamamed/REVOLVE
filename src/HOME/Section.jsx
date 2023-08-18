import React from 'react';
import video from "../images/video/video.mp4"
import { Container } from 'react-bootstrap';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const Section = () => {
    const {t}=useTranslation();
    return (
        <Container fluid>
            <div className="section px-4 py-5 my-5 text-center">
                <h1 className="our-mission">{t("home.3")}</h1>
               <Container>
               <div className="video-text col-lg-12 ">
                    <p className="section-body fw-semibold mb-4 ">“{t("home.4")}”</p>
                </div>
               </Container>
                <div className="main">
                    <div className="block">
                        <div className="item youtube position-relative d-flex mt-40">
                            <video playsInline autoPlay loop muted style={{ width: '100%', maxWidth: '100%', height: '700px' }}>
                                <source src={video} type="video/mp4" />
                            </video>
                            <div className="main-overlay">
                                {/* hoverde nese gelmelidi ustune  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default Section
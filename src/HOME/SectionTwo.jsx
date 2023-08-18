import React from 'react';
import image from "../images/b13.png"
import image1 from "../images/b15.png"
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const SectionTwo = () => {

    const {t}=useTranslation();

    return (
        <>
           <Container>
           <div className="CSS-COLOR  col-xxl-10 px-4 py-5 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 " data-aos="fade-left">
                        <img src={image}  className="rounded-4 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className=" col-lg-6 text-center " data-aos="fade-right">
                        <h1 className="display-5 fw-bold lh-1 mb-3">REVOLVE FASHION</h1>
                        <p className="lead">{t("home.6")}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center ">
                            <button type="button" className="btn btn-dark btn-lg px-4 ">{t("home.10")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="css1-color col-xxl-10 px-4 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 ">
                   
                    <div className="abouts  col-lg-6 text-center" >
                    <div className="abouts-text2 text-center" data-aos="fade-left" >
                        <h1 className="display-5 fw-bold lh-1 mb-3">{t("home.8")}</h1>
                        <p className="lead  fs-4">{t("home.9")}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button type="button" className="about-shop btn btn-dark btn-lg px-4 ">{t("home.10")}</button>
                        </div>
                    </div>

                    </div>
                    <div className="col-10 col-sm-8 col-lg-6"  data-aos="fade-right">
                        <img src={image1} className="rounded-4 d-block  img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
           </Container>
           

        </>
    )
}

export default SectionTwo
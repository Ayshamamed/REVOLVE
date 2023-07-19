import React from 'react';
import image from "../images/b13.png"
import image1 from "../images/b15.png"

const SectionTwo = () => {
    return (
        <>
            <div className="CSS-COLOR  col-xxl-10 px-4 py-5 ms-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 " data-aos="fade-left">
                        <img src={image}  className="rounded-4 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className=" col-lg-6 text-center " data-aos="fade-right">
                        <h1 className="display-5 fw-bold lh-1 mb-3">REVOLVE FASHION</h1>
                        <p className="lead">REVOLVE is the next-generation fashion retailer for Millennial and Generation Z consumers. As a trusted, premium lifestyle brand, and a go-to online source for discovery and inspiration, we deliver an engaging customer experience from a vast yet curated offering totaling over 49,000 apparel, footwear, accessories and beauty styles. Our dynamic platform connects a deeply engaged community of millions of consumers, thousands of global fashion influencers, and more than 1,000 emerging, established and owned brands.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center ">
                            <button type="button" className="btn btn-dark btn-lg px-4 ">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="css1-color col-xxl-10 px-4 ms-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 ">
                   
                    <div className="abouts  col-lg-6 text-center" >
                    <div className="abouts-text2 text-center" data-aos="fade-left" >
                        <h1 className="display-5 fw-bold lh-1 mb-3"> ABOUT US</h1>
                        <p className="lead  fs-4"> Through 18 years of continued investment in technology, data analytics, and innovative marketing and merchandising strategies, we have built a powerful platform and brand that we believe is connecting with the next generation of consumers and is redefining fashion retail for the 21st century.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center ms-5">
                            <button type="button" className="about-shop btn btn-dark btn-lg px-4 ">Shop Now</button>
                        </div>
                    </div>

                    </div>
                    <div className="col-10 col-sm-8 col-lg-6"  data-aos="fade-right">
                        <img src={image1} className="rounded-4 d-block  img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
           

        </>
    )
}

export default SectionTwo
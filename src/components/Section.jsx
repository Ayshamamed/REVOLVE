import React from 'react';
import video from "../images/video/video.mp4"

const Section = () => {
    return (
        <>
            <div className="section px-4 py-5 my-5 text-center">
                <h1 className="our-mission">OUR MISSION</h1>
                <div className="video-text col-lg-12 ">
                    <p className="section-body fw-semibold mb-4 ">“Being perfectly well-dressed gives one a tranquillity that no religion can bestow”</p>
                </div>
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


        </>
    )
}

export default Section
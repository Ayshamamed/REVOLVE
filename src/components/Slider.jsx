import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider2 from "../images/slidefoto.png";
import slider3 from "../images/sliden.png";
import slider4 from "../images/slide.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css"
import "../assets/style.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Slider() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >

                {/* <SwiperSlide>

                    <img src={slider1} alt='/' style={{ height:"600px", objectFit:'contain' }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Title className='animate__animated animate__fadeInUpBig  navitimer text-white fs-1 fw-bolder' >
                         
                         </Card.Title>
                        <Card.Body>
                            <Card.Link href="/" className='slider1-btn  btn btn-lg btn-outline-warning text-decoration-none ms-5' > SHOP NOW</Card.Link>
                        </Card.Body>
                    </Card.ImgOverlay>

                </SwiperSlide> */}

                <SwiperSlide >

                    <img className='swiper2' src={slider4} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider4-btn btn bg-light ' >SHOP THE EDIT</a>
                        </Card.Body>
                    </Card.ImgOverlay>

                </SwiperSlide>

                <SwiperSlide>

                    <img src={slider2} alt='/' style={{ height: "600px", objectFit: 'cover' }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body>
                            <Card.Link href="/" className='product  btn bg-light text-decoration-none ' > SHOP THE EDIT</Card.Link>
                        </Card.Body>
                    </Card.ImgOverlay>

                </SwiperSlide>

                <SwiperSlide >

                    <img className='swiper2' src={slider3} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider3-btn btn bg-light ' >SHOP THE EDIT</a>
                        </Card.Body>
                    </Card.ImgOverlay>

                </SwiperSlide>



            </Swiper>
        </>
    );
}

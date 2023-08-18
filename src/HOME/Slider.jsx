import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../layihenin shekilleri/cosmetics/ss.png"
import slider2 from "../images/slidefoto.png";
import slider4 from "../images/slide.png";
import slider5 from "../images/august.png";
import slider6 from "../images/slide5.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css"
import "../assets/style.scss";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useTranslation } from 'react-i18next';
export default function Slider() {
    const {t}=useTranslation();

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{delay:3000}}
                loop={true}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                 <SwiperSlide >
                    <img  className='swiper2' src={slider6} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider6-btn btn bg-light ' >{t("home.0")}</a>
                        </Card.Body>
                    </Card.ImgOverlay>
                </SwiperSlide>

                <SwiperSlide >
                    <img className='swiper2' src={slider5} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider2-btn btn bg-light ' >{t("home.0")}</a>
                        </Card.Body>
                    </Card.ImgOverlay>
                </SwiperSlide>

                  <SwiperSlide >
                    <img className='swiper2' src={slider1} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider1-btn btn bg-light ' >{t("home.0")}</a>
                        </Card.Body>
                    </Card.ImgOverlay>
                </SwiperSlide>

                <SwiperSlide >
                    <img className='swiper2' src={slider4} alt='/' style={{ width: "100%", height: "600px" }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body className='text-center'>
                            <a className='slider4-btn btn bg-light ' >{t("home.0")}</a>
                        </Card.Body>
                    </Card.ImgOverlay>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt='/' style={{ height: "600px", objectFit: 'cover' }} />
                    <Card.ImgOverlay className='overlay ms-5 my-5 mt-5 ' >
                        <Card.Body>
                            <Card.Link href="/" className='product  btn bg-light text-decoration-none ' >{t("home.0")}</Card.Link>
                        </Card.Body>
                    </Card.ImgOverlay>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

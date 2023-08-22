import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "../assets/style.scss";


// import required modules
import { FreeMode, Thumbs, Navigation } from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import product from "../data/FiltersProduct";
import { LinkContainer } from 'react-router-bootstrap';

export default function ProductDetails({ menuItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const productdetails = product.find(p => p.id == id);

  const { addItem } = useCart();

  const notify = () => toast.success('Product added to cart!', {
    position: "bottom-right",
    autoClose: 1345,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  return (
    <>
      {/* <Container fluid>
    <Row className='my-5 g-5'>
      <Col sm={6} md={6}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      
      </Col>
    </Row>
    </Container> */}
      {productdetails === undefined ? <h1 className='text-center my-3'>Loading...</h1> : <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={productdetails.img} className="d-block mx-lg-auto img-fluid me-5" alt="Bootstrap Themes" width={300} height={300} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 ms-5">{productdetails.title}</h1>
              <p className="lead ms-5">{productdetails.desc}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <LinkContainer to="/products">
                <button type="button" className="btn btn-outline-secondary px-4 me-md-2 fw-bold ms-5" style={{borderRadius:"0px"}}>BACK</button>
                </LinkContainer>
                <button className=" btn btn-outline-warning " onClick={() => { notify(addItem(menuItem.id)) }}><ShoppingBagIcon /></button>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  );
}

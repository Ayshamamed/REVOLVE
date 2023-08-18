import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useWishlist } from 'react-use-wishlist';
import items from "../data/FiltersProduct"
import NextWishlistBtn from './NextWishlistBtn';
import StarIcon from '@mui/icons-material/Star';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';


const Wishlist = () => {
  const { items } = useWishlist();
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()]

  const { addItem }=useCart();
  const notify=()=>toast.success('Product added to cart!', {
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
    <Container>
      <Row className='g-5 mb-5 mt-1'>
        <div className="image-wishlist"> </div>
        <h1 className='fw-semibold '>Favorites</h1>
        {
          myArray.map((item, count) => {
            return  <Col sm={6} md={3}  >
            <div className='main mb-5 ' style={{width:"100%", height:"100%"}}>
                <div className="card-filter border-0 " height={300} >
                    <img src={item.img} width={200} height={300} className="img-filter card-img-top" alt="/" />
                    <img src={item.img1} width={200 } height={300} className="img1-filter card-img-top" alt="/" />
                </div>
                <div className="card-body " height={300}>

                    <h5 className="card-title text-center fw-semibold mt-1">{item.title}</h5>
                    <p className="card-text text-center">{item.desc}</p>
                  <div className="hover-icon m-3">
                    {/* <button className="three-icon1"  ><FavoriteOutlinedIcon /></button> */}
                    <NextWishlistBtn  alldata={item} />
                    <button className="three-icon3  ms-3"><SearchIcon /></button>
                    <button className="three-icon2  ms-3 " onClick={() => {notify(addItem(item))}}><ShoppingBagIcon /></button>
                  </div>
                    <div className="over d-flex justify-content-center">
                        <p className="price-initial card-text text-center fw-semibold">${item.price} <span className='price-endirim text-decoration-line-through text-muted '>${item.price1}</span></p>
                        <Card.Text className='stars text-center mx-3 '>
                            <StarIcon className='ms-1' />
                            <StarIcon className='ms-1' />
                            <StarIcon className='ms-1' />
                            <StarIcon className='ms-1' />
                            <StarIcon className='ms-1' />
                        </Card.Text>
                    </div>
                </div>
            </div>
        </Col>
       
          })}

      </Row>
    </Container>
  )
}

export default Wishlist
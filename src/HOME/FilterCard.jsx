import React from 'react';
import { Card, Col } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import NextWishlistBtn from '../components/NextWishlistBtn';
import { LinkContainer } from 'react-router-bootstrap';

const FilterCard = ({ menuItem, id }) => {

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
        <>
            <Col>
                <div className='main mb-5'>
                    <div className="card-filter border-0 " >
                        <img src={menuItem.img} width={200} className="img-filter card-img-top" alt="/" />
                        <img src={menuItem.img1} width={200} className="img1-filter card-img-top" alt="/" />
                    </div>
                    <div className="card-body ">

                        <h5 className="card-title text-center fw-semibold mt-1">{menuItem.title}</h5>
                        <p className="card-text text-center">{menuItem.desc}</p>
                      <div className="hover-icon m-3">
                        {/* <button className="three-icon1"  ><FavoriteOutlinedIcon /></button> */}
                        <NextWishlistBtn  alldata={menuItem} />
                        <LinkContainer to={`/productdetails/${id}`}>
                        <button className="three-icon3  ms-3"><SearchIcon /></button>
                        </LinkContainer>
                        <button className="three-icon2  ms-3 " onClick={() => {notify(addItem(menuItem))}}><ShoppingBagIcon /></button>
                      </div>
                        <div className="over d-flex justify-content-center">
                            <p className="price-initial card-text text-center fw-semibold">${menuItem.price} <span className='price-endirim text-decoration-line-through text-muted '>${menuItem.price1}</span></p>
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
           
        </>
        
    )
}

export default FilterCard
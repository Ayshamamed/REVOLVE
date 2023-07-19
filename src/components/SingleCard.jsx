import React from 'react';
import Card from 'react-bootstrap/Card';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { Col } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';


const SingleCard = ({ img, img1, alldata }) => {
    const { addItem } = useCart();

    // const wishbtn=(product)=>{
    //     if(inWishlist(product.id)){
    //         removeWishlistItem(product.id)
    //     }
    //     else{
    //         addWishlistItem(product)
    //     }
    // }

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

            <Col sm={6} md={3} data-aos="fade-up" >
                <div className="main-singlecard">
                    <Card className='image-singlecard shadow-lg  border border-0' >
                        <Card.Img variant=" top" className=' image-single' src={img} />
                        <Card.Img className=' img-single' src={img1} />
                    </Card>
                    <div className="card-overlay">
                        <h4 className='quick text-center   '>QUICK WIEV</h4>
                        <div className="icons-single d-flex justiy-content-between align-items-center">
                            <a onClick={() => { notify(addItem(alldata)) }}href="/" className=' shop-single p-2  ' alt="err" ><ShoppingBagIcon className='shop-single fs-1 fw-bolder' /></a>
                            <a className='search-single p-4' alt="/" href='/'><SearchIcon className='search-single fs-1 fw-bolder' /></a>
                            <a className='heart-single ' alt="/" href='/'>
                             <FavoriteOutlinedIcon className='heart-single fs-1 fw-bolder' />
                            </a>
                        </div>
                    </div>
                </div>
                <ToastContainer
                position="bottom-right"
                autoClose={1345}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            </Col>

         
        </>
    )
}

export default SingleCard
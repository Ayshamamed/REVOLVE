import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { LinkContainer } from 'react-router-bootstrap';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BasketWishlistBtn from './BasketWishlistBtn';
import { Navigate, useNavigate } from 'react-router-dom';


const Basket = () => {
    const { items, updateItemQuantity, removeItem, cartTotal, emptyCart, isEmpty, setItems } = useCart();
    // const location = useNavigate();

    const notify = () => toast.success('Quantity was incremented!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const data = JSON.parse(localStorage.getItem("User"))

    // const checkUser = () => {
    //     if (data !== null) {
    //         setItems([])

    //     }
    //     else {
    //         <Navigate to='/'/>
    //         console.log('else bloku');
    //     }
    // }


    return (

        isEmpty ? <h2 className="d-flex justify-content-center align-items-center my-5 fw-bolder">
            Your Cart is Empty
        </h2> :


            <Container fluid className='my-5 ms-2'>

                <div className="top-bag" style={{ width: "100%", height: "120px" }}>
                    <h2 className='fw-bolder' >SHOPPING BAG</h2>
                    <p className='text-lowercase fs-6 mt-1'>
                        <LinkContainer to="/my-account">
                            <a className='text-dark me-2 text-uppercase fw-bold'>Sign in</a>
                        </LinkContainer>
                        to sync your bag across your devices.</p>
                </div>
                <div className="item fw-bold ms-3">ITEM</div>
                {items.map((item, count) => {
                    return <div className="main-basket d-flex" >

                        <div className="card mb-3 border-start-0 border-end-0" style={{ maxWidth: 900, maxHeight: 250 }}>

                            <div className="row g-0 ">
                                <div className="col-md-2">
                                    <img src={item.img} className="img-fluid rounded-start" style={{ height: "230px", objectFit: "cover" }} alt="../" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="card-body">
                                        <h6 className='text-lowercase d-flex justify-content-center align-items-center' style={{ width: "440px", height: "35px", backgroundColor: "#FDEEEE", borderRadius: "33px" }}> <span className='fw-bold me-1 mt-2' > <ShoppingBagOutlinedIcon className='mb-2 ' /> DON'T MISS OUT!</span>Added to bag 5 times in the last 48 hrs</h6>
                                        <h5 className="card-title fw-bold ">{item.title}</h5>
                                        <p className="card-text lh-1">
                                            {item.desc}
                                        </p>
                                        <div className="buttons-basket d-flex ">
                                            <button className='btn text-dark btn-light text-lowercase' style={{ borderRadius: "0px", }}>move to favorites</button>
                                            <button className='btn-remove btn btn-light text-lowercase ms-3 ' style={{ borderRadius: "0px", }} onClick={() => removeItem(item.id)} >remove</button>
                                        </div>
                                        <div className="quantity mt-3 d-flex  align-items-center ">
                                            <p className='fw-bolder '>Quantity:</p>
                                            <button className='btn-remove btn btn-light text-lowercase ms-3 fw-bolder ' style={{ borderRadius: "0px", }} onClick={() => (updateItemQuantity(item.id, item.quantity - 1))}>-</button>
                                            <span className='mx-3 fw-bolder'>{item.quantity}</span>
                                            <button className='btn-remove btn btn-light text-lowercase fw-bold ' style={{ borderRadius: "0px", }} onClick={() => { notify(updateItemQuantity(item.id, item.quantity + 1)) }} >+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 mt-3 " style={{ marginLeft: "170px", color: "#961C1C" }}>
                                    <span className=' fs-6 fw-bold'>{item.price.toFixed() * item.quantity} $ </span>
                                </div>
                            </div>

                        </div>
                        <div className="total-card ms-5 ">
                            <div className="col-md-11 col-sm-6  ">
                                <h6 className='fw-bolder text-center'>ORDER SUMMARY</h6>
                                <div className="total-body p-3 border">
                                    <div className="d-flex justify-content-between">
                                        <h6 className='fw-bolder'>SUBTOTAL ({item.quantity}) </h6>
                                        <h6 className='me-5'>${cartTotal}</h6>
                                    </div>

                                    <div className=" ">
                                        <div className="d-flex justify-content-between">
                                            <h6>FREE shipping   <a href="/" className='text-muted text-lowercase '>details</a></h6>

                                            <h6 className='me-5'>$0.00</h6>
                                        </div>
                                    </div>
                                    <h6 className='text-lowercase text-muted'>taxes calculated at chekcout.</h6>
                                    <div className="footer-total d-flex justify-content-between border-top">
                                        <h5 className='fw-bold mt-3'>estimated total</h5>
                                        <h5 className='fw-bold me-5 mt-3'>${cartTotal}</h5>
                                    </div>
                                </div>
                                <button className='btn text-white fw-bold mt-3' style={{ width: "100%", height: "60px", backgroundColor: "#000000" }}>CHECKOUT AS A GUEST</button>
                                <button className='btn text-white fw-bold mt-3' style={{ width: "100%", height: "60px", backgroundColor: "#000000" }}>SIGN IN FOR FASTER CHECKOUT</button>
                            </div>
                        </div>

                    </div>
                })}

                <h4 className='fw-bolder'>Total Price: <span className='text-danger me-1 d-flex'>${cartTotal.toFixed()}</span></h4>
                <Button variant='dark' className='btn btn-lg btn-outline-light fw-bold' onClick={() => { emptyCart() }}>CLEAR CART</Button>
                <Button variant='dark' className='btn btn-lg btn-outline-light fw-bold ms-3' > BUY NOW</Button>

                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Container>
    )
}

export default Basket
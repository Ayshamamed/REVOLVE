import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
const Basket = () => {
    const {items, updateItemQuantity, removeItem, cartTotal, emptyCart,isEmpty}=useCart();
    return (

        isEmpty? <h2 className="d-flex justify-content-center align-items-center my-5 fw-bolder">
                  Your Cart is Empty
        </h2> : 


        <Container className='my-5'>

            <h1 className=' my-5 fw-semibold'>SHOPPING BAG</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                 {items.map((item, count)=>{
                    return <tr>
                    <td>{count +1}</td>
                    <td><img style={{width:"70px", height:"70px", objectFit:"contain" }} src={item.img}  className='image-fluid' alt="" /></td>
                    <td>{item.about}</td>
                    <td>{item.price.toFixed() * item.quantity} AZN </td>
                    <td className='text-center'><Button variant='success'  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button> <span className='mx-2'>{item.quantity}</span> <Button variant='success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button></td>
                    <td className='text-center'><Button variant='danger'onClick={() => removeItem(item.id)} ><i class="fa-solid fa-x"></i></Button></td>
                </tr>
                 })}
                </tbody>
            </Table>
            <h4 className='fw-bolder'>Total Price: <span className='text-danger'>{cartTotal.toFixed()}</span>AZN</h4>
            <Button variant='danger' onClick={()=>{emptyCart()}}>Clear cart</Button>
        </Container>
    )
}

export default Basket
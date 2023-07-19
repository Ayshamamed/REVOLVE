import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useWishlist } from 'react-use-wishlist';

const Wishlist = () => {
  const {items }=useWishlist();


  return (
   <Container>
     <Row className='g-5 my-5'>
        <h1 className='fw-semibold  my-5'>Favorites</h1>
        {
        items.map((item,count)=>{
         return <Col sm={6} md={3} key={count}>
            <Card >
       <Card.Img variant="top" src={item.image} />
       <Card.Body>
         <Card.Title>{item.about}</Card.Title>
         <Card.Text>
           {item.title}
         </Card.Text>
         <Card.Text>
           {item.price} AZN
         </Card.Text>
         <Button variant="warning">Add to cart</Button>
       </Card.Body>
     </Card>
       </Col>
        })}
      
    </Row>
   </Container>
  )
}

export default Wishlist
import React from 'react';
import products from "../data/Product";
import SingleCard from './SingleCard';
import { Row } from 'react-bootstrap';

const CardList = () => {
  return (
    <div>
         <Row className='g-5 my-5 mx-3 '>
                <h5 className='offer-single text-center'>WHAT WE OFFER FOR YOU</h5>
                <h1 className='category-single text-center fw-semibold'>Top Categories</h1>

                {products.map((item) => {
                
                    return <SingleCard 
                     key={item.id}
                    img={item.img}
                    img1={item.img1}
                    alldata={item}
                    
                    />
                  

                })}
        
          </Row>
    </div>
  )
}

export default CardList
import React from 'react';
import products from "../data/Product";
import SingleCard from './SingleCard';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CardList = () => {
  const {t} =useTranslation();
  // const productdetails=product.find(p=>p.id==id);
  // const {id}=useParams();

  return (
    <Container fluid>
         <Row className='g-5 my-5 mx-3 '>
                <h5 className='offer-single text-center'>{t("home.1")}</h5>
                <h5 className='category-single text-center fw-semibold'>{t("home.2")}</h5>
                {products.map((item) => {
                    return <SingleCard 
                     key={item.id}
                    img={item.img}
                    img1={item.img1}
                    alldata={item}
                    
                    />
                })}
          </Row>
    </Container>
  )
}

export default CardList

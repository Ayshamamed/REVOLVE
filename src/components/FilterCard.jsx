import React from 'react';
import { Card, Col } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';


const FilterCard = ({ menuItem }) => {

    return (
        <>
            <Col>
                <div className='main mb-5'>
                    <div className="card-filter border-0 " >
                        <img src={menuItem.img} width={200} className="img-filter card-img-top" alt="/" />
                        <img src={menuItem.img1} width={200} className="img1-filter card-img-top" alt="/" />
                    </div>
                    <div className="card-body ">

                        <h5 className="card-title text-center fw-semibold">{menuItem.title}</h5>
                        <p className="card-text text-center">{menuItem.desc}</p>
                        <div className="over d-flex justify-content-center">
                            <p className="price-initial card-text text-center fw-semibold">{menuItem.price} <span className='price-endirim text-decoration-line-through text-muted '>{menuItem.price1}</span></p>
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

                {/* <div className="hover-icons">
                    <ShoppingBagIcon className='' />
                    <SearchIcon className='' />
                    <FavoriteOutlinedIcon className='' />
                </div> */}

            </Col>

        </>
    )
}

export default FilterCard
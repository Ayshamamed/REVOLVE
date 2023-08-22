import { Col, Card, Container, Row, Form, Button } from 'react-bootstrap';
import data from "../data/FiltersProduct";
import StarIcon from '@mui/icons-material/Star';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import NextWishlistBtn from '../components/NextWishlistBtn';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const ProductsPage = ({ menuItem }) => {


  const { t } = useTranslation();
  const { addItem } = useCart();

  // const [datas, setDatas] = useState(data);
  const [product, setProduct] = useState(data);
  const [prices, setPrices] = useState(data);
  const [search, setSearch]=useState('');
  const [minPrice, setMinPrice] = useState(30);
  const [maxPrice, setMaxPrice] = useState(600);
  const menuCategories = ["All", ...new Set(data.map(item => item.category))];


  const filtercategories = (mc) => {


    localStorage.setItem("category", mc);
    if (mc === "All") {
      setProduct(data)
      return;
    }

    const filterMenu = data.filter((item) => item.category === mc);
    setProduct(filterMenu);
  }
  useEffect(() => {
    const categoryValue = localStorage.getItem("category") || "all"
    filtercategories(categoryValue);
  }, [])

  // stock 
  const filterstock = (stockStatus) => {
    localStorage.setItem("Stock", stockStatus);
  
    if (stockStatus === "All") {
      setProduct(data);
      return;
    }
  
    const filteredStock = data.filter((item) => {
      if (stockStatus === "In stock") {
        return item.stock > 0;
      } else if (stockStatus === "Out of stock") {
        return item.stock <= 0;
      }
      return true;
    });
  
    setProduct(filteredStock);
  };

  // PRICES SECTION 
 
  const filteredFunctions=()=>{
       let filteredData=data.filter(item=>item.price>=minPrice && item.price<=maxPrice)
        setProduct(filteredData)

    }


    

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
      <Container fluid>
        <h3 className='my-5' style={{ fontWeight: "950" }}>ALL SALE ITEMS</h3>

        <Row className=' products g-5 '>
          <Col sm={6} md={3} >

            <div className="search-section">
              <Form className="d-flex shadow mb-5">
                <Form.Control
                  type="search"
                  placeholder={t("header.12")}
                  className=" header-input"
                  aria-label="Search"
                  data-bs-target="#staticBackdrop"
                  style={{ borderRadius: "0px" }}
                />
                <Button id='nav-button' variant="outline-none border-0" style={{ backgroundColor: "#000000", color: "white", borderRadius: "0px" }} ><i class="fa-solid fa-magnifying-glass"></i></Button>
              </Form>
            </div>
            <h6 style={{ fontWeight: "950" }}>CATEGORY</h6>

            <div className="accordion accordion-flush border-top" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i class="fa-solid fa-bars me-3 "></i>  PRICE
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse my-5" data-bs-parent="#accordionFlushExample">
                <div className="col-lg-12">
                        <h4>Filter by price</h4>
                    <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                        min={30}
                        max={600}
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
              <p>
                Price: <span>${minPrice} — ${maxPrice}</span>
              </p>
              <button className='btn btn-dark fw-bolder'  onClick={() => filteredFunctions("All")}>Filter</button>
                </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <i class="fa-solid fa-bars me-3"></i>AVAILABILITY
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <ul className="list-group ">
                      <button className='btn btn-lg fw-bold btn-outline-dark mb-3' style={{ borderRadius: "0px" }} onClick={() => filterstock("In stock")}>In stock</button>
                      <button className='btn btn-lg fw-bold btn-outline-dark mb-3' style={{ borderRadius: "0px" }} onClick={() => filterstock("Out of stock")}>Out of stock</button>

                    </ul>

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <i class="fa-solid fa-bars me-3"></i> PRODUCT TYPE
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">

                    {menuCategories.map((item) => {
                      return <ul className="list-group " key={item.id} >
                        <button className={localStorage.getItem("category") === item ? "btn btn-lg fw-bold btn-dark mb-3" : "btn btn-lg fw-bold btn-outline-dark mb-3"} style={{ borderRadius: "0px" }} onClick={() => filtercategories(item)}>{item}</button>

                      </ul>
                    })}


                  </div>
                </div>
              </div>

            </div>
          </Col>

          <div className="col-md-9 mb-5" >
            <div className="row g-5">
              
              {product.map((item) => {


                return <div className=" col-md-4" key={item.id}>
                  <div className='main mb-5'>
                    <div className="card-filter border-0 " >
                      <img src={item.img} className="img-filter card-img-top" alt="/" />
                      <img src={item.img1} className="img1-filter card-img-top" alt="/" />
                    </div>
                    <div className="card-body ">

                      <h5 className="card-title text-center fw-semibold mt-1">{item.title}</h5>
                      <p className="card-text text-center">{item.desc}</p>
                      <div className="hover-icons m-3">
                        {/* <button className="three-icon1"  ><FavoriteOutlinedIcon /></button> */}
                        <NextWishlistBtn alldata={item} />
                        <button className="three-icon3  ms-3"><SearchIcon /></button>
                        <button className="three-icon2  ms-3 " onClick={() => { notify(addItem(item)) }}><ShoppingBagIcon /></button>
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
                </div>
              })
              }
              
            </div>
          </div>

        </Row>

      </Container>
    </>
  )
}

export default ProductsPage
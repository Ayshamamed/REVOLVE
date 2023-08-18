import React from 'react';
import { Container } from 'react-bootstrap';
import data from "../data/BlogData";

const Blog = () => {


    return (
        <Container fluid className='mt-5'>
            <div className="row g-5">
                <div className="top-image my-2 mb-5" >    
                {/* blog image*/}
               </div>
              {data.map(item=>{
                return <div className="all">
                    <div className="col-12 col-sm-6 col-md-8 col-lg-8 ms-5">
                <div className="card mb-3" >
                      <div className="row g-0">
                          <div className="col-md-4"  data-aos="zoom-in">
                              <img src={item.img} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>
                                  <p className="card-text">{item.desc}</p>
                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                  <p className="card-text"><small className="text-muted">{item.name}</small></p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                {/* <div className="col-12 col-sm-6 col-md-8 col-lg-8 ms-5">
                <div className="card mb-3" >
                      <div className="row g-0">
                         
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                              </div>
                          </div>

                          <div className="col-md-4">
                              <img src={item.img} className="img-fluid rounded-start" alt="..." />
                          </div>
                      </div>
                  </div>
                </div> */}
                </div>
              })}


            </div>

          
        </Container>
    )
}
export default Blog


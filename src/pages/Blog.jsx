import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import data from "../data/BlogData";
import { useSelector } from 'react-redux';

const Blog = () => {
    const myBlogs = useSelector((store) => store.AppReducer)
    useEffect(() => {
        localStorage.setItem("Blogs", JSON.stringify(myBlogs));
    }, [myBlogs]);

    return (
        <Container fluid className='mt-5'>
            <div className="row g-5 ">
                <div className="top-image my-2 mb-5" >
                    {/* blog image*/}
                </div>
                {data.map(item => {
                    return <div className="all d-flex justify-content-center" key={item.id}>
                        <div className="col-12 col-sm-6 col-md-8 col-lg-8 ms-5">
                            <div className="card mb-3" >
                                <div className={` ${item.style} g-0`}>
                                    <div className="col-md-4" data-aos="zoom-in">
                                        <img src={item.img} className="img-fluid rounded-start" alt="../" style={{ width: "900px", height: "100%" }} />
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
                    </div>
                })}


                {
                    myBlogs.map((item, index) => {
                        return <div className="all d-flex justify-content-center" key={item.id}>
                        <div className="col-12 col-sm-6 col-md-8 col-lg-8 ms-5">
                            <div className="card mb-3" >
                        <div className="row g-0" key={index}>
                        <div className="col-md-4"  data-aos="zoom-in">
                            <img src={item.img} className="img-fluid rounded-start" alt="../" style={{ width: "900px", height: "100%" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
                        </div>
                    </div>
                    })
                }
            </div>
            
                
            

        </Container>
    )
}
export default Blog


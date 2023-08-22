import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AddBlogFunction } from '../REDUX/Actions';

const Blog = () => {
    const [blog, setBlog] = useState({
        id: uuidv4(),
        title: "",
        desc: "",
        img: "",
      });
      const location = useNavigate();
      const dispatch = useDispatch();
      const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
      };
      const submitForm = (e) => {
        e.preventDefault();
        dispatch(AddBlogFunction(blog));
        location("/blog");
      };
    

    return (
        <>
        
            <Container fluid >
                <div className="row my-5">

                    <div className="d-flex justify-content-center align-items-center">

                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                            <form  onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">IMAGE LINK </label>
                                    <input type="text" className="form-control"name="img" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">BLOG TITLE </label>
                                    <input type="text" className="form-control" name="title" onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">BLOG DESCRIPTION </label>
                                    <input type="text" className="form-control" name="desc" onChange={handleChange} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>

                                <button type="submit" className="btn btn-success fw-bolder p-2">ADD BLOG</button>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog
import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../REDUX/slices/BlogSlice';
import { v4 as uuidv4 } from 'uuid';

const Blog = () => {
     const [values, setValues]=useState({
        title:"",
        desc:"",
        link:"",
     });
    const navigate =useNavigate();

    const submitForm=(e)=>{
        e.preventDefault();
        setValues({link:"", title:"", desc:"", })
        navigate("/blog");
    }
    console.log(values);

    

    return (
        <>
        
            <Container fluid >
                <div className="row my-5">

                    <div className="adminpanel" >
                        <h1 className='fw-bold text-center '>ADMIN PANEL</h1>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">

                        <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                            <form  onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">IMAGE LINK </label>
                                    <input type="text" className="form-control" onChange={(e)=>setValues( e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">BLOG TITLE </label>
                                    <input type="text" className="form-control" onChange={(e)=>setValues( e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">BLOG DESCRIPTION </label>
                                    <input type="text" className="form-control" onChange={(e)=>setValues( e.target.value)}/>
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
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { RemoveBlogFunction } from '../REDUX/Actions';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const myBlog = useSelector((store) => store.AppReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem("Blogs", JSON.stringify(myBlog));
    }, [myBlog]);
   

    return (
        <Container className='my-5'>

            <div className="adminpanel" >
                <h1 className='fw-bold text-center '>ADMIN PANEL</h1>
            </div>

            <div className='my-5'>
                <LinkContainer to="/admin" style={{ borderRadius: "0px" }}>
                    <button className='btn btn-dark my-2 fw-bolder text-uppercase' style={{ borderRadius: "0px" }}> Add new blog</button>
                </LinkContainer>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBlog.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>
                                        <img src={item.img} alt="" style={{ height: "100px" }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <NavLink className="btn btn-dark mx-3" to={`/editBlog/${item.id}`}><i class="fa-regular fa-pen-to-square" style={{ color: "white" }}></i></NavLink>
                                    </td>
                                    <td> 
                                        <button
                                        className="btn " style={{backgroundColor: "#961C1C"}}
                                        onClick={() => dispatch(RemoveBlogFunction(item.id))}
                                    >
                                        <i class="fa-regular fa-trash-can text-white"></i>
                                    </button>
                                     </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Dashboard
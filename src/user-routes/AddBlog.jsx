import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { AddBlogFunction } from "../REDUX/Actions";
const AddBlog = () => {
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
      <section className="addblog">
        <h3>Add new blog</h3>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="img"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBlog;
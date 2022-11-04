import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(blogs);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      return toast.warning("Please fill in all fields");
    }
    const data = {
      id: blogs[blogs.length - 1].id + 1,
      title,
      category,
      description,
    };
    dispatch({ type: "ADD_BLOG", payload: data });
    toast.success("Blog Added Successfully");
    navigate("/");
    console.log(data);
  };

  
  
  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add Blog</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 20 }}>
              <input
                type="text"
                placeholder="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div
              className="btn btn-block btn-dark"
              style={{ marginBottom: 20, width: 480 }}
            >
              <input
                type="submit"
                value="Add blog"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

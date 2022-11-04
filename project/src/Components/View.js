import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const View = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const blogs = useSelector((state) => state);
    const currentBlog = blogs.find((blogs) => blogs.id === parseInt(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      if (currentBlog) {
        setTitle(currentBlog.title);
        setCategory(currentBlog.category);
        setDescription(currentBlog.description);
      }
    }, [currentBlog]);
  return (
    <div className="container">
      <Link className="btn btn-dark" style={{ marginTop:4, marginLeft:1120}} to={"/"}>
        Home
      </Link>
      <h1 className="display-3 my-4 text-center">View Blog</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-1">
          <label
            className="display-7 p-8 font-weight-bolder"
            style={{ margin: 15 }}
          >
            Title : {currentBlog.title}
          </label>
          <br></br>
          <label
            className="display-7 p-8 font-weight-bolder"
            style={{ margin: 15 }}
          >
            Category : {currentBlog.category}
          </label>
          <br></br>
          <label
            className="display-7 p-8 font-weight-bolder"
            style={{ margin: 15 }}
          >
            Description : {currentBlog.description}
          </label>
          <br></br>
          <Link
            className="btn btn-success"
            style={{ marginLeft: 250 }}
            to={"/"}
          >
            Like
          </Link>
        </div>
      </div>
    </div>
  );
}

export default View
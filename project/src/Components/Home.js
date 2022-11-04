import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const blogs = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteBlog = (id) =>{
    dispatch({type:"DELETE_BLOG", payload:id});
    toast.success("Blog Deleted Successfully");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link
            to="/add"
            className="btn btn-outline-dark"
            style={{ marginLeft: 1000 }}
          >
            New Post
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover col-md-10">
            <thead className="text-white bg-dark text-right">
              <tr>
                <th scope="col">BLOGS AVAILBALE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blogs, id) => (
                <tr key={id}>
                  <td>{blogs.title}</td>
                  <td>
                    <Link
                      to={`/view/${blogs.id}`}
                      className="btn btn-small btn-info"
                      style={{ marginLeft: 490 }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit/${blogs.id}`}
                      className="btn btn-small btn-primary"
                      style={{margin:5}}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteBlog(blogs.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditBlog = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const blogs = useSelector(state =>state);
    const currentBlog = blogs.find(blogs=> blogs.id === parseInt(id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(currentBlog){
            setTitle(currentBlog.title);
            setCategory(currentBlog.category);
            setDescription(currentBlog.description);

        }
    }, [currentBlog]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title || !category || !description) {
        return toast.warning("Please fill in all fields");
      }
      const data = {
        id: parseInt(id),
        title,
        category,
        description,
      };
      dispatch({ type: "UPDATE_BLOG", payload: data });
      toast.success("Blog Updated Successfully");
      navigate("/");
      console.log(data);
    };

  return (
    <div className="container">
        {currentBlog?(
            <>
      <h1 className="display-3 my-5 text-center">Edit Blog {id}</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: 20 }}>
              <input type="text" placeholder="tile" className="form-control" value={title} onChange={(e) =>setTitle(e.target.value)} />
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
                onChange={(e)=> setDescription(e.target.value)}
              />
            </div>
              <input
                type="submit"
                value="Add blog"
                className="btn btn-block btn-dark"
                style={{marginRight:10, marginLeft:130}}
              />
              <Link to="/" className="btn btn-danger ml-3">
                Cancel
              </Link>
          </form>
        </div>
      </div>
      </>
      ):(
        <h1 className="display-3 my-5 text-center">Blog with id {id} doesn't exist</h1>
      )}
    </div>
  );
};

export default EditBlog
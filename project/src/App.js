import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Add from './Components/Add';
import EditBlog from './Components/EditBlog';
import View from './Components/View';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/edit/:id" element={<EditBlog/>} />
        <Route exact path="/view/:id" element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;

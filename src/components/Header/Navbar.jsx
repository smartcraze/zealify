import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="public\zeal.png" style={{height:"50px", widows:"50px"}} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ color:"White",
                fontSize:"20px",fontWeight:"bolder"}} className="nav-link font-weight-bold" to="/home">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bold" to="/games" style={{
                fontSize:"20px",fontWeight:"bolder",color:"white"}}>Games</Link> 
            </li>
            <li className="nav-item font-weight-bold">
              <Link className="nav-link font-weight-bold" to="/about" style={{
                fontSize:"20px",fontWeight:"bolder",color:"white"
              }}>About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import img1 from '../Assets/productphoto1.jpg';
import img2 from '../Assets/productphoto2.jpg';

const ProductPhotography = () => {
  return (
    <div className="product-photo-page">
      
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 1000 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Revolve</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Image Row */}
      <div className="image-row" style={{ marginTop: '56px' }}>
        <img
          src={img1}
          alt="Hike Can"
          className="half-img"
        />
        <img
          src={img2}
          alt="Obolon Can"
          className="half-img"
        />
      </div>

      {/* Title */}
      <div className="text-center py-3">
        <h2 className="text-warning fw-bold">Product Photography</h2>
      </div>

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center flex-wrap px-3 py-2 border-top">
        <span>Signage | Wall Branding | Standees | In-store Branding</span>
        <span className="socials">
          revolve.ke
          <i className="bi bi-linkedin ms-3"></i>
          <i className="bi bi-facebook ms-2"></i>
          <i className="bi bi-instagram ms-2"></i>
          <i className="bi bi-tiktok ms-2"></i>
          <i className="bi bi-youtube ms-2"></i>
          <i className="bi bi-twitter-x ms-2"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductPhotography;

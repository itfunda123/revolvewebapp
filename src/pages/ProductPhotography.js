import React from 'react';
import img1 from '../Assets/productphoto1.jpg';
import img2 from '../Assets/productphoto2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductPhotography = () => {
  return (
    <div className="product-photo-page" style={{ margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: 0, padding: 0 }}>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
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
      <div className="image-row" style={{
        display: 'flex',
        margin: '0',
        padding: '0',
        lineHeight: '0',
      }}>
        <img
          src={img1}
          alt="Hike Can"
          style={{
            width: '50%',
            height: '100vh', // fill the screen height
            objectFit: 'cover', // CUT the inside empty margins
            display: 'block'
          }}
        />
        <img
          src={img2}
          alt="Obolon Can"
          style={{
            width: '50%',
            height: '100vh', // fill the screen height
            objectFit: 'cover', // CUT the inside empty margins
            display: 'block'
          }}
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

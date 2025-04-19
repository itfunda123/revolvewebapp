import React from 'react';
import img1 from '../Assets/productphoto1.jpg';
import img2 from '../Assets/productphoto2.jpg';

const ProductPhotography = () => {
  return (
    <div className="product-photo-page">
      <div className="d-flex flex-wrap no-gutters">
        <img src={img1} alt="Hike Can" className="half-img" />
        <img src={img2} alt="Obolon Can" className="half-img" />
      </div>

      <div className="text-center py-3">
        <h2 className="text-warning fw-bold">Product Photography</h2>
      </div>

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

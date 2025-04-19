import React from 'react';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a368c', color: '#f1b31c' }} className="py-2 px-4 mt-5">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        <div className="footer-services mb-2 mb-md-0">
          <strong>Signage | Wall Branding | Standees | In-store Branding</strong>
        </div>
        <div className="footer-social d-flex align-items-center gap-3">
          <span>revolve.ke</span>
          <FaLinkedin size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTiktok size={20} />
          <FaYoutube size={20} />
          <FaTwitter size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

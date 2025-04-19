// src/components/ImageGrid.js
import React from 'react';
import img1 from '../Assets/image1.jpg';
import img2 from '../Assets/image2.jpg';
import img3 from '../Assets/image3.jpg';
import img4 from '../Assets/image4.jpg';
import img5 from '../Assets/image5.jpg';
import img6 from '../Assets/image6.jpg';

const ImageGrid = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row no-gutters">
        {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
          <div className="col-12 col-md-4 p-0" key={idx}>
            <img src={img} alt={`Grid ${idx + 1}`} className="img-fluid w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

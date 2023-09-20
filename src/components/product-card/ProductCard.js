import React from 'react';

import "./product-card.css";

const ProductCard = ({service}) => {
    const {title, desc, video} = service;
  return (
    <div class="card">
    <div class="card-img">
    <video
                src={video}
                loop="loop"
                autoPlay="autoplay"
                playsInline
                muted="muted"
                preload="auto"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                ></video>
    </div>
    <div class="card-info">
      <p class="text-title">{title} </p>
      <p class="text-body">{desc}</p>
    </div>
  </div>
  )
}

export default ProductCard

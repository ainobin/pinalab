// Product Gallery Component
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [product.image, product.image, product.image, product.image];

  return (
    <div className="product-gallery-modern">
      {/* Eco Badge */}
      <div className="gallery-badge">
        <span className="eco-badge">🌿 100% Sustainable</span>
      </div>

      {/* Main Image Display */}
      <div className="main-image-container">
        <div className="main-image-card">
          <Image 
            src={images[selectedImage]} 
            alt={product.name}
            width={600}
            height={600}
            className="product-detail-main-image"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="image-overlay"></div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="thumbnail-grid">
        {images.map((imageSrc, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`thumbnail-btn ${selectedImage === index ? 'active' : ''}`}
          >
            <Image 
              src={imageSrc} 
              alt={`${product.name} thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="thumbnail-image"
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {/* Product Highlights */}
      <div className="product-highlights">
        <div className="highlight-item">
          <span className="highlight-icon">♻️</span>
          <span className="highlight-text">Zero Waste</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-icon">🌱</span>
          <span className="highlight-text">100% Vegan</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-icon">🇺🇳</span>
          <span className="highlight-text">UN Approved</span>
        </div>
      </div>
    </div>
  );
}

// Product Description Component
'use client';

import { useState } from 'react';

export default function ProductDescription({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="product-description-modern">
      {/* Category Badge */}
      <div className="product-category-section">
        <span className="category-pill">{product.category}</span>
        <span className="stock-badge">✓ In Stock</span>
      </div>

      {/* Product Title */}
      <h1 className="product-detail-title">{product.name}</h1>

      {/* Rating */}
      <div className="rating-section">
        <div className="stars-display">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
              ★
            </span>
          ))}
          <span className="rating-number">{product.rating}</span>
        </div>
        <span className="review-count">({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <div className="price-display">
        <span className="price-main">৳{product.price}</span>
        <span className="price-old">৳{(product.price * 1.3).toFixed(2)}</span>
        <span className="price-save">Save 30%</span>
      </div>

      {/* Description */}
      <p className="product-desc-text">{product.details}</p>

      {/* Size Selector (if applicable for clothing/shoes) */}
      {(product.category === 'Footwear' || product.category === 'Apparel') && (
        <div className="size-selector">
          <label className="selector-label">Size:</label>
          <div className="size-options">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="quantity-section">
        <label className="selector-label">Quantity:</label>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity} className="qty-btn">−</button>
          <span className="qty-display">{quantity}</span>
          <button onClick={increaseQuantity} className="qty-btn">+</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          onClick={handleAddToCart}
          className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
        >
          {addedToCart ? '✓ Added to Cart' : '🛒 Add to Cart'}
        </button>
        <button className="wishlist-btn">
          ♡ Wishlist
        </button>
      </div>

      {/* Product Features */}
      <div className="features-grid">
        <div className="feature-box">
          <span className="feature-icon">🚚</span>
          <div className="feature-content">
            <h4>Free Shipping</h4>
            <p>On orders over ৳5000</p>
          </div>
        </div>
        <div className="feature-box">
          <span className="feature-icon">↩️</span>
          <div className="feature-content">
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🔒</span>
          <div className="feature-content">
            <h4>Secure Payment</h4>
            <p>SSL encrypted checkout</p>
          </div>
        </div>
        <div className="feature-box">
          <span className="feature-icon">🌿</span>
          <div className="feature-content">
            <h4>Eco-Certified</h4>
            <p>100% sustainable materials</p>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="specifications-section">
        <h3 className="spec-title">Product Details</h3>
        <ul className="spec-list">
          <li><span className="spec-key">Material:</span> <span className="spec-value">Pineapple Leaf Fiber</span></li>
          <li><span className="spec-key">Origin:</span> <span className="spec-value">Bangladesh</span></li>
          <li><span className="spec-key">Certifications:</span> <span className="spec-value">UN Approved, Vegan</span></li>
          <li><span className="spec-key">Care:</span> <span className="spec-value">Hand wash recommended</span></li>
          <li><span className="spec-key">Sustainability:</span> <span className="spec-value">Zero Waste Production</span></li>
        </ul>
      </div>
    </div>
  );
}

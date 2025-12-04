// Featured Products Component
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featuredItems = products.slice(0, 6 );

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>🌱</span>
            <span>Sustainable Collection</span>
          </div>
          <h2 className="section-title">Eco-Friendly Fashion</h2>
          <p className="section-subtitle">Premium vegan leather and sustainable textiles made from pineapple leaves</p>
        </div>
        
        <div className="products-grid">
          {featuredItems.map((product, index) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id}
              className="product-card-link-wrapper"
            >
              <div className="product-card modern-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-shine"></div>
                <div className="product-badge">New</div>
                <div className="product-image">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={400}
                    className="product-actual-image"
                    style={{ objectFit: 'cover' }}
                  />
                  <button className="quick-view">Quick View</button>
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <span className="product-category">{product.category}</span>
                    <div className="rating">
                      <span className="star-icon">⭐</span>
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="price-section">
                      <span className="price-label">From</span>
                      <span className="price">৳{product.price}</span>
                    </div>
                    <button className="btn-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 13L10 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

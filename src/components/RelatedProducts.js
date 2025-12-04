// Related Products Component
import { products } from '@/data/products';

export default function RelatedProducts({ currentProductId }) {
  const relatedItems = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="related-products-section">
      <div className="container">
        <h2 className="section-title">Related Products</h2>
        
        <div className="products-grid">
          {relatedItems.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder">{product.name}</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <div className="rating">
                    <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span className="rating-value">({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="price">${product.price}</span>
                  </div>
                </div>
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

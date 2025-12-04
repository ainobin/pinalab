import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export const metadata = {
  title: 'Sustainable Products | PinaLab',
  description: 'Shop our collection of eco-friendly fashion made from pineapple leaves',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0b0f] via-[#121318] to-[#0a0b0f]">
      {/* Header Section */}
      <section className="products-header">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-linear-to-r from-emerald-500/20 to-emerald-500/20 border border-emerald-500/30">
              <span className="text-emerald-400 font-semibold text-sm">🍍 100% Vegan</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-linear-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Sustainable Fashion Collection
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover our eco-friendly products made from pineapple leaves. Fashion that's good for you and the planet.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="stat-card">
              <div className="text-4xl mb-2">♻️</div>
              <div className="text-2xl font-bold text-white mb-1">Zero Waste</div>
              <div className="text-sm text-gray-400">Production</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl mb-2">🌱</div>
              <div className="text-2xl font-bold text-white mb-1">100% Natural</div>
              <div className="text-sm text-gray-400">Materials</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl mb-2">🤝</div>
              <div className="text-2xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-gray-400">Farmers</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl mb-2">🇺🇳</div>
              <div className="text-2xl font-bold text-white mb-1">UN Partner</div>
              <div className="text-sm text-gray-400">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <Link 
                href={`/product/${product.id}`} 
                key={product.id}
                className="product-card-link"
              >
                <div className="product-card group">
                  {/* Product Badge */}
                  <div className="product-badge">
                    <span className="badge-text">🌿 Eco-Friendly</span>
                  </div>

                  {/* Product Image */}
                  <div className="product-image-container">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={400}
                      height={400}
                      className="product-listing-image"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="product-shine"></div>
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <div className="product-category">
                      <span className="category-badge">{product.category}</span>
                    </div>
                    
                    <h3 className="product-title">{product.name}</h3>
                    
                    <p className="product-description">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="product-features">
                      <div className="feature-tag">♻️ Sustainable</div>
                      <div className="feature-tag">🌱 Vegan</div>
                      <div className="feature-tag">💚 Eco-Friendly</div>
                    </div>

                    {/* Price & CTA */}
                    <div className="product-footer">
                      <div className="product-price">
                        <span className="price-amount">৳{product.price}</span>
                        <span className="price-label">/ item</span>
                      </div>
                      <button className="product-cta">
                        <span>View Details</span>
                        <span className="cta-arrow">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 pt-4">
        <div className="container">
          <div className="cta-box">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🍍</div>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Join the Green Revolution
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Every purchase supports local farmers and helps reduce agricultural waste. Together, we're creating a sustainable future.
              </p>
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

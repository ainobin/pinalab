import ProductGallery from '@/components/ProductGallery';
import ProductDescription from '@/components/ProductDescription';
import ProductReviews from '@/components/ProductReviews';
import RelatedProducts from '@/components/RelatedProducts';
import { products } from '@/data/products';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));
  
  if (!product) {
    return {
      title: 'Product Not Found | PinaLab',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} | PinaLab`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <main className="product-page">
        <div className="container">
          <div className="error-message">
            <h1>Product Not Found</h1>
            <p>Sorry, the product you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-[#0a0b0f] via-[#121318] to-[#0a0b0f]">
      {/* Product Hero Section */}
      <section className="product-detail-section">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">→</span>
            <a href="/products">Products</a>
            <span className="separator">→</span>
            <span className="current">{product.name}</span>
          </div>

          <div className="product-detail-grid">
            <ProductGallery product={product} />
            <ProductDescription product={product} />
          </div>
        </div>
      </section>

      <ProductReviews product={product} />
      <RelatedProducts currentProductId={product.id} />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

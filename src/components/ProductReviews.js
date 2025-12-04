// Product Reviews Component
export default function ProductReviews({ product }) {
  const reviews = [
    {
      id: 1,
      author: "John D.",
      rating: 5,
      title: "Excellent Product!",
      text: "Absolutely love this product. Great quality and fast delivery.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      title: "Good Value",
      text: "Very satisfied with the purchase. Meets expectations perfectly.",
      date: "1 month ago",
    },
    {
      id: 3,
      author: "Mike R.",
      rating: 5,
      title: "Highly Recommended",
      text: "Best purchase I've made in a long time. Perfect condition.",
      date: "2 months ago",
    },
  ];

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      
      <div className="reviews-summary">
        <div className="average-rating">
          <span className="average-stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
          <span className="average-value">{product.rating} out of 5</span>
          <span className="total-reviews">Based on {product.reviews} reviews</span>
        </div>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.author}</h4>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-rating">
                <span className="stars">{'⭐'.repeat(review.rating)}</span>
              </div>
            </div>
            <h5 className="review-title">{review.title}</h5>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

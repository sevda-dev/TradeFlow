import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ name, description, image, category, slug }) {
  return (
    <article className="product-card">
      <Link to={`/products/${slug}`} className="product-card-link">

        <div className="product-image">
          <img src={image} alt={name} />
        </div>

        <div className="product-content">
          <span className="product-category">{category}</span>

          <h3>{name}</h3>

          <p>{description}</p>

        </div>

      </Link>

      <div className="product-content">
        <Link to={`/products/${slug}`} className="product-button">
          View Product
        </Link>

        <a href="/quote" className="product-button">
          Request a Quote
        </a>
      </div>
    </article>
  )
}

export default ProductCard
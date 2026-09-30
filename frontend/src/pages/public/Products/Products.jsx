import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  return (
    <main className="products-page">

      {/* Hero */}
      <section className="products-hero">
        <div className="products-container">

          <span className="products-label">
            OUR PRODUCTS
          </span>

          <h1>
            Premium Iranian Pistachios
          </h1>

          <p>
            Explore our selection of Iranian pistachio varieties
            available for international buyers.
          </p>

        </div>
      </section>


      {/* Products */}
      <section className="products-section">
        <div className="products-container">

          <div className="products-grid">

            {/* Akbari */}
            <article className="product-item">

              <Link
                to="/products/akbari"
                className="product-link"
              >
                <div className="product-image">
                  <img
                    src="/images/pistachio-akbari.jpg"
                    alt="Akbari Pistachio"
                  />
                </div>

                <div className="product-content">

                  <span className="product-category">
                    Pistachio
                  </span>

                  <h2>Akbari</h2>

                  <p>
                    A premium long pistachio variety known for
                    its distinctive shape and commercial value.
                  </p>

                </div>
              </Link>

              <a
                href="/quote"
                className="product-button"
              >
                Request a Quote
              </a>

            </article>


            {/* Ahmad Aghaei */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-ahmad-aghaei.jpg"
                  alt="Ahmad Aghaei Pistachio"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  Pistachio
                </span>

                <h2>Ahmad Aghaei</h2>

                <p>
                  A popular Iranian pistachio variety with
                  an attractive appearance and wide demand.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  Request a Quote
                </a>

              </div>

            </article>


            {/* Fandoghi */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-fandoghi.jpg"
                  alt="Fandoghi Pistachio"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  Pistachio
                </span>

                <h2>Fandoghi</h2>

                <p>
                  A round pistachio variety widely traded
                  in international markets.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  Request a Quote
                </a>

              </div>

            </article>


            {/* Kalleh Ghouchi */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-kalleh-ghouchi.jpg"
                  alt="Kalleh Ghouchi Pistachio"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  Pistachio
                </span>

                <h2>Kalleh Ghouchi</h2>

                <p>
                  A large-sized Iranian pistachio variety
                  known for its distinctive shape.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  Request a Quote
                </a>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="products-cta">
        <div className="products-container">

          <h2>
            Looking for a Specific Pistachio?
          </h2>

          <p>
            Tell us your required variety, quantity,
            packaging, and destination.
          </p>

          <a
            href="/quote"
            className="product-button"
          >
            Request a Quote
          </a>

        </div>
      </section>

    </main>
  )
}

export default Products
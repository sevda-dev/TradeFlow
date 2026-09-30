import './ProductDetail.css'

function ProductDetail() {
  return (
    <main className="product-detail-page">

      {/* Hero */}
      <section className="product-detail-hero">
        <div className="product-detail-container">

          <span className="product-detail-label">
            PREMIUM IRANIAN PISTACHIO
          </span>

          <h1>
            Akbari Pistachio
          </h1>

          <p>
            Premium Iranian Akbari pistachios for international buyers.
          </p>

        </div>
      </section>


      {/* Product Information */}
      <section className="product-detail-section">
        <div className="product-detail-container product-detail-grid">

          {/* Image */}
          <div className="product-detail-image">
            <img
              src="/images/pistachio-akbari.jpg"
              alt="Akbari Pistachio"
            />
          </div>


          {/* Information */}
          <div className="product-detail-content">

            <span className="product-category">
              Pistachio
            </span>

            <h2>
              Akbari Pistachio
            </h2>

            <p className="product-description">
              Akbari is one of the premium Iranian pistachio
              varieties, known for its long shape and distinctive
              appearance. It is suitable for international trade
              and different commercial requirements.
            </p>


            {/* Specifications */}
            <div className="product-specifications">

              <div className="specification">
                <span>Origin</span>
                <strong>Iran</strong>
              </div>

              <div className="specification">
                <span>Variety</span>
                <strong>Akbari</strong>
              </div>

              <div className="specification">
                <span>Product Type</span>
                <strong>Pistachio</strong>
              </div>

              <div className="specification">
                <span>Packaging</span>
                <strong>Custom Packaging</strong>
              </div>

            </div>


            {/* Button */}
            <a
              href="/quote"
              className="detail-quote-button"
            >
              Request a Quote
            </a>

          </div>

        </div>
      </section>


      {/* Product Details */}
      <section className="product-info-section">
        <div className="product-detail-container">

          <div className="product-info-heading">

            <span className="product-detail-label">
              PRODUCT INFORMATION
            </span>

            <h2>
              Quality & Trade Specifications
            </h2>

            <p>
              We can provide product specifications based on
              your market requirements and order details.
            </p>

          </div>


          <div className="product-info-grid">

            <div className="info-card">
              <h3>Quality</h3>

              <p>
                Product quality can be selected according to
                customer requirements and destination market.
              </p>
            </div>


            <div className="info-card">
              <h3>Packaging</h3>

              <p>
                Packaging options can be discussed based on
                quantity, destination, and customer requirements.
              </p>
            </div>


            <div className="info-card">
              <h3>Quantity</h3>

              <p>
                We coordinate quantities according to the
                requirements of each commercial order.
              </p>
            </div>


            <div className="info-card">
              <h3>Delivery</h3>

              <p>
                Shipment and delivery arrangements can be
                coordinated for international destinations.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="product-detail-cta">
        <div className="product-detail-container">

          <h2>
            Interested in Akbari Pistachios?
          </h2>

          <p>
            Send us your required quantity, destination,
            packaging, and other requirements.
          </p>

          <a
            href="/quote"
            className="detail-quote-button"
          >
            Request a Quote
          </a>

        </div>
      </section>

    </main>
  )
}

export default ProductDetail
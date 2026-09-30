import './Home.css'

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <span className="hero-label">
            PREMIUM PISTACHIOS FROM IRAN
          </span>

          <h1>
            Premium Iranian Pistachios
            <br />
            for Global Markets
          </h1>

          <p>
            We source and supply high-quality Iranian pistachios
            for international buyers, with reliable trade and
            logistics coordination.
          </p>

          <div className="hero-actions">
            <a href="/products" className="hero-button primary">
              Explore Products
            </a>

            <a href="/quote" className="hero-button secondary">
              Request a Quote
            </a>
          </div>

        </div>
      </section>


      {/* Products Section */}
      <section className="products-section">
        <div className="section-container">

          <div className="section-heading">
            <span>OUR PRODUCTS</span>

            <h2>
              Iranian Pistachio Varieties
            </h2>

            <p>
              Explore our selection of Iranian pistachios
              available for international trade.
            </p>
          </div>

          <div className="pistachio-products">

            <div className="pistachio-product">
              <h3>Akbari</h3>
              <p>
                A premium long pistachio variety known for
                its distinctive shape and quality.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Ahmad Aghaei</h3>
              <p>
                A popular Iranian pistachio variety suitable
                for different international markets.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Fandoghi</h3>
              <p>
                A round pistachio variety widely traded
                in international markets.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Kalleh Ghouchi</h3>
              <p>
                A large-sized pistachio variety valued for
                its distinctive appearance and taste.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Why Us Section */}
      <section className="why-section">
        <div className="section-container">

          <div className="section-heading">
            <span>WHY CHOOSE US</span>

            <h2>
              Reliable Pistachio Trade
            </h2>

            <p>
              From sourcing to international delivery,
              we coordinate the trading process with our partners.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <h3>Quality Sourcing</h3>

              <p>
                We work with suppliers to source pistachios
                according to customer requirements.
              </p>
            </div>

            <div className="why-card">
              <h3>International Trade</h3>

              <p>
                We support commercial transactions with
                buyers in international markets.
              </p>
            </div>

            <div className="why-card">
              <h3>Logistics Coordination</h3>

              <p>
                We coordinate transportation and shipment
                processes from origin to destination.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* How It Works */}
      <section className="how-section">
        <div className="section-container">

          <div className="section-heading">
            <span>HOW IT WORKS</span>

            <h2>
              From Request to Delivery
            </h2>

            <p>
              A simple and transparent process for international buyers.
            </p>
          </div>

          <div className="steps-grid">

            <div className="step">
              <span>01</span>

              <h3>
                Choose Your Product
              </h3>

              <p>
                Explore our pistachio varieties and specifications.
              </p>
            </div>

            <div className="step">
              <span>02</span>

              <h3>
                Request a Quote
              </h3>

              <p>
                Send us your quantity, destination and requirements.
              </p>
            </div>

            <div className="step">
              <span>03</span>

              <h3>
                We Source & Prepare
              </h3>

              <p>
                We coordinate sourcing, pricing and trade arrangements.
              </p>
            </div>

            <div className="step">
              <span>04</span>

              <h3>
                Shipment & Delivery
              </h3>

              <p>
                We coordinate logistics and shipment to the destination.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">

          <h2>
            Looking for Iranian Pistachios?
          </h2>

          <p>
            Tell us your requirements and our team
            will prepare a quotation for you.
          </p>

          <a href="/quote" className="hero-button primary">
            Request a Quote
          </a>

        </div>
      </section>

    </main>
  )
}

export default Home
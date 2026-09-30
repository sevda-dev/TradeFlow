import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-container">

          <span className="about-label">
            ABOUT TRADEFLOW
          </span>

          <h1>
            Connecting Iranian Pistachios
            <br />
            with Global Markets
          </h1>

          <p>
            We are a trading company focused on sourcing
            and supplying Iranian pistachios for international buyers.
          </p>

        </div>
      </section>


      {/* About Company */}
      <section className="about-section">
        <div className="about-container about-grid">

          <div className="about-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              A Reliable Partner in Pistachio Trade
            </h2>

            <p>
              TradeFlow is a trading company focused on the
              international supply of Iranian pistachios.
              We work with suppliers and international buyers
              to coordinate the commercial process from sourcing
              to delivery.
            </p>

            <p>
              Our goal is to make international pistachio trade
              more transparent, organized, and reliable for our
              business partners.
            </p>

          </div>

          <div className="about-highlight">

            <div className="highlight-item">
              <span>01</span>
              <h3>Quality Products</h3>
              <p>
                Pistachios sourced according to customer
                specifications and market requirements.
              </p>
            </div>

            <div className="highlight-item">
              <span>02</span>
              <h3>Global Trade</h3>
              <p>
                Connecting Iranian suppliers with buyers
                in international markets.
              </p>
            </div>

            <div className="highlight-item">
              <span>03</span>
              <h3>Trade Coordination</h3>
              <p>
                Coordinating sourcing, documentation,
                logistics, and delivery.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* What We Do */}
      <section className="what-we-do-section">
        <div className="about-container">

          <div className="section-heading">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              From Sourcing to Delivery
            </h2>

            <p>
              We coordinate the key stages of an international
              pistachio trade transaction.
            </p>

          </div>


          <div className="about-services">

            <div className="about-service">
              <span>01</span>

              <h3>
                Product Sourcing
              </h3>

              <p>
                Finding suitable pistachio products based on
                variety, quality, quantity, and customer requirements.
              </p>
            </div>


            <div className="about-service">
              <span>02</span>

              <h3>
                Commercial Coordination
              </h3>

              <p>
                Coordinating quotations, commercial terms,
                documentation, and trade agreements.
              </p>
            </div>


            <div className="about-service">
              <span>03</span>

              <h3>
                Logistics
              </h3>

              <p>
                Coordinating transportation, shipping,
                customs, and delivery processes.
              </p>
            </div>


            <div className="about-service">
              <span>04</span>

              <h3>
                International Delivery
              </h3>

              <p>
                Supporting the shipment process until the
                products reach their destination.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="mission-section">
        <div className="about-container">

          <div className="mission-content">

            <span className="section-label">
              OUR APPROACH
            </span>

            <h2>
              Built Around Reliable Trade
            </h2>

            <p>
              We believe successful international trade requires
              clear communication, reliable sourcing, accurate
              documentation, and coordinated logistics.
            </p>

            <p>
              We aim to build long-term relationships with
              suppliers and international buyers by understanding
              their requirements and coordinating each stage of
              the trading process.
            </p>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">

          <h2>
            Looking for Iranian Pistachios?
          </h2>

          <p>
            Tell us about your requirements and let's discuss
            your next order.
          </p>

          <a
            href="/quote"
            className="about-cta-button"
          >
            Request a Quote
          </a>

        </div>
      </section>

    </main>
  )
}

export default About
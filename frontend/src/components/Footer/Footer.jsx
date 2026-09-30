import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>TradeFlow</h2>
          <p>
            Global trading and logistics solutions for businesses worldwide.
          </p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <a href="/trading">Trading</a>
          <a href="/logistics">Logistics</a>
          <a href="/quote">Request a Quote</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@tradeflow.com</p>
          <p>Phone: +1 000 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TradeFlow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
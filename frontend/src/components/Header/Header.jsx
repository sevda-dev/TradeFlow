import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="/" className="logo">
          TradeFlow
        </a>

        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="/login" className="login-link">
            Login
          </a>

          <a href="/quote" className="quote-button">
            Request a Quote
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header
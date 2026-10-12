import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="/" className="logo">
          TradeFlow
        </a>

        <nav className="main-nav">
          <a href="/">خانه</a>
          <a href="/products">محصولات</a>
          <a href="/about">درباره ما</a>
          <a href="/contact">تماس با ما</a>
        </nav>

        <div className="header-actions">
          <a href="/login" className="login-link">
            ورود
          </a>

          <a href="/quote" className="quote-button">
            درخواست قیمت
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header
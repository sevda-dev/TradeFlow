import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>TradeFlow</h2>
          <p>
            راهکارهای تجارت و لجستیک جهانی برای کسب‌وکارها در سراسر دنیا.
          </p>
        </div>

        <div className="footer-links">
          <h3>شرکت</h3>
          <a href="/about">درباره ما</a>
          <a href="/products">محصولات</a>
          <a href="/contact">تماس با ما</a>
        </div>

        <div className="footer-links">
          <h3>خدمات</h3>
          <a href="/trading">تجارت</a>
          <a href="/logistics">لجستیک</a>
          <a href="/quote">درخواست قیمت</a>
        </div>

        <div className="footer-contact">
          <h3>تماس</h3>
          <p>ایمیل: info@tradeflow.com</p>
          <p>تلفن: +1 000 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TradeFlow. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  )
}

export default Footer
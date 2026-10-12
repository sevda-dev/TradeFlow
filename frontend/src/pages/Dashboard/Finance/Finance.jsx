import { Link } from 'react-router-dom'
import './Finance.css'

function Finance() {
  return (
    <main className="finance-page">

      <header className="finance-header">
        <div>
          <span className="finance-label">
            امور مالی
          </span>

          <h1>امور مالی</h1>

          <p>
            مدیریت درخواست‌های پرداخت، پرداخت‌ها، تراکنش‌ها و تسویه‌حساب‌ها.
          </p>
        </div>
      </header>

      <section className="finance-summary">

        <div className="finance-card">
          <span>درخواست‌های در انتظار</span>
          <strong>12</strong>
          <small>در انتظار تأیید</small>
        </div>

        <div className="finance-card">
          <span>پرداخت‌های در انتظار</span>
          <strong>$86,500</strong>
          <small>پرداخت‌های آماده پردازش</small>
        </div>

        <div className="finance-card">
          <span>مجموع تراکنش‌ها</span>
          <strong>148</strong>
          <small>این ماه</small>
        </div>

        <div className="finance-card">
          <span>تسویه‌حساب‌های در انتظار</span>
          <strong>8</strong>
          <small>پرونده‌های در انتظار تسویه</small>
        </div>

      </section>

      <section className="finance-section">

        <div className="section-header">
          <h2>عملیات مالی</h2>

          <p>
            مدیریت چرخه کامل مالی پرونده‌های تجاری.
          </p>
        </div>

        <div className="finance-grid">

          <Link
            to="/dashboard/finance/payment-requests"
            className="finance-operation-card"
          >
            <span className="operation-number">01</span>

            <h3>درخواست‌های پرداخت</h3>

            <p>
              ایجاد، بررسی و تأیید درخواست‌های پرداخت.
            </p>

            <span className="operation-link">
              مشاهده درخواست‌های پرداخت ←
            </span>
          </Link>

          <Link
            to="/dashboard/finance/payments"
            className="finance-operation-card"
          >
            <span className="operation-number">02</span>

            <h3>پرداخت‌ها</h3>

            <p>
              مدیریت پرداخت‌های انجام‌شده و وضعیت پرداخت‌ها.
            </p>

            <span className="operation-link">
              مشاهده پرداخت‌ها ←
            </span>
          </Link>

          <Link
            to="/dashboard/finance/transactions"
            className="finance-operation-card"
          >
            <span className="operation-number">03</span>

            <h3>تراکنش‌ها</h3>

            <p>
              مشاهده تراکنش‌های مالی و جابه‌جایی‌های مالی.
            </p>

            <span className="operation-link">
              مشاهده تراکنش‌ها ←
            </span>
          </Link>

          <Link
            to="/dashboard/finance/settlements"
            className="finance-operation-card"
          >
            <span className="operation-number">04</span>

            <h3>تسویه‌حساب‌ها</h3>

            <p>
              مدیریت تسویه‌حساب‌های نهایی و مانده حساب‌ها.
            </p>

            <span className="operation-link">
              مشاهده تسویه‌حساب‌ها ←
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Finance
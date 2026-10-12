import { Link } from 'react-router-dom'
import './Customs.css'

function Customs() {
  return (
    <main className="customs-page">

      <header className="customs-header">
        <div>
          <span className="customs-label">
            گمرک
          </span>

          <h1>گمرک</h1>

          <p>
            مدیریت اظهارنامه‌های گمرکی، ترخیص کالا و عملیات گمرکی.
          </p>
        </div>
      </header>

      <section className="customs-summary">

        <div className="customs-card">
          <span>اظهارنامه‌های فعال</span>
          <strong>14</strong>
          <small>در حال انجام</small>
        </div>

        <div className="customs-card">
          <span>در انتظار ترخیص</span>
          <strong>7</strong>
          <small>در انتظار ترخیص</small>
        </div>

        <div className="customs-card">
          <span>محموله‌های ترخیص‌شده</span>
          <strong>28</strong>
          <small>با موفقیت ترخیص‌شده</small>
        </div>

        <div className="customs-card">
          <span>هزینه‌های گمرکی</span>
          <strong>$42,500</strong>
          <small>پرونده‌های جاری</small>
        </div>

      </section>

      <section className="customs-section">

        <div className="section-header">
          <div>
            <h2>عملیات گمرکی</h2>

            <p>
              مدیریت اظهارنامه‌ها و عملیات ترخیص گمرکی.
            </p>
          </div>
        </div>

        <div className="customs-grid">

          <Link
            to="/dashboard/customs/declarations"
            className="customs-operation-card"
          >
            <span className="operation-number">
              01
            </span>

            <h3>اظهارنامه‌ها</h3>

            <p>
              ایجاد و مدیریت اظهارنامه‌های گمرکی برای محموله‌ها.
            </p>

            <span className="operation-link">
              مشاهده اظهارنامه‌ها ←
            </span>
          </Link>

          <Link
            to="/dashboard/customs/clearance"
            className="customs-operation-card"
          >
            <span className="operation-number">
              02
            </span>

            <h3>ترخیص</h3>

            <p>
              پیگیری ترخیص گمرکی، کارگزاران، هزینه‌ها و وضعیت ترخیص.
            </p>

            <span className="operation-link">
              مشاهده ترخیص‌ها ←
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Customs
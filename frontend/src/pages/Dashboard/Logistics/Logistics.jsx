import { Link } from 'react-router-dom'
import './Logistics.css'

function Logistics() {
  return (
    <main className="logistics-page">

      <header className="logistics-header">
        <div>
          <span className="logistics-label">
            لجستیک
          </span>

          <h1>لجستیک</h1>

          <p>
            مدیریت محموله‌ها، رانندگان، وسایل نقلیه و عملیات باسکول.
          </p>
        </div>
      </header>

      <section className="logistics-summary">

        <div className="logistics-card">
          <span>محموله‌های فعال</span>
          <strong>12</strong>
          <small>در حال حمل</small>
        </div>

        <div className="logistics-card">
          <span>رانندگان در دسترس</span>
          <strong>18</strong>
          <small>آماده اختصاص</small>
        </div>

        <div className="logistics-card">
          <span>وسایل نقلیه</span>
          <strong>24</strong>
          <small>وسایل نقلیه ثبت‌شده</small>
        </div>

        <div className="logistics-card">
          <span>باسکول‌های در انتظار</span>
          <strong>5</strong>
          <small>در انتظار وزن‌کشی</small>
        </div>

      </section>

      <section className="logistics-section">

        <div className="section-header">
          <div>
            <h2>عملیات لجستیک</h2>
            <p>
              مدیریت عملیات روزانه حمل‌ونقل.
            </p>
          </div>
        </div>

        <div className="logistics-grid">

          <Link
            to="/dashboard/logistics/shipments"
            className="logistics-operation-card"
          >
            <span className="operation-number">01</span>
            <h3>محموله‌ها</h3>
            <p>
              مشاهده و مدیریت تمام محموله‌ها و وضعیت حمل‌ونقل آن‌ها.
            </p>
            <span className="operation-link">
              مشاهده محموله‌ها ←
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/drivers"
            className="logistics-operation-card"
          >
            <span className="operation-number">02</span>
            <h3>رانندگان</h3>
            <p>
              مدیریت رانندگان، مأموریت‌ها و اطلاعات رانندگان.
            </p>
            <span className="operation-link">
              مشاهده رانندگان ←
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/vehicles"
            className="logistics-operation-card"
          >
            <span className="operation-number">03</span>
            <h3>وسایل نقلیه</h3>
            <p>
              مدیریت وسایل نقلیه، پلاک‌ها و اطلاعات حمل‌ونقل.
            </p>
            <span className="operation-link">
              مشاهده وسایل نقلیه ←
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/weighbridge"
            className="logistics-operation-card"
          >
            <span className="operation-number">04</span>
            <h3>باسکول</h3>
            <p>
              ثبت وزن ناخالص، وزن خالی و وزن خالص محموله‌ها.
            </p>
            <span className="operation-link">
              مشاهده باسکول ←
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Logistics
import { Link } from 'react-router-dom'
import './Manager.css'

function Manager() {
  return (
    <main className="manager-page">

      <header className="manager-header">
        <div>
          <span className="manager-label">
            مدیریت
          </span>

          <h1>داشبورد مدیر</h1>

          <p>
            نظارت بر عملکرد کسب‌وکار، عملیات تجاری و فعالیت‌های مالی.
          </p>
        </div>

        <div className="manager-user">
          <span>خوش آمدید</span>
          <strong>مدیر</strong>
        </div>
      </header>


      {/* شاخص‌های اصلی */}

      <section className="manager-summary">

        <article className="manager-card">
          <span>پرونده‌های تجاری فعال</span>
          <strong>24</strong>
          <small>8 فروش · 16 خرید</small>
        </article>

        <article className="manager-card">
          <span>ارزش کل تجارت</span>
          <strong>$2.48M</strong>
          <small>پرونده‌های فعال فعلی</small>
        </article>

        <article className="manager-card">
          <span>سود برآوردی</span>
          <strong>$320K</strong>
          <small>پرونده‌های تجاری فعلی</small>
        </article>

        <article className="manager-card">
          <span>پرداخت‌های در انتظار</span>
          <strong>$170K</strong>
          <small>5 درخواست پرداخت</small>
        </article>

      </section>


      {/* عملکرد تجاری */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>عملکرد تجاری</h2>

            <p>
              عملکرد تجاری فعلی.
            </p>
          </div>
        </div>

        <div className="performance-grid">

          <div className="performance-item">
            <span>ارزش فروش</span>
            <strong>$1.24M</strong>
          </div>

          <div className="performance-item">
            <span>ارزش خرید</span>
            <strong>$920K</strong>
          </div>

          <div className="performance-item">
            <span>سود ناخالص</span>
            <strong>$320K</strong>
          </div>

          <div className="performance-item">
            <span>مجموع تناژ</span>
            <strong>685 تن</strong>
          </div>

        </div>

      </section>


      {/* پرونده‌های تجاری */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>پرونده‌های تجاری</h2>

            <p>
              نمای کلی وضعیت پرونده‌های فعلی.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            مشاهده همه
          </Link>
        </div>

        <div className="case-status-grid">

          <div className="case-status-card">
            <span>در انتظار</span>
            <strong>5</strong>
          </div>

          <div className="case-status-card">
            <span>در حال انجام</span>
            <strong>24</strong>
          </div>

          <div className="case-status-card">
            <span>تکمیل‌شده</span>
            <strong>13</strong>
          </div>

        </div>

      </section>


      {/* فعالیت واحدها */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>فعالیت واحدها</h2>

            <p>
              فعالیت فعلی در بخش‌های مختلف شرکت.
            </p>
          </div>
        </div>

        <div className="department-grid">

          <Link
            to="/dashboard/sales"
            className="department-card"
          >
            <span>فروش</span>
            <strong>12</strong>
            <small>درخواست‌های در انتظار</small>
          </Link>

          <Link
            to="/dashboard/procurement"
            className="department-card"
          >
            <span>تأمین</span>
            <strong>9</strong>
            <small>خریدهای فعال</small>
          </Link>

          <Link
            to="/dashboard/logistics"
            className="department-card"
          >
            <span>لجستیک</span>
            <strong>8</strong>
            <small>محموله‌های فعال</small>
          </Link>

          <Link
            to="/dashboard/customs"
            className="department-card"
          >
            <span>گمرک</span>
            <strong>6</strong>
            <small>اظهارنامه‌های باز</small>
          </Link>

          <Link
            to="/dashboard/finance"
            className="department-card"
          >
            <span>امور مالی</span>
            <strong>5</strong>
            <small>پرداخت‌های در انتظار</small>
          </Link>

        </div>

      </section>


      {/* پرونده‌های اخیر */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>پرونده‌های تجاری اخیر</h2>

            <p>
              پرونده‌هایی که اخیراً ایجاد یا به‌روزرسانی شده‌اند.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            مشاهده همه
          </Link>
        </div>

        <div className="manager-table-wrapper">

          <table className="manager-table">

            <thead>
              <tr>
                <th>پرونده</th>
                <th>مشتری</th>
                <th>محصول</th>
                <th>مقدار</th>
                <th>ارزش</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 تن</td>
                <td>$340,000</td>
                <td>
                  <span className="manager-status active">
                    در حال انجام
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 تن</td>
                <td>$160,000</td>
                <td>
                  <span className="manager-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 تن</td>
                <td>$207,000</td>
                <td>
                  <span className="manager-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* هشدارها */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>هشدارهای مدیریتی</h2>

            <p>
              مواردی که نیاز به توجه دارند.
            </p>
          </div>
        </div>

        <div className="manager-alerts">

          <div className="manager-alert warning">
            <strong>5 درخواست پرداخت</strong>
            <span>
              در انتظار تأیید مالی هستند.
            </span>
          </div>

          <div className="manager-alert warning">
            <strong>3 محموله</strong>
            <span>
              در حال حاضر در انتظار ترخیص گمرکی هستند.
            </span>
          </div>

          <div className="manager-alert info">
            <strong>2 پرونده تجاری</strong>
            <span>
              از زمان مورد انتظار برای پردازش عبور کرده‌اند.
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Manager
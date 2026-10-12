import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <main className="dashboard-page">

      <header className="dashboard-header">
        <div>
          <span className="dashboard-label">
            داشبورد
          </span>

          <h1>داشبورد</h1>

          <p>
            نمای کلی از عملیات تجاری، لجستیک، گمرک و امور مالی شما.
          </p>
        </div>

        <div className="dashboard-user">
          <span>خوش آمدید</span>
          <strong>مدیر</strong>
        </div>
      </header>


      {/* آمار اصلی */}

      <section className="dashboard-summary">

        <article className="dashboard-card">
          <span>پرونده‌های تجاری فعال</span>
          <strong>24</strong>
          <small>+4 در این ماه</small>
        </article>

        <article className="dashboard-card">
          <span>پیش‌فاکتورهای در انتظار</span>
          <strong>12</strong>
          <small>5 مورد در انتظار بررسی</small>
        </article>

        <article className="dashboard-card">
          <span>محموله‌های فعال</span>
          <strong>8</strong>
          <small>3 مورد در حال حمل</small>
        </article>

        <article className="dashboard-card">
          <span>پرداخت‌های در انتظار</span>
          <strong>5</strong>
          <small>$170K باقی‌مانده</small>
        </article>

      </section>


      {/* نمای کلی تجارت */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>نمای کلی تجارت</h2>

            <p>
              وضعیت فعلی عملیات تجاری.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            مشاهده همه پرونده‌ها
          </Link>

        </div>

        <div className="trade-overview-grid">

          <div className="trade-stat">
            <span>مجموع پرونده‌های تجاری</span>
            <strong>42</strong>
          </div>

          <div className="trade-stat">
            <span>در حال انجام</span>
            <strong>24</strong>
          </div>

          <div className="trade-stat">
            <span>تکمیل‌شده</span>
            <strong>13</strong>
          </div>

          <div className="trade-stat">
            <span>در انتظار</span>
            <strong>5</strong>
          </div>

        </div>

      </section>


      {/* پرونده‌های اخیر */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

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

        <div className="dashboard-table-wrapper">

          <table className="dashboard-table">

            <thead>
              <tr>
                <th>پرونده</th>
                <th>مشتری</th>
                <th>محصول</th>
                <th>مقدار</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 تن</td>

                <td>
                  <span className="dashboard-status active">
                    در حال انجام
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 تن</td>

                <td>
                  <span className="dashboard-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 تن</td>

                <td>
                  <span className="dashboard-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-004</td>
                <td>Global Nuts GmbH</td>
                <td>Kalleh Ghouchi</td>
                <td>25 تن</td>

                <td>
                  <span className="dashboard-status active">
                    در حال انجام
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* عملیات */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>عملیات</h2>

            <p>
              فعالیت‌های فعلی در بخش‌های مختلف.
            </p>
          </div>

        </div>

        <div className="operations-grid">

          <Link
            to="/dashboard/sales"
            className="operation-card"
          >
            <span>فروش</span>
            <strong>12</strong>
            <small>درخواست‌های در انتظار</small>
          </Link>

          <Link
            to="/dashboard/procurement"
            className="operation-card"
          >
            <span>تأمین</span>
            <strong>9</strong>
            <small>خریدهای فعال</small>
          </Link>

          <Link
            to="/dashboard/logistics"
            className="operation-card"
          >
            <span>لجستیک</span>
            <strong>8</strong>
            <small>محموله‌های فعال</small>
          </Link>

          <Link
            to="/dashboard/customs"
            className="operation-card"
          >
            <span>گمرک</span>
            <strong>6</strong>
            <small>اظهارنامه‌های باز</small>
          </Link>

          <Link
            to="/dashboard/finance"
            className="operation-card"
          >
            <span>امور مالی</span>
            <strong>5</strong>
            <small>پرداخت‌های در انتظار</small>
          </Link>

        </div>

      </section>


      {/* دسترسی سریع */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>دسترسی سریع</h2>

            <p>
              اقدامات پرکاربرد.
            </p>
          </div>

        </div>

        <div className="quick-actions">

          <Link
            to="/dashboard/trade-cases/new"
            className="quick-action"
          >
            پرونده تجاری جدید
          </Link>

          <Link
            to="/dashboard/sales"
            className="quick-action"
          >
            فروش جدید
          </Link>

          <Link
            to="/dashboard/procurement"
            className="quick-action"
          >
            خرید جدید
          </Link>

          <Link
            to="/dashboard/logistics"
            className="quick-action"
          >
            مشاهده محموله‌ها
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Dashboard
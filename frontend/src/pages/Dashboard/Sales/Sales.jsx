import { Link } from 'react-router-dom'
import './Sales.css'

function Sales() {
  return (
    <main className="sales-page">

      <header className="sales-header">
        <div>
          <span className="sales-label">
            فروش
          </span>

          <h1>فروش</h1>

          <p>
            مدیریت مشتریان، درخواست‌های فروش، پیش‌فاکتورها و سفارش‌های فروش.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases/new"
          className="sales-button"
        >
          فروش جدید
        </Link>
      </header>


      {/* کارت‌های خلاصه */}

      <section className="sales-summary">

        <article className="sales-card">
          <span>پیش‌فاکتورهای در انتظار</span>
          <strong>12</strong>
        </article>

        <article className="sales-card">
          <span>فروش‌های فعال</span>
          <strong>18</strong>
        </article>

        <article className="sales-card">
          <span>مجموع ارزش فروش</span>
          <strong>$1.24M</strong>
        </article>

        <article className="sales-card">
          <span>در انتظار تأیید</span>
          <strong>5</strong>
        </article>

      </section>


      {/* درخواست‌های فروش */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>درخواست‌های فروش</h2>

            <p>
              درخواست‌های مشتریان و پیش‌فاکتورها.
            </p>
          </div>

          <span>12 درخواست</span>
        </div>

        <div className="sales-table-wrapper">

          <table className="sales-table">

            <thead>
              <tr>
                <th>درخواست</th>
                <th>مشتری</th>
                <th>محصول</th>
                <th>مقدار</th>
                <th>مقصد</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 تن</td>
                <td>Dubai, UAE</td>
                <td>
                  <span className="sales-status pending">
                    در انتظار
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-001">
                    مشاهده
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 تن</td>
                <td>Hamburg, Germany</td>
                <td>
                  <span className="sales-status quotation">
                    پیش‌فاکتور
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-002">
                    مشاهده
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 تن</td>
                <td>Dubai, UAE</td>
                <td>
                  <span className="sales-status approved">
                    تأییدشده
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-003">
                    مشاهده
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-004</td>
                <td>Global Nuts GmbH</td>
                <td>Kalleh Ghouchi</td>
                <td>25 تن</td>
                <td>Berlin, Germany</td>
                <td>
                  <span className="sales-status active">
                    در حال انجام
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-004">
                    مشاهده
                  </Link>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* فرآیند فروش */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>فرآیند فروش</h2>

            <p>
              روند فعلی فروش.
            </p>
          </div>
        </div>

        <div className="sales-pipeline">

          <div className="pipeline-step">
            <span>01</span>
            <strong>درخواست</strong>
            <small>12</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>02</span>
            <strong>پیش‌فاکتور</strong>
            <small>8</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>03</span>
            <strong>مذاکره</strong>
            <small>5</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>04</span>
            <strong>تأییدشده</strong>
            <small>4</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>05</span>
            <strong>پرونده تجاری</strong>
            <small>3</small>
          </div>

        </div>

      </section>


      {/* فروش‌های اخیر */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>فروش‌های اخیر</h2>

            <p>
              پرونده‌های فروش که اخیراً ایجاد شده‌اند.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            مشاهده همه
          </Link>
        </div>

        <div className="recent-sales">

          <div className="recent-sale">
            <div>
              <strong>TR-001</strong>
              <span>Global Foods Ltd. · Akbari · 40 تن</span>
            </div>

            <span className="sales-status active">
              در حال انجام
            </span>
          </div>

          <div className="recent-sale">
            <div>
              <strong>TR-002</strong>
              <span>Euro Nuts GmbH · Ahmad Aghaei · 20 تن</span>
            </div>

            <span className="sales-status quotation">
              پیش‌فاکتور
            </span>
          </div>

          <div className="recent-sale">
            <div>
              <strong>TR-004</strong>
              <span>Global Nuts GmbH · Kalleh Ghouchi · 25 تن</span>
            </div>

            <span className="sales-status approved">
              تأییدشده
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Sales
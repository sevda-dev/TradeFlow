import { Link } from 'react-router-dom'
import './Procurement.css'

function Procurement() {
  return (
    <main className="procurement-page">

      <header className="procurement-header">
        <div>
          <span className="procurement-label">
            تأمین
          </span>

          <h1>تأمین</h1>

          <p>
            مدیریت تأمین‌کنندگان، درخواست‌های خرید، تأمین کالا و سفارش‌های خرید.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases/new"
          className="procurement-button"
        >
          خرید جدید
        </Link>
      </header>


      {/* کارت‌های خلاصه */}

      <section className="procurement-summary">

        <article className="procurement-card">
          <span>درخواست‌های خرید</span>
          <strong>15</strong>
        </article>

        <article className="procurement-card">
          <span>خریدهای فعال</span>
          <strong>9</strong>
        </article>

        <article className="procurement-card">
          <span>مجموع خرید</span>
          <strong>$680K</strong>
        </article>

        <article className="procurement-card">
          <span>در انتظار تأیید</span>
          <strong>4</strong>
        </article>

      </section>


      {/* درخواست‌های خرید */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>درخواست‌های خرید</h2>

            <p>
              درخواست‌های فعلی تأمین و خرید.
            </p>
          </div>

          <span>15 درخواست</span>
        </div>

        <div className="procurement-table-wrapper">

          <table className="procurement-table">

            <thead>
              <tr>
                <th>درخواست</th>
                <th>تأمین‌کننده</th>
                <th>محصول</th>
                <th>مقدار</th>
                <th>قیمت</th>
                <th>تحویل</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PR-001</td>
                <td>Kerman Pistachio Co.</td>
                <td>Akbari</td>
                <td>40 تن</td>
                <td>$7,800 / تن</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status sourcing">
                    در حال تأمین
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-001">
                    مشاهده
                  </Link>
                </td>
              </tr>

              <tr>
                <td>PR-002</td>
                <td>Rafsanjan Agro</td>
                <td>Ahmad Aghaei</td>
                <td>20 تن</td>
                <td>$7,500 / تن</td>
                <td>Rafsanjan</td>
                <td>
                  <span className="procurement-status pending">
                    در انتظار
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-002">
                    مشاهده
                  </Link>
                </td>
              </tr>

              <tr>
                <td>PR-003</td>
                <td>Iran Nuts Trading</td>
                <td>Fandoghi</td>
                <td>30 تن</td>
                <td>$6,900 / تن</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status approved">
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
                <td>PR-004</td>
                <td>Kerman Agro</td>
                <td>Kalleh Ghouchi</td>
                <td>25 تن</td>
                <td>$7,200 / تن</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status active">
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


      {/* تأمین‌کنندگان */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>تأمین‌کنندگان</h2>

            <p>
              تأمین‌کنندگان اصلی و فعالیت فعلی آن‌ها.
            </p>
          </div>

          <span>24 تأمین‌کننده</span>
        </div>

        <div className="suppliers-grid">

          <article className="supplier-card">
            <div>
              <strong>Kerman Pistachio Co.</strong>
              <span>Kerman, Iran</span>
            </div>

            <div className="supplier-info">
              <span>سفارش‌های فعال</span>
              <strong>3</strong>
            </div>
          </article>

          <article className="supplier-card">
            <div>
              <strong>Rafsanjan Agro</strong>
              <span>Rafsanjan, Iran</span>
            </div>

            <div className="supplier-info">
              <span>سفارش‌های فعال</span>
              <strong>2</strong>
            </div>
          </article>

          <article className="supplier-card">
            <div>
              <strong>Iran Nuts Trading</strong>
              <span>Kerman, Iran</span>
            </div>

            <div className="supplier-info">
              <span>سفارش‌های فعال</span>
              <strong>4</strong>
            </div>
          </article>

        </div>

      </section>


      {/* فرآیند تأمین */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>فرآیند تأمین</h2>

            <p>
              روند فعلی خرید.
            </p>
          </div>
        </div>

        <div className="procurement-pipeline">

          <div className="pipeline-step">
            <span>01</span>
            <strong>درخواست</strong>
            <small>15</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>02</span>
            <strong>تأمین</strong>
            <small>10</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>03</span>
            <strong>پیشنهاد تأمین‌کننده</strong>
            <small>7</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>04</span>
            <strong>تأییدشده</strong>
            <small>5</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>05</span>
            <strong>سفارش خرید</strong>
            <small>4</small>
          </div>

        </div>

      </section>


      {/* خریدهای اخیر */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>خریدهای اخیر</h2>

            <p>
              پرونده‌های تأمین که اخیراً ایجاد شده‌اند.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            مشاهده همه
          </Link>
        </div>

        <div className="recent-purchases">

          <div className="recent-purchase">
            <div>
              <strong>TR-001</strong>
              <span>
                Kerman Pistachio Co. · Akbari · 40 تن
              </span>
            </div>

            <span className="procurement-status sourcing">
              در حال تأمین
            </span>
          </div>

          <div className="recent-purchase">
            <div>
              <strong>TR-002</strong>
              <span>
                Rafsanjan Agro · Ahmad Aghaei · 20 تن
              </span>
            </div>

            <span className="procurement-status pending">
              در انتظار
            </span>
          </div>

          <div className="recent-purchase">
            <div>
              <strong>TR-003</strong>
              <span>
                Iran Nuts Trading · Fandoghi · 30 تن
              </span>
            </div>

            <span className="procurement-status approved">
              تأییدشده
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Procurement
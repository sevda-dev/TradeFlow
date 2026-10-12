import { Link, useParams } from 'react-router-dom'
import './CaseDetails.css'

function CaseDetails() {
  const { caseId } = useParams()

  return (
    <main className="case-details-page">

      <header className="case-details-header">
        <div>
          <span className="case-details-label">
            پرونده تجاری
          </span>

          <h1>{caseId}</h1>

          <p>
            مشاهده و مدیریت جزئیات این پرونده تجاری.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases"
          className="back-button"
        >
          بازگشت به پرونده‌ها
        </Link>
      </header>


      {/* خلاصه پرونده */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>خلاصه پرونده</h2>
            <p>
              اطلاعات اصلی این پرونده تجاری.
            </p>
          </div>

          <span className="case-status active">
            در حال انجام
          </span>
        </div>

        <div className="info-grid">

          <div className="info-item">
            <span>نوع پرونده</span>
            <strong>فروش</strong>
          </div>

          <div className="info-item">
            <span>محصول</span>
            <strong>Akbari</strong>
          </div>

          <div className="info-item">
            <span>مشتری</span>
            <strong>Global Foods Ltd.</strong>
          </div>

          <div className="info-item">
            <span>تأمین‌کننده</span>
            <strong>Kerman Pistachio Co.</strong>
          </div>

          <div className="info-item">
            <span>مقدار کل</span>
            <strong>40 تن</strong>
          </div>

          <div className="info-item">
            <span>مقصد</span>
            <strong>Dubai, UAE</strong>
          </div>

        </div>

      </section>


      {/* اطلاعات تجاری */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>اطلاعات تجاری</h2>
            <p>
              اطلاعات قیمت‌گذاری و پرداخت.
            </p>
          </div>
        </div>

        <div className="info-grid">

          <div className="info-item">
            <span>قیمت</span>
            <strong>$8,500 / تن</strong>
          </div>

          <div className="info-item">
            <span>ارز</span>
            <strong>USD</strong>
          </div>

          <div className="info-item">
            <span>شرایط پرداخت</span>
            <strong>پرداخت جزئی</strong>
          </div>

          <div className="info-item">
            <span>بسته‌بندی</span>
            <strong>کیسه‌های 25 کیلویی</strong>
          </div>

        </div>

      </section>


      {/* محموله‌ها */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>محموله‌ها</h2>
            <p>
              محموله‌های فیزیکی مرتبط با این پرونده تجاری.
            </p>
          </div>

          <span className="section-count">
            2 محموله
          </span>
        </div>

        <div className="table-wrapper">

          <table className="case-table">

            <thead>
              <tr>
                <th>محموله</th>
                <th>مقدار</th>
                <th>راننده</th>
                <th>وسیله نقلیه</th>
                <th>مقصد</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SH-001</td>
                <td>20 تن</td>
                <td>Ali Rezaei</td>
                <td>12A-34567</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status active">
                    در حال حمل
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-002</td>
                <td>20 تن</td>
                <td>Hossein Karimi</td>
                <td>45B-67890</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* اطلاعات مالی */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>اطلاعات مالی</h2>
            <p>
              پرداخت‌ها و وضعیت مالی این پرونده.
            </p>
          </div>
        </div>

        <div className="financial-grid">

          <div className="financial-card">
            <span>ارزش کل</span>
            <strong>$340,000</strong>
          </div>

          <div className="financial-card">
            <span>پرداخت‌شده</span>
            <strong>$170,000</strong>
          </div>

          <div className="financial-card">
            <span>مانده</span>
            <strong>$170,000</strong>
          </div>

        </div>

      </section>


      {/* اسناد */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>اسناد</h2>
            <p>
              اسناد مرتبط با این پرونده تجاری.
            </p>
          </div>
        </div>

        <div className="documents-list">

          <div className="document-item">
            <div>
              <strong>فاکتور تجاری</strong>
              <span>Invoice_TR-001.pdf</span>
            </div>

            <a href="#">
              مشاهده
            </a>
          </div>

          <div className="document-item">
            <div>
              <strong>لیست بسته‌بندی</strong>
              <span>PackingList_TR-001.pdf</span>
            </div>

            <a href="#">
              مشاهده
            </a>
          </div>

          <div className="document-item">
            <div>
              <strong>بارنامه</strong>
              <span>BL_TR-001.pdf</span>
            </div>

            <a href="#">
              مشاهده
            </a>
          </div>

        </div>

      </section>


      {/* یادداشت‌ها */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>یادداشت‌ها</h2>
          </div>
        </div>

        <p className="case-notes">
          محموله در حال حاضر برای صادرات آماده می‌شود.
          انتظار می‌رود فرآیند ترخیص گمرکی پس از بارگیری آغاز شود.
        </p>

      </section>


      <div className="case-actions">

        <Link
          to="/dashboard/trade-cases"
          className="secondary-button"
        >
          بازگشت به پرونده‌ها
        </Link>

        <button className="primary-button">
          ویرایش پرونده
        </button>

      </div>

    </main>
  )
}

export default CaseDetails
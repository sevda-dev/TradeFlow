import './PaymentRequests.css'

function PaymentRequests() {
  return (
    <main className="payment-requests-page">

      <header className="payment-requests-header">
        <div>
          <span className="payment-requests-label">
            امور مالی
          </span>

          <h1>درخواست‌های پرداخت</h1>

          <p>
            ایجاد و مدیریت درخواست‌های پرداخت مالی.
          </p>
        </div>

        <button className="payment-requests-button">
          درخواست پرداخت جدید
        </button>
      </header>

      <section className="payment-requests-summary">

        <div className="payment-request-card">
          <span>مجموع درخواست‌ها</span>
          <strong>42</strong>
        </div>

        <div className="payment-request-card">
          <span>در انتظار تأیید</span>
          <strong>12</strong>
        </div>

        <div className="payment-request-card">
          <span>تأییدشده</span>
          <strong>20</strong>
        </div>

        <div className="payment-request-card">
          <span>ردشده</span>
          <strong>10</strong>
        </div>

      </section>

      <section className="payment-requests-panel">

        <div className="payment-requests-panel-header">

          <div>
            <h2>درخواست‌های پرداخت</h2>

            <p>
              درخواست‌های پرداخت را پیش از انجام پرداخت بررسی کنید.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">همه وضعیت‌ها</option>
            <option value="pending">در انتظار</option>
            <option value="approved">تأییدشده</option>
            <option value="rejected">ردشده</option>
          </select>

        </div>

        <div className="payment-requests-table-wrapper">

          <table className="payment-requests-table">

            <thead>
              <tr>
                <th>درخواست</th>
                <th>پرونده تجاری</th>
                <th>هدف</th>
                <th>مبلغ</th>
                <th>درخواست‌کننده</th>
                <th>تاریخ</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PR-001</td>
                <td>TR-001</td>
                <td>پرداخت به تأمین‌کننده</td>
                <td>$80,000</td>
                <td>تأمین</td>
                <td>20 سپتامبر 2026</td>
                <td>
                  <span className="payment-request-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>PR-002</td>
                <td>TR-002</td>
                <td>پرداخت حمل و نقل</td>
                <td>$12,500</td>
                <td>لجستیک</td>
                <td>19 سپتامبر 2026</td>
                <td>
                  <span className="payment-request-status approved">
                    تأییدشده
                  </span>
                </td>
              </tr>

              <tr>
                <td>PR-003</td>
                <td>TR-003</td>
                <td>هزینه گمرکی</td>
                <td>$4,500</td>
                <td>گمرک</td>
                <td>18 سپتامبر 2026</td>
                <td>
                  <span className="payment-request-status approved">
                    تأییدشده
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default PaymentRequests
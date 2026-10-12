import './Payments.css'

function Payments() {
  return (
    <main className="payments-page">

      <header className="payments-header">
        <div>
          <span className="payments-label">
            امور مالی
          </span>

          <h1>پرداخت‌ها</h1>

          <p>
            مدیریت پرداخت‌های انجام‌شده برای عملیات تجاری.
          </p>
        </div>

        <button className="payments-button">
          ثبت پرداخت
        </button>
      </header>

      <section className="payments-summary">

        <div className="payment-card">
          <span>مجموع پرداخت‌ها</span>
          <strong>86</strong>
        </div>

        <div className="payment-card">
          <span>پرداخت‌شده در این ماه</span>
          <strong>$245,000</strong>
        </div>

        <div className="payment-card">
          <span>در انتظار</span>
          <strong>$86,500</strong>
        </div>

        <div className="payment-card">
          <span>ناموفق</span>
          <strong>3</strong>
        </div>

      </section>

      <section className="payments-panel">

        <div className="payments-panel-header">
          <h2>سوابق پرداخت</h2>

          <input
            type="text"
            placeholder="جستجوی پرداخت‌ها..."
          />
        </div>

        <div className="payments-table-wrapper">

          <table className="payments-table">

            <thead>
              <tr>
                <th>پرداخت</th>
                <th>پرونده تجاری</th>
                <th>درخواست پرداخت</th>
                <th>دریافت‌کننده</th>
                <th>مبلغ</th>
                <th>روش پرداخت</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PAY-001</td>
                <td>TR-001</td>
                <td>PR-001</td>
                <td>Kerman Pistachio Co.</td>
                <td>$80,000</td>
                <td>انتقال بانکی</td>
                <td>
                  <span className="payment-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>PAY-002</td>
                <td>TR-002</td>
                <td>PR-002</td>
                <td>Global Freight Co.</td>
                <td>$12,500</td>
                <td>انتقال بانکی</td>
                <td>
                  <span className="payment-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>PAY-003</td>
                <td>TR-003</td>
                <td>PR-003</td>
                <td>Customs Services</td>
                <td>$4,500</td>
                <td>انتقال بانکی</td>
                <td>
                  <span className="payment-status completed">
                    تکمیل‌شده
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

export default Payments
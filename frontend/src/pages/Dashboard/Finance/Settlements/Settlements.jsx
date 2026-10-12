import './Settlements.css'

function Settlements() {
  return (
    <main className="settlements-page">

      <header className="settlements-header">
        <div>
          <span className="settlements-label">
            امور مالی
          </span>

          <h1>تسویه‌حساب‌ها</h1>

          <p>
            مدیریت تسویه‌حساب‌های نهایی مالی پرونده‌های تجاری.
          </p>
        </div>

        <button className="settlements-button">
          تسویه‌حساب جدید
        </button>
      </header>

      <section className="settlements-summary">

        <div className="settlement-summary-card">
          <span>مجموع تسویه‌حساب‌ها</span>
          <strong>28</strong>
        </div>

        <div className="settlement-summary-card">
          <span>در انتظار</span>
          <strong>8</strong>
        </div>

        <div className="settlement-summary-card">
          <span>تکمیل‌شده</span>
          <strong>20</strong>
        </div>

        <div className="settlement-summary-card">
          <span>مانده حساب</span>
          <strong>$170,000</strong>
        </div>

      </section>

      <section className="settlements-panel">

        <div className="settlements-panel-header">

          <div>
            <h2>تسویه‌حساب پرونده‌های تجاری</h2>

            <p>
              مانده نهایی و وضعیت تسویه‌حساب‌ها را بررسی کنید.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">همه وضعیت‌ها</option>
            <option value="pending">در انتظار</option>
            <option value="completed">تکمیل‌شده</option>
          </select>

        </div>

        <div className="settlements-table-wrapper">

          <table className="settlements-table">

            <thead>
              <tr>
                <th>تسویه‌حساب</th>
                <th>پرونده تجاری</th>
                <th>ارزش کل</th>
                <th>پرداخت‌شده</th>
                <th>مانده</th>
                <th>تاریخ تسویه</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>ST-001</td>
                <td>TR-001</td>
                <td>$340,000</td>
                <td>$170,000</td>
                <td>$170,000</td>
                <td>—</td>
                <td>
                  <span className="settlement-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-002</td>
                <td>TR-002</td>
                <td>$170,000</td>
                <td>$170,000</td>
                <td>$0</td>
                <td>18 سپتامبر 2026</td>
                <td>
                  <span className="settlement-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-003</td>
                <td>TR-003</td>
                <td>$255,000</td>
                <td>$255,000</td>
                <td>$0</td>
                <td>15 سپتامبر 2026</td>
                <td>
                  <span className="settlement-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-004</td>
                <td>TR-004</td>
                <td>$212,500</td>
                <td>$100,000</td>
                <td>$112,500</td>
                <td>—</td>
                <td>
                  <span className="settlement-status pending">
                    در انتظار
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

export default Settlements
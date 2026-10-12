import './Transactions.css'

function Transactions() {
  return (
    <main className="transactions-page">

      <header className="transactions-header">
        <div>
          <span className="transactions-label">
            امور مالی
          </span>

          <h1>تراکنش‌ها</h1>

          <p>
            مشاهده تمام تراکنش‌های مالی و جابه‌جایی‌های مالی.
          </p>
        </div>
      </header>

      <section className="transactions-summary">

        <div className="transaction-summary-card">
          <span>مجموع تراکنش‌ها</span>
          <strong>148</strong>
        </div>

        <div className="transaction-summary-card">
          <span>مجموع درآمد</span>
          <strong>$520,000</strong>
        </div>

        <div className="transaction-summary-card">
          <span>مجموع هزینه‌ها</span>
          <strong>$315,000</strong>
        </div>

        <div className="transaction-summary-card">
          <span>موجودی خالص</span>
          <strong>$205,000</strong>
        </div>

      </section>

      <section className="transactions-panel">

        <div className="transactions-panel-header">

          <div>
            <h2>تاریخچه تراکنش‌ها</h2>

            <p>
              جابه‌جایی‌های مالی ثبت‌شده در سیستم.
            </p>
          </div>

          <div className="transactions-filters">

            <input
              type="text"
              placeholder="جستجوی تراکنش‌ها..."
            />

            <select defaultValue="all">
              <option value="all">همه انواع</option>
              <option value="income">درآمد</option>
              <option value="expense">هزینه</option>
            </select>

          </div>

        </div>

        <div className="transactions-table-wrapper">

          <table className="transactions-table">

            <thead>
              <tr>
                <th>تراکنش</th>
                <th>پرونده تجاری</th>
                <th>توضیحات</th>
                <th>نوع</th>
                <th>مبلغ</th>
                <th>تاریخ</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TX-001</td>
                <td>TR-001</td>
                <td>پرداخت مشتری</td>
                <td>
                  <span className="transaction-type income">
                    درآمد
                  </span>
                </td>
                <td>$170,000</td>
                <td>20 سپتامبر 2026</td>
              </tr>

              <tr>
                <td>TX-002</td>
                <td>TR-001</td>
                <td>پرداخت به تأمین‌کننده</td>
                <td>
                  <span className="transaction-type expense">
                    هزینه
                  </span>
                </td>
                <td>$80,000</td>
                <td>20 سپتامبر 2026</td>
              </tr>

              <tr>
                <td>TX-003</td>
                <td>TR-002</td>
                <td>هزینه حمل و نقل</td>
                <td>
                  <span className="transaction-type expense">
                    هزینه
                  </span>
                </td>
                <td>$12,500</td>
                <td>19 سپتامبر 2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default Transactions
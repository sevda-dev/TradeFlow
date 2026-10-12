import './Weighbridge.css'

function Weighbridge() {
  return (
    <main className="weighbridge-page">

      <header className="weighbridge-header">
        <div>
          <span className="weighbridge-label">
            لجستیک
          </span>

          <h1>باسکول</h1>

          <p>
            ثبت و مدیریت اطلاعات وزن محموله‌ها.
          </p>
        </div>

        <button className="weighbridge-button">
          ثبت رکورد جدید باسکول
        </button>
      </header>

      <section className="weighbridge-summary">

        <div className="weight-summary-card">
          <span>مجموع رکوردها</span>
          <strong>42</strong>
        </div>

        <div className="weight-summary-card">
          <span>در انتظار</span>
          <strong>5</strong>
        </div>

        <div className="weight-summary-card">
          <span>تکمیل‌شده امروز</span>
          <strong>8</strong>
        </div>

        <div className="weight-summary-card">
          <span>مجموع وزن خالص</span>
          <strong>186 تن</strong>
        </div>

      </section>

      <section className="weighbridge-panel">

        <div className="weighbridge-panel-header">
          <h2>سوابق باسکول</h2>

          <input
            type="text"
            placeholder="جستجوی محموله..."
          />
        </div>

        <div className="weighbridge-table-wrapper">

          <table className="weighbridge-table">

            <thead>
              <tr>
                <th>رکورد</th>
                <th>محموله</th>
                <th>وسیله نقلیه</th>
                <th>وزن ناخالص</th>
                <th>وزن خالی</th>
                <th>وزن خالص</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>WB-001</td>
                <td>SH-001</td>
                <td>12A-34567</td>
                <td>42,000 کیلوگرم</td>
                <td>2,000 کیلوگرم</td>
                <td>40,000 کیلوگرم</td>
                <td>
                  <span className="weight-status completed">
                    تکمیل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>WB-002</td>
                <td>SH-002</td>
                <td>45B-67890</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>
                  <span className="weight-status pending">
                    در انتظار
                  </span>
                </td>
              </tr>

              <tr>
                <td>WB-003</td>
                <td>SH-003</td>
                <td>21C-11223</td>
                <td>31,500 کیلوگرم</td>
                <td>1,500 کیلوگرم</td>
                <td>30,000 کیلوگرم</td>
                <td>
                  <span className="weight-status completed">
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

export default Weighbridge
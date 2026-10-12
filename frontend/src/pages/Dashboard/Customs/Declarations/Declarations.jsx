import './Declarations.css'

function Declarations() {
  return (
    <main className="declarations-page">

      <header className="declarations-header">
        <div>
          <span className="declarations-label">
            گمرک
          </span>

          <h1>اظهارنامه‌ها</h1>

          <p>
            ایجاد و مدیریت اظهارنامه‌های گمرکی برای محموله‌های تجاری.
          </p>
        </div>

        <button className="declarations-button">
          اظهارنامه جدید
        </button>
      </header>

      <section className="declarations-summary">

        <div className="declaration-summary-card">
          <span>مجموع اظهارنامه‌ها</span>
          <strong>35</strong>
        </div>

        <div className="declaration-summary-card">
          <span>پیش‌نویس</span>
          <strong>6</strong>
        </div>

        <div className="declaration-summary-card">
          <span>ارسال‌شده</span>
          <strong>14</strong>
        </div>

        <div className="declaration-summary-card">
          <span>ترخیص‌شده</span>
          <strong>15</strong>
        </div>

      </section>

      <section className="declarations-panel">

        <div className="declarations-panel-header">

          <div>
            <h2>اظهارنامه‌های گمرکی</h2>

            <p>
              تمام اظهارنامه‌های گمرکی مرتبط با پرونده‌های تجاری را پیگیری کنید.
            </p>
          </div>

          <div className="declarations-filters">

            <input
              type="text"
              placeholder="جستجوی اظهارنامه‌ها..."
            />

            <select defaultValue="all">
              <option value="all">همه وضعیت‌ها</option>
              <option value="draft">پیش‌نویس</option>
              <option value="submitted">ارسال‌شده</option>
              <option value="cleared">ترخیص‌شده</option>
            </select>

          </div>

        </div>

        <div className="declarations-table-wrapper">

          <table className="declarations-table">

            <thead>
              <tr>
                <th>اظهارنامه</th>
                <th>پرونده تجاری</th>
                <th>محموله</th>
                <th>محصول</th>
                <th>مقصد</th>
                <th>کارگزار</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CD-001</td>
                <td>TR-001</td>
                <td>SH-001</td>
                <td>Akbari</td>
                <td>Dubai</td>
                <td>Global Customs Co.</td>
                <td>
                  <span className="declaration-status submitted">
                    ارسال‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-002</td>
                <td>TR-002</td>
                <td>SH-003</td>
                <td>Ahmad Aghaei</td>
                <td>Abu Dhabi</td>
                <td>Persian Customs Services</td>
                <td>
                  <span className="declaration-status draft">
                    پیش‌نویس
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-003</td>
                <td>TR-003</td>
                <td>SH-004</td>
                <td>Fandoghi</td>
                <td>Dubai</td>
                <td>Global Customs Co.</td>
                <td>
                  <span className="declaration-status cleared">
                    ترخیص‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-004</td>
                <td>TR-004</td>
                <td>SH-005</td>
                <td>Kalleh Ghouchi</td>
                <td>Dubai</td>
                <td>Iran Customs Group</td>
                <td>
                  <span className="declaration-status submitted">
                    ارسال‌شده
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

export default Declarations
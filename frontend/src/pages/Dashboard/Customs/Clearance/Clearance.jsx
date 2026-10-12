import './Clearance.css'

function Clearance() {
  return (
    <main className="clearance-page">

      <header className="clearance-header">
        <div>
          <span className="clearance-label">
            گمرک
          </span>

          <h1>ترخیص کالا</h1>

          <p>
            پیگیری عملیات ترخیص کالا، هزینه‌ها و کارگزاران گمرکی.
          </p>
        </div>

        <button className="clearance-button">
          ترخیص جدید
        </button>
      </header>

      <section className="clearance-summary">

        <div className="clearance-summary-card">
          <span>ترخیص‌های فعال</span>
          <strong>9</strong>
        </div>

        <div className="clearance-summary-card">
          <span>در انتظار مدارک</span>
          <strong>4</strong>
        </div>

        <div className="clearance-summary-card">
          <span>ترخیص‌شده</span>
          <strong>23</strong>
        </div>

        <div className="clearance-summary-card">
          <span>مجموع هزینه‌ها</span>
          <strong>$42,500</strong>
        </div>

      </section>

      <section className="clearance-panel">

        <div className="clearance-panel-header">

          <div>
            <h2>عملیات ترخیص</h2>

            <p>
              روند ترخیص گمرکی محموله‌ها را پیگیری کنید.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">همه وضعیت‌ها</option>
            <option value="pending">در انتظار</option>
            <option value="documents">در انتظار مدارک</option>
            <option value="cleared">ترخیص‌شده</option>
          </select>

        </div>

        <div className="clearance-table-wrapper">

          <table className="clearance-table">

            <thead>
              <tr>
                <th>ترخیص</th>
                <th>اظهارنامه</th>
                <th>محموله</th>
                <th>کارگزار</th>
                <th>هزینه گمرکی</th>
                <th>کمیسیون</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CL-001</td>
                <td>CD-001</td>
                <td>SH-001</td>
                <td>Global Customs Co.</td>
                <td>$3,200</td>
                <td>$800</td>
                <td>
                  <span className="clearance-status active">
                    در حال انجام
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-002</td>
                <td>CD-002</td>
                <td>SH-003</td>
                <td>Persian Customs Services</td>
                <td>$2,100</td>
                <td>$550</td>
                <td>
                  <span className="clearance-status documents">
                    مدارک
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-003</td>
                <td>CD-003</td>
                <td>SH-004</td>
                <td>Global Customs Co.</td>
                <td>$4,500</td>
                <td>$1,000</td>
                <td>
                  <span className="clearance-status cleared">
                    ترخیص‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-004</td>
                <td>CD-004</td>
                <td>SH-005</td>
                <td>Iran Customs Group</td>
                <td>$2,800</td>
                <td>$700</td>
                <td>
                  <span className="clearance-status active">
                    در حال انجام
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

export default Clearance
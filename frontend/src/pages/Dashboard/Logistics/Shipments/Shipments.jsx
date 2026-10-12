import './Shipments.css'

function Shipments() {
  return (
    <main className="shipments-page">

      <header className="shipments-header">
        <div>
          <span className="shipments-label">
            لجستیک
          </span>

          <h1>محموله‌ها</h1>

          <p>
            مشاهده و مدیریت محموله‌های فیزیکی مرتبط با پرونده‌های تجاری.
          </p>
        </div>

        <button className="shipments-button">
          محموله جدید
        </button>
      </header>

      <section className="shipments-summary">

        <div className="shipment-summary-card">
          <span>مجموع محموله‌ها</span>
          <strong>36</strong>
        </div>

        <div className="shipment-summary-card">
          <span>در حال حمل</span>
          <strong>12</strong>
        </div>

        <div className="shipment-summary-card">
          <span>در انتظار</span>
          <strong>8</strong>
        </div>

        <div className="shipment-summary-card">
          <span>تحویل‌شده</span>
          <strong>16</strong>
        </div>

      </section>

      <section className="shipments-panel">

        <div className="shipments-panel-header">
          <h2>همه محموله‌ها</h2>

          <div className="shipments-filters">
            <input
              type="text"
              placeholder="جستجوی محموله‌ها..."
            />

            <select defaultValue="all">
              <option value="all">همه وضعیت‌ها</option>
              <option value="pending">در انتظار</option>
              <option value="transit">در حال حمل</option>
              <option value="delivered">تحویل‌شده</option>
            </select>
          </div>
        </div>

        <div className="shipments-table-wrapper">

          <table className="shipments-table">

            <thead>
              <tr>
                <th>محموله</th>
                <th>پرونده تجاری</th>
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
                <td>TR-001</td>
                <td>20 تن</td>
                <td>Ali Rezaei</td>
                <td>12A-34567</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status transit">
                    در حال حمل
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-002</td>
                <td>TR-001</td>
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

              <tr>
                <td>SH-003</td>
                <td>TR-002</td>
                <td>18 تن</td>
                <td>Reza Ahmadi</td>
                <td>21C-11223</td>
                <td>Abu Dhabi</td>
                <td>
                  <span className="shipment-status delivered">
                    تحویل‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-004</td>
                <td>TR-003</td>
                <td>15 تن</td>
                <td>Mehdi Karimi</td>
                <td>32D-44556</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status transit">
                    در حال حمل
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

export default Shipments
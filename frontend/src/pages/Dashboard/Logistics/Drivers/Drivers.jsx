import './Drivers.css'

function Drivers() {
  return (
    <main className="drivers-page">

      <header className="drivers-header">
        <div>
          <span className="drivers-label">
            لجستیک
          </span>

          <h1>رانندگان</h1>

          <p>
            مدیریت رانندگان و مأموریت‌های حمل‌ونقل آن‌ها.
          </p>
        </div>

        <button className="drivers-button">
          افزودن راننده
        </button>
      </header>

      <section className="drivers-summary">

        <div className="driver-summary-card">
          <span>مجموع رانندگان</span>
          <strong>32</strong>
        </div>

        <div className="driver-summary-card">
          <span>در دسترس</span>
          <strong>18</strong>
        </div>

        <div className="driver-summary-card">
          <span>در حال حمل</span>
          <strong>12</strong>
        </div>

        <div className="driver-summary-card">
          <span>غیرفعال</span>
          <strong>2</strong>
        </div>

      </section>

      <section className="drivers-panel">

        <div className="drivers-panel-header">
          <h2>فهرست رانندگان</h2>

          <input
            type="text"
            placeholder="جستجوی رانندگان..."
          />
        </div>

        <div className="drivers-table-wrapper">

          <table className="drivers-table">

            <thead>
              <tr>
                <th>راننده</th>
                <th>تلفن</th>
                <th>گواهینامه</th>
                <th>وسیله نقلیه</th>
                <th>محموله فعلی</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ali Rezaei</td>
                <td>+98 912 000 0000</td>
                <td>DL-10021</td>
                <td>12A-34567</td>
                <td>SH-001</td>
                <td>
                  <span className="driver-status active">
                    در حال حمل
                  </span>
                </td>
              </tr>

              <tr>
                <td>Hossein Karimi</td>
                <td>+98 913 000 0000</td>
                <td>DL-10022</td>
                <td>45B-67890</td>
                <td>SH-002</td>
                <td>
                  <span className="driver-status pending">
                    اختصاص داده‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>Reza Ahmadi</td>
                <td>+98 914 000 0000</td>
                <td>DL-10023</td>
                <td>21C-11223</td>
                <td>—</td>
                <td>
                  <span className="driver-status available">
                    در دسترس
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

export default Drivers
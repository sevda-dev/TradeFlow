import './Vehicles.css'

function Vehicles() {
  return (
    <main className="vehicles-page">

      <header className="vehicles-header">
        <div>
          <span className="vehicles-label">
            لجستیک
          </span>

          <h1>وسایل نقلیه</h1>

          <p>
            مدیریت وسایل نقلیه ثبت‌شده و اطلاعات حمل‌ونقل.
          </p>
        </div>

        <button className="vehicles-button">
          افزودن وسیله نقلیه
        </button>
      </header>

      <section className="vehicles-summary">

        <div className="vehicle-summary-card">
          <span>مجموع وسایل نقلیه</span>
          <strong>24</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>در دسترس</span>
          <strong>9</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>در حال حمل</span>
          <strong>12</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>در تعمیر و نگهداری</span>
          <strong>3</strong>
        </div>

      </section>

      <section className="vehicles-panel">

        <div className="vehicles-panel-header">
          <h2>فهرست وسایل نقلیه</h2>

          <input
            type="text"
            placeholder="جستجوی وسایل نقلیه..."
          />
        </div>

        <div className="vehicles-table-wrapper">

          <table className="vehicles-table">

            <thead>
              <tr>
                <th>پلاک</th>
                <th>نوع وسیله نقلیه</th>
                <th>راننده</th>
                <th>ظرفیت</th>
                <th>محموله فعلی</th>
                <th>وضعیت</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>12A-34567</td>
                <td>کامیون</td>
                <td>Ali Rezaei</td>
                <td>25 تن</td>
                <td>SH-001</td>
                <td>
                  <span className="vehicle-status active">
                    در حال حمل
                  </span>
                </td>
              </tr>

              <tr>
                <td>45B-67890</td>
                <td>کامیون</td>
                <td>Hossein Karimi</td>
                <td>25 تن</td>
                <td>SH-002</td>
                <td>
                  <span className="vehicle-status assigned">
                    اختصاص داده‌شده
                  </span>
                </td>
              </tr>

              <tr>
                <td>21C-11223</td>
                <td>تریلر</td>
                <td>—</td>
                <td>30 تن</td>
                <td>—</td>
                <td>
                  <span className="vehicle-status available">
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

export default Vehicles
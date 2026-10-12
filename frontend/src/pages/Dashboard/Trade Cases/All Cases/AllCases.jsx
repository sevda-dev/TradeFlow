import './AllCases.css'

function AllCases() {
  return (
    <main className="all-cases-page">

      <header className="all-cases-header">

        <div>
          <span className="all-cases-label">
            پرونده‌های تجاری
          </span>

          <h1>
            همه پرونده‌ها
          </h1>

          <p>
            مشاهده و مدیریت تمام پرونده‌های تجاری.
          </p>
        </div>

        <a
          href="/dashboard/trade-cases/new"
          className="all-cases-button"
        >
          پرونده جدید
        </a>

      </header>


      <section className="cases-filters">

        <input
          type="text"
          placeholder="جستجوی پرونده‌ها..."
        />

        <select defaultValue="all">
          <option value="all">همه وضعیت‌ها</option>
          <option value="pending">در انتظار</option>
          <option value="active">در حال انجام</option>
          <option value="completed">تکمیل‌شده</option>
        </select>

        <select defaultValue="all">
          <option value="all">همه انواع</option>
          <option value="sale">فروش</option>
          <option value="purchase">خرید</option>
        </select>

      </section>


      <section className="cases-panel">

        <div className="cases-panel-header">
          <h2>
            پرونده‌های تجاری
          </h2>

          <span>
            24 پرونده
          </span>
        </div>


        <div className="cases-table-wrapper">

          <table className="cases-table">

            <thead>
              <tr>
                <th>پرونده</th>
                <th>نوع</th>
                <th>مشتری</th>
                <th>تأمین‌کننده</th>
                <th>محصول</th>
                <th>مقدار</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>


            <tbody>

              <tr>
                <td>TR-001</td>
                <td>فروش</td>
                <td>Global Foods Ltd.</td>
                <td>Kerman Pistachio Co.</td>
                <td>Akbari</td>
                <td>40 تن</td>
                <td>
                  <span className="case-status active">
                    در حال انجام
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-001">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-002</td>
                <td>فروش</td>
                <td>Euro Nuts GmbH</td>
                <td>Rafsanjan Agro</td>
                <td>Ahmad Aghaei</td>
                <td>20 تن</td>
                <td>
                  <span className="case-status pending">
                    در انتظار
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-002">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-003</td>
                <td>خرید</td>
                <td>Dubai Foods LLC</td>
                <td>Iran Nuts Trading</td>
                <td>Fandoghi</td>
                <td>30 تن</td>
                <td>
                  <span className="case-status completed">
                    تکمیل‌شده
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-003">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-004</td>
                <td>فروش</td>
                <td>Global Nuts GmbH</td>
                <td>Kerman Agro</td>
                <td>Kalleh Ghouchi</td>
                <td>25 تن</td>
                <td>
                  <span className="case-status active">
                    در حال انجام
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-004">
                    مشاهده
                  </a>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default AllCases
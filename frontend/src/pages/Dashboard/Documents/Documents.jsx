import { Link } from 'react-router-dom'
import './Documents.css'

function Documents() {
  return (
    <main className="documents-page">

      <header className="documents-header">
        <div>
          <span className="documents-label">
            اسناد
          </span>

          <h1>اسناد</h1>

          <p>
            مدیریت و پیگیری اسناد مرتبط با پرونده‌های تجاری،
            محموله‌ها، گمرک و امور مالی.
          </p>
        </div>

        <button className="upload-document-button">
          بارگذاری سند
        </button>
      </header>


      {/* خلاصه */}

      <section className="documents-summary">

        <div className="summary-card">
          <span>مجموع اسناد</span>
          <strong>128</strong>
          <small>تمام اسناد بارگذاری‌شده</small>
        </div>

        <div className="summary-card">
          <span>در انتظار بررسی</span>
          <strong>14</strong>
          <small>در انتظار تأیید</small>
        </div>

        <div className="summary-card">
          <span>تأییدشده</span>
          <strong>96</strong>
          <small>اسناد تأییدشده</small>
        </div>

        <div className="summary-card">
          <span>اسناد ناقص</span>
          <strong>8</strong>
          <small>اسناد موردنیاز</small>
        </div>

      </section>


      {/* فیلترها */}

      <section className="documents-filters">

        <input
          type="text"
          placeholder="جستجوی اسناد..."
        />

        <select defaultValue="all">
          <option value="all">همه انواع</option>
          <option value="invoice">فاکتور تجاری</option>
          <option value="packing-list">لیست بسته‌بندی</option>
          <option value="bill-of-lading">بارنامه</option>
          <option value="insurance">بیمه</option>
          <option value="customs">سند گمرکی</option>
          <option value="certificate">گواهی</option>
        </select>

        <select defaultValue="all">
          <option value="all">همه وضعیت‌ها</option>
          <option value="approved">تأییدشده</option>
          <option value="pending">در انتظار</option>
          <option value="missing">ناقص</option>
        </select>

      </section>


      {/* جدول اسناد */}

      <section className="documents-panel">

        <div className="documents-panel-header">

          <div>
            <h2>سوابق اسناد</h2>
            <p>
              اسناد مرتبط با عملیات تجاری.
            </p>
          </div>

          <span>128 سند</span>

        </div>


        <div className="documents-table-wrapper">

          <table className="documents-table">

            <thead>
              <tr>
                <th>سند</th>
                <th>نوع</th>
                <th>پرونده تجاری</th>
                <th>محموله</th>
                <th>بارگذاری توسط</th>
                <th>تاریخ</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>


            <tbody>

              <tr>
                <td>
                  <strong>Invoice_TR-001.pdf</strong>
                </td>

                <td>فاکتور تجاری</td>

                <td>TR-001</td>

                <td>SH-001</td>

                <td>واحد فروش</td>

                <td>20 سپتامبر 2026</td>

                <td>
                  <span className="document-status approved">
                    تأییدشده
                  </span>
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>PackingList_TR-001.pdf</strong>
                </td>

                <td>لیست بسته‌بندی</td>

                <td>TR-001</td>

                <td>SH-001</td>

                <td>لجستیک</td>

                <td>20 سپتامبر 2026</td>

                <td>
                  <span className="document-status approved">
                    تأییدشده
                  </span>
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>BL_TR-002.pdf</strong>
                </td>

                <td>بارنامه</td>

                <td>TR-002</td>

                <td>SH-003</td>

                <td>لجستیک</td>

                <td>19 سپتامبر 2026</td>

                <td>
                  <span className="document-status pending">
                    در انتظار
                  </span>
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>Origin_TR-003.pdf</strong>
                </td>

                <td>گواهی</td>

                <td>TR-003</td>

                <td>SH-004</td>

                <td>گمرک</td>

                <td>18 سپتامبر 2026</td>

                <td>
                  <span className="document-status approved">
                    تأییدشده
                  </span>
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>Insurance_TR-004.pdf</strong>
                </td>

                <td>بیمه</td>

                <td>TR-004</td>

                <td>SH-006</td>

                <td>لجستیک</td>

                <td>17 سپتامبر 2026</td>

                <td>
                  <span className="document-status missing">
                    ناقص
                  </span>
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* دسته‌بندی اسناد */}

      <section className="document-categories">

        <div className="category-card">
          <span>تجاری</span>
          <strong>32</strong>
          <p>فاکتورها و اسناد تجاری</p>
        </div>

        <div className="category-card">
          <span>لجستیک</span>
          <strong>41</strong>
          <p>اسناد حمل و نقل</p>
        </div>

        <div className="category-card">
          <span>گمرکی</span>
          <strong>28</strong>
          <p>اسناد گمرکی و ترخیص</p>
        </div>

        <div className="category-card">
          <span>مالی</span>
          <strong>27</strong>
          <p>اسناد پرداخت و امور مالی</p>
        </div>

      </section>


      <div className="documents-footer">

        <Link
          to="/dashboard"
          className="back-dashboard-button"
        >
          بازگشت به داشبورد
        </Link>

      </div>

    </main>
  )
}

export default Documents
import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
  return (
    <main className="users-page">

      <header className="users-header">

        <div>
          <span className="users-label">
            مدیریت
          </span>

          <h1>کاربران</h1>

          <p>
            مدیریت کاربران، نقش‌ها، واحدها و وضعیت حساب‌ها.
          </p>
        </div>

        <button className="add-user-button">
          افزودن کاربر
        </button>

      </header>


      {/* خلاصه */}

      <section className="users-summary">

        <article className="users-summary-card">
          <span>مجموع کاربران</span>
          <strong>24</strong>
          <small>حساب‌های ثبت‌شده</small>
        </article>

        <article className="users-summary-card">
          <span>کاربران فعال</span>
          <strong>20</strong>
          <small>در حال حاضر فعال</small>
        </article>

        <article className="users-summary-card">
          <span>مدیران سیستم</span>
          <strong>2</strong>
          <small>دسترسی کامل به سیستم</small>
        </article>

        <article className="users-summary-card">
          <span>در انتظار</span>
          <strong>2</strong>
          <small>در انتظار فعال‌سازی</small>
        </article>

      </section>


      {/* فیلترها */}

      <section className="users-filters">

        <input
          type="text"
          placeholder="جستجوی کاربران..."
        />

        <select defaultValue="all">
          <option value="all">همه نقش‌ها</option>
          <option value="admin">مدیر سیستم</option>
          <option value="manager">مدیر</option>
          <option value="sales">فروش</option>
          <option value="procurement">تأمین</option>
          <option value="logistics">لجستیک</option>
          <option value="customs">گمرک</option>
          <option value="finance">امور مالی</option>
        </select>

        <select defaultValue="all">
          <option value="all">همه وضعیت‌ها</option>
          <option value="active">فعال</option>
          <option value="inactive">غیرفعال</option>
          <option value="pending">در انتظار</option>
        </select>

      </section>


      {/* جدول کاربران */}

      <section className="users-panel">

        <div className="users-panel-header">

          <div>
            <h2>کاربران سیستم</h2>

            <p>
              کاربرانی که به سیستم ERP شرکت PistaTrade دسترسی دارند.
            </p>
          </div>

          <span>24 کاربر</span>

        </div>


        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>
              <tr>
                <th>کاربر</th>
                <th>ایمیل</th>
                <th>نقش</th>
                <th>واحد</th>
                <th>وضعیت</th>
                <th>آخرین ورود</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      A
                    </div>

                    <div>
                      <strong>Admin User</strong>
                      <span>admin</span>
                    </div>
                  </div>
                </td>

                <td>
                  admin@pistatrade.com
                </td>

                <td>
                  <span className="role-badge admin">
                    مدیر سیستم
                  </span>
                </td>

                <td>
                  مدیریت
                </td>

                <td>
                  <span className="user-status active">
                    فعال
                  </span>
                </td>

                <td>
                  30 سپتامبر 2026
                </td>

                <td>
                  <Link to="/dashboard/profile">
                    مشاهده
                  </Link>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      S
                    </div>

                    <div>
                      <strong>Sarah Miller</strong>
                      <span>sarah</span>
                    </div>
                  </div>
                </td>

                <td>
                  sarah@pistatrade.com
                </td>

                <td>
                  <span className="role-badge sales">
                    فروش
                  </span>
                </td>

                <td>
                  فروش
                </td>

                <td>
                  <span className="user-status active">
                    فعال
                  </span>
                </td>

                <td>
                  29 سپتامبر 2026
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      M
                    </div>

                    <div>
                      <strong>Michael Brown</strong>
                      <span>michael</span>
                    </div>
                  </div>
                </td>

                <td>
                  michael@pistatrade.com
                </td>

                <td>
                  <span className="role-badge logistics">
                    لجستیک
                  </span>
                </td>

                <td>
                  لجستیک
                </td>

                <td>
                  <span className="user-status active">
                    فعال
                  </span>
                </td>

                <td>
                  28 سپتامبر 2026
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      D
                    </div>

                    <div>
                      <strong>Daniel Smith</strong>
                      <span>daniel</span>
                    </div>
                  </div>
                </td>

                <td>
                  daniel@pistatrade.com
                </td>

                <td>
                  <span className="role-badge finance">
                    امور مالی
                  </span>
                </td>

                <td>
                  امور مالی
                </td>

                <td>
                  <span className="user-status pending">
                    در انتظار
                  </span>
                </td>

                <td>
                  هرگز
                </td>

                <td>
                  <a href="#">
                    مشاهده
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      R
                    </div>

                    <div>
                      <strong>Robert Wilson</strong>
                      <span>robert</span>
                    </div>
                  </div>
                </td>

                <td>
                  robert@pistatrade.com
                </td>

                <td>
                  <span className="role-badge manager">
                    مدیر
                  </span>
                </td>

                <td>
                  مدیریت
                </td>

                <td>
                  <span className="user-status inactive">
                    غیرفعال
                  </span>
                </td>

                <td>
                  10 سپتامبر 2026
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


      <div className="users-footer">

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

export default Users
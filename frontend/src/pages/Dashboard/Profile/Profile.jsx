import './Profile.css'

function Profile() {
  return (
    <main className="profile-page">

      <header className="profile-header">
        <div>
          <span className="profile-label">
            حساب کاربری
          </span>

          <h1>پروفایل من</h1>

          <p>
            مدیریت اطلاعات شخصی و تنظیمات حساب کاربری.
          </p>
        </div>
      </header>


      <section className="profile-container">

        {/* سربرگ پروفایل */}

        <div className="profile-card profile-main">

          <div className="profile-avatar">
            A
          </div>

          <div className="profile-main-info">
            <h2>Admin User</h2>

            <p>
              admin@pistatrade.com
            </p>

            <span className="profile-role">
              مدیر سیستم
            </span>
          </div>

        </div>


        {/* اطلاعات شخصی */}

        <section className="profile-card">

          <div className="profile-card-header">
            <div>
              <h2>اطلاعات شخصی</h2>

              <p>
                اطلاعات پایه حساب کاربری شما.
              </p>
            </div>

            <button className="profile-button">
              ویرایش پروفایل
            </button>
          </div>


          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>نام</span>
              <strong>Admin</strong>
            </div>

            <div className="profile-info-item">
              <span>نام خانوادگی</span>
              <strong>User</strong>
            </div>

            <div className="profile-info-item">
              <span>ایمیل</span>
              <strong>admin@pistatrade.com</strong>
            </div>

            <div className="profile-info-item">
              <span>تلفن</span>
              <strong>+1 000 000 0000</strong>
            </div>

            <div className="profile-info-item">
              <span>شرکت</span>
              <strong>PistaTrade</strong>
            </div>

            <div className="profile-info-item">
              <span>نقش</span>
              <strong>مدیر سیستم</strong>
            </div>

          </div>

        </section>


        {/* اطلاعات حساب */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div>
              <h2>اطلاعات حساب</h2>

              <p>
                جزئیات حساب کاربری و دسترسی.
              </p>
            </div>

          </div>


          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>نام کاربری</span>
              <strong>admin</strong>
            </div>

            <div className="profile-info-item">
              <span>وضعیت حساب</span>

              <strong className="profile-status active">
                فعال
              </strong>
            </div>

            <div className="profile-info-item">
              <span>واحد</span>
              <strong>مدیریت</strong>
            </div>

            <div className="profile-info-item">
              <span>تاریخ عضویت</span>
              <strong>سپتامبر 2026</strong>
            </div>

          </div>

        </section>


        {/* امنیت */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div>
              <h2>امنیت</h2>

              <p>
                مدیریت رمز عبور و امنیت حساب کاربری.
              </p>
            </div>

            <button className="profile-button">
              تغییر رمز عبور
            </button>

          </div>

        </section>

      </section>

    </main>
  )
}

export default Profile
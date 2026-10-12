import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">

      {/* سربرگ صفحه */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">
            در تماس باشید
          </span>

          <h1>
            تماس با TradeFlow
          </h1>

          <p>
            درباره پسته ایرانی ما سؤالی دارید؟
            با تیم ما تماس بگیرید و نیازهای خود را با ما در میان بگذارید.
          </p>
        </div>
      </section>


      {/* محتوای تماس */}
      <section className="contact-section">
        <div className="contact-container contact-grid">

          {/* اطلاعات تماس */}
          <div className="contact-info">

            <span className="section-label">
              اطلاعات تماس
            </span>

            <h2>
              درباره سفارش بعدی خود صحبت کنیم
            </h2>

            <p>
              چه به دنبال نوع خاصی از پسته، مقدار، بسته‌بندی
              یا مقصد مشخصی باشید، تیم ما آماده است
              درباره نیازهای شما گفت‌وگو کند.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <h3>ایمیل</h3>
                <p>info@tradeflow.com</p>
              </div>

              <div className="contact-item">
                <h3>تلفن</h3>
                <p>+1 000 000 0000</p>
              </div>

              <div className="contact-item">
                <h3>ساعات کاری</h3>
                <p>دوشنبه تا جمعه، 9:00 صبح تا 6:00 عصر</p>
              </div>

            </div>

          </div>


          {/* فرم تماس */}
          <div className="contact-form-wrapper">

            <h2>
              پیام خود را برای ما ارسال کنید
            </h2>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  نام و نام خانوادگی
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="نام و نام خانوادگی شما"
                />
              </div>


              <div className="form-group">
                <label htmlFor="company">
                  نام شرکت
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="نام شرکت شما"
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  آدرس ایمیل
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>


              <div className="form-group">
                <label htmlFor="country">
                  کشور
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="کشور شما"
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  پیام
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="نیازهای خود را برای ما بنویسید..."
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                ارسال پیام
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
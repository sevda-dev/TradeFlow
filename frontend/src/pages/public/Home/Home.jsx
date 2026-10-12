import './Home.css'

function Home() {
  return (
    <main className="home-page">

      {/* بخش هیرو */}
      <section className="hero-section">
        <div className="hero-content">

          <span className="hero-label">
            پسته ممتاز ایرانی
          </span>

          <h1>
            پسته ممتاز ایرانی
            <br />
            برای بازارهای جهانی
          </h1>

          <p>
            ما پسته ایرانی باکیفیت را برای خریداران بین‌المللی
            تأمین و عرضه می‌کنیم و هماهنگی مطمئن تجارت و
            لجستیک را انجام می‌دهیم.
          </p>

          <div className="hero-actions">
            <a href="/products" className="hero-button primary">
              مشاهده محصولات
            </a>

            <a href="/quote" className="hero-button secondary">
              درخواست قیمت
            </a>
          </div>

        </div>
      </section>


      {/* بخش محصولات */}
      <section className="products-section">
        <div className="section-container">

          <div className="section-heading">
            <span>محصولات ما</span>

            <h2>
              انواع پسته ایرانی
            </h2>

            <p>
              مجموعه‌ای از پسته‌های ایرانی موجود برای
              تجارت بین‌المللی را بررسی کنید.
            </p>
          </div>

          <div className="pistachio-products">

            <div className="pistachio-product">
              <h3>Akbari</h3>
              <p>
                نوعی پسته ممتاز و کشیده که به دلیل
                شکل خاص و کیفیت بالا شناخته می‌شود.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Ahmad Aghaei</h3>
              <p>
                یکی از انواع محبوب پسته ایرانی که برای
                بازارهای مختلف بین‌المللی مناسب است.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Fandoghi</h3>
              <p>
                نوعی پسته گرد که در بازارهای بین‌المللی
                به‌طور گسترده معامله می‌شود.
              </p>
            </div>

            <div className="pistachio-product">
              <h3>Kalleh Ghouchi</h3>
              <p>
                نوعی پسته درشت که به دلیل ظاهر خاص
                و طعم مطلوب ارزشمند است.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* بخش چرا ما */}
      <section className="why-section">
        <div className="section-container">

          <div className="section-heading">
            <span>چرا ما را انتخاب کنید</span>

            <h2>
              تجارت مطمئن پسته
            </h2>

            <p>
              از تأمین تا تحویل بین‌المللی، فرآیند تجارت را
              با همکاری شرکای خود هماهنگ می‌کنیم.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <h3>تأمین باکیفیت</h3>

              <p>
                ما با تأمین‌کنندگان همکاری می‌کنیم تا پسته را
                مطابق با نیازهای مشتری تأمین کنیم.
              </p>
            </div>

            <div className="why-card">
              <h3>تجارت بین‌المللی</h3>

              <p>
                ما از معاملات تجاری با خریداران در
                بازارهای بین‌المللی پشتیبانی می‌کنیم.
              </p>
            </div>

            <div className="why-card">
              <h3>هماهنگی لجستیک</h3>

              <p>
                فرآیند حمل‌ونقل و ارسال را از مبدأ
                تا مقصد هماهنگ می‌کنیم.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* نحوه کار */}
      <section className="how-section">
        <div className="section-container">

          <div className="section-heading">
            <span>نحوه کار</span>

            <h2>
              از درخواست تا تحویل
            </h2>

            <p>
              فرآیندی ساده و شفاف برای خریداران بین‌المللی.
            </p>
          </div>

          <div className="steps-grid">

            <div className="step">
              <span>01</span>

              <h3>
                محصول خود را انتخاب کنید
              </h3>

              <p>
                انواع پسته و مشخصات محصولات ما را بررسی کنید.
              </p>
            </div>

            <div className="step">
              <span>02</span>

              <h3>
                درخواست قیمت دهید
              </h3>

              <p>
                مقدار، مقصد و نیازهای خود را برای ما ارسال کنید.
              </p>
            </div>

            <div className="step">
              <span>03</span>

              <h3>
                تأمین و آماده‌سازی
              </h3>

              <p>
                تأمین، قیمت‌گذاری و هماهنگی‌های تجاری را انجام می‌دهیم.
              </p>
            </div>

            <div className="step">
              <span>04</span>

              <h3>
                ارسال و تحویل
              </h3>

              <p>
                لجستیک و ارسال محصول به مقصد را هماهنگ می‌کنیم.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* بخش درخواست */}
      <section className="cta-section">
        <div className="cta-content">

          <h2>
            به دنبال پسته ایرانی هستید؟
          </h2>

          <p>
            نیازهای خود را با ما در میان بگذارید تا تیم ما
            پیش‌فاکتور مناسب را برای شما آماده کند.
          </p>

          <a href="/quote" className="hero-button primary">
            درخواست قیمت
          </a>

        </div>
      </section>

    </main>
  )
}

export default Home
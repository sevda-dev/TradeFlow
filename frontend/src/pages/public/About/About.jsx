import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* هیرو صفحه */}
      <section className="about-hero">
        <div className="about-container">

          <span className="about-label">
            درباره TRADEFLOW
          </span>

          <h1>
            اتصال پسته ایرانی
            <br />
            به بازارهای جهانی
          </h1>

          <p>
            ما یک شرکت بازرگانی هستیم که بر تأمین و عرضه
            پسته ایرانی برای خریداران بین‌المللی تمرکز دارد.
          </p>

        </div>
      </section>


      {/* درباره شرکت */}
      <section className="about-section">
        <div className="about-container about-grid">

          <div className="about-content">

            <span className="section-label">
              ما چه کسانی هستیم
            </span>

            <h2>
              شریکی قابل اعتماد در تجارت پسته
            </h2>

            <p>
              TradeFlow یک شرکت بازرگانی است که بر تأمین
              بین‌المللی پسته ایرانی تمرکز دارد.
              ما با تأمین‌کنندگان و خریداران بین‌المللی
              همکاری می‌کنیم تا فرآیند تجاری را از تأمین
              تا تحویل هماهنگ کنیم.
            </p>

            <p>
              هدف ما این است که تجارت بین‌المللی پسته را
              برای شرکای تجاری خود شفاف‌تر، منظم‌تر
              و قابل اعتمادتر کنیم.
            </p>

          </div>

          <div className="about-highlight">

            <div className="highlight-item">
              <span>01</span>
              <h3>محصولات باکیفیت</h3>
              <p>
                تأمین پسته بر اساس مشخصات موردنظر مشتری
                و نیازهای بازار.
              </p>
            </div>

            <div className="highlight-item">
              <span>02</span>
              <h3>تجارت جهانی</h3>
              <p>
                اتصال تأمین‌کنندگان ایرانی با خریداران
                در بازارهای بین‌المللی.
              </p>
            </div>

            <div className="highlight-item">
              <span>03</span>
              <h3>هماهنگی تجاری</h3>
              <p>
                هماهنگی تأمین، اسناد، لجستیک
                و فرآیند تحویل.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* خدمات ما */}
      <section className="what-we-do-section">
        <div className="about-container">

          <div className="section-heading">

            <span className="section-label">
              خدمات ما
            </span>

            <h2>
              از تأمین تا تحویل
            </h2>

            <p>
              ما مراحل اصلی یک معامله بین‌المللی
              پسته را هماهنگ می‌کنیم.
            </p>

          </div>


          <div className="about-services">

            <div className="about-service">
              <span>01</span>

              <h3>
                تأمین محصول
              </h3>

              <p>
                یافتن محصولات مناسب پسته بر اساس نوع،
                کیفیت، مقدار و نیازهای مشتری.
              </p>
            </div>


            <div className="about-service">
              <span>02</span>

              <h3>
                هماهنگی تجاری
              </h3>

              <p>
                هماهنگی پیش‌فاکتورها، شرایط تجاری،
                اسناد و توافق‌های تجاری.
              </p>
            </div>


            <div className="about-service">
              <span>03</span>

              <h3>
                لجستیک
              </h3>

              <p>
                هماهنگی حمل‌ونقل، ارسال، گمرک
                و فرآیندهای تحویل.
              </p>
            </div>


            <div className="about-service">
              <span>04</span>

              <h3>
                تحویل بین‌المللی
              </h3>

              <p>
                پشتیبانی از فرآیند ارسال تا زمانی که
                محصولات به مقصد موردنظر برسند.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* رویکرد ما */}
      <section className="mission-section">
        <div className="about-container">

          <div className="mission-content">

            <span className="section-label">
              رویکرد ما
            </span>

            <h2>
              تجارت قابل اعتماد
            </h2>

            <p>
              ما معتقدیم تجارت بین‌المللی موفق به ارتباطات
              شفاف، تأمین قابل اعتماد، اسناد دقیق
              و لجستیک هماهنگ نیاز دارد.
            </p>

            <p>
              هدف ما ایجاد روابط بلندمدت با تأمین‌کنندگان
              و خریداران بین‌المللی از طریق درک نیازهای
              آن‌ها و هماهنگی هر مرحله از فرآیند تجارت است.
            </p>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">

          <h2>
            به دنبال پسته ایرانی هستید؟
          </h2>

          <p>
            نیازهای خود را با ما در میان بگذارید تا درباره
            سفارش بعدی شما گفت‌وگو کنیم.
          </p>

          <a
            href="/quote"
            className="about-cta-button"
          >
            درخواست قیمت
          </a>

        </div>
      </section>

    </main>
  )
}

export default About
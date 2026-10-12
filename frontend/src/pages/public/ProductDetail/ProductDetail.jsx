import './ProductDetail.css'

function ProductDetail() {
  return (
    <main className="product-detail-page">

      {/* هیرو */}
      <section className="product-detail-hero">
        <div className="product-detail-container">

          <span className="product-detail-label">
            پسته ممتاز ایرانی
          </span>

          <h1>
            پسته Akbari
          </h1>

          <p>
            پسته ممتاز ایرانی Akbari برای خریداران بین‌المللی.
          </p>

        </div>
      </section>


      {/* اطلاعات محصول */}
      <section className="product-detail-section">
        <div className="product-detail-container product-detail-grid">

          {/* تصویر */}
          <div className="product-detail-image">
            <img
              src="/images/pistachio-akbari.jpg"
              alt="پسته Akbari"
            />
          </div>


          {/* اطلاعات */}
          <div className="product-detail-content">

            <span className="product-category">
              پسته
            </span>

            <h2>
              پسته Akbari
            </h2>

            <p className="product-description">
              Akbari یکی از انواع پسته ممتاز ایرانی است که
              به شکل کشیده و ظاهر متمایز خود شناخته می‌شود.
              این محصول برای تجارت بین‌المللی و نیازهای
              تجاری مختلف مناسب است.
            </p>


            {/* مشخصات */}
            <div className="product-specifications">

              <div className="specification">
                <span>مبدأ</span>
                <strong>ایران</strong>
              </div>

              <div className="specification">
                <span>نوع</span>
                <strong>Akbari</strong>
              </div>

              <div className="specification">
                <span>نوع محصول</span>
                <strong>پسته</strong>
              </div>

              <div className="specification">
                <span>بسته‌بندی</span>
                <strong>بسته‌بندی سفارشی</strong>
              </div>

            </div>


            {/* دکمه */}
            <a
              href="/quote"
              className="detail-quote-button"
            >
              درخواست قیمت
            </a>

          </div>

        </div>
      </section>


      {/* جزئیات محصول */}
      <section className="product-info-section">
        <div className="product-detail-container">

          <div className="product-info-heading">

            <span className="product-detail-label">
              اطلاعات محصول
            </span>

            <h2>
              مشخصات کیفی و تجاری
            </h2>

            <p>
              می‌توانیم مشخصات محصول را بر اساس نیازهای بازار
              و جزئیات سفارش شما ارائه کنیم.
            </p>

          </div>


          <div className="product-info-grid">

            <div className="info-card">
              <h3>کیفیت</h3>

              <p>
                کیفیت محصول می‌تواند بر اساس نیازهای مشتری
                و بازار مقصد انتخاب شود.
              </p>
            </div>


            <div className="info-card">
              <h3>بسته‌بندی</h3>

              <p>
                گزینه‌های بسته‌بندی بر اساس مقدار، مقصد
                و نیازهای مشتری قابل بررسی است.
              </p>
            </div>


            <div className="info-card">
              <h3>مقدار</h3>

              <p>
                مقدار محصول را بر اساس نیازهای هر سفارش
                تجاری هماهنگ می‌کنیم.
              </p>
            </div>


            <div className="info-card">
              <h3>تحویل</h3>

              <p>
                هماهنگی‌های مربوط به ارسال و تحویل برای
                مقاصد بین‌المللی قابل انجام است.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* درخواست */}
      <section className="product-detail-cta">
        <div className="product-detail-container">

          <h2>
            به پسته Akbari علاقه‌مند هستید؟
          </h2>

          <p>
            مقدار موردنیاز، مقصد، نوع بسته‌بندی و سایر
            نیازهای خود را برای ما ارسال کنید.
          </p>

          <a
            href="/quote"
            className="detail-quote-button"
          >
            درخواست قیمت
          </a>

        </div>
      </section>

    </main>
  )
}

export default ProductDetail
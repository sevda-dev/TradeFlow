import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  return (
    <main className="products-page">

      {/* هیرو */}
      <section className="products-hero">
        <div className="products-container">

          <span className="products-label">
            محصولات ما
          </span>

          <h1>
            پسته‌های ممتاز ایرانی
          </h1>

          <p>
            انواع پسته ایرانی موجود برای خریداران
            بین‌المللی را بررسی کنید.
          </p>

        </div>
      </section>


      {/* محصولات */}
      <section className="products-section">
        <div className="products-container">

          <div className="products-grid">

            {/* Akbari */}
            <article className="product-item">

              <Link
                to="/products/akbari"
                className="product-link"
              >
                <div className="product-image">
                  <img
                    src="/images/pistachio-akbari.jpg"
                    alt="پسته Akbari"
                  />
                </div>

                <div className="product-content">

                  <span className="product-category">
                    پسته
                  </span>

                  <h2>Akbari</h2>

                  <p>
                    نوعی پسته ممتاز و کشیده که به دلیل
                    شکل خاص و ارزش تجاری آن شناخته می‌شود.
                  </p>

                </div>
              </Link>

              <a
                href="/quote"
                className="product-button"
              >
                درخواست قیمت
              </a>

            </article>


            {/* Ahmad Aghaei */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-ahmad-aghaei.jpg"
                  alt="پسته Ahmad Aghaei"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  پسته
                </span>

                <h2>Ahmad Aghaei</h2>

                <p>
                  یکی از انواع محبوب پسته ایرانی با ظاهر
                  جذاب و تقاضای گسترده.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  درخواست قیمت
                </a>

              </div>

            </article>


            {/* Fandoghi */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-fandoghi.jpg"
                  alt="پسته Fandoghi"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  پسته
                </span>

                <h2>Fandoghi</h2>

                <p>
                  نوعی پسته گرد که در بازارهای بین‌المللی
                  به‌طور گسترده معامله می‌شود.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  درخواست قیمت
                </a>

              </div>

            </article>


            {/* Kalleh Ghouchi */}
            <article className="product-item">

              <div className="product-image">
                <img
                  src="/images/pistachio-kalleh-ghouchi.jpg"
                  alt="پسته Kalleh Ghouchi"
                />
              </div>

              <div className="product-content">

                <span className="product-category">
                  پسته
                </span>

                <h2>Kalleh Ghouchi</h2>

                <p>
                  نوعی پسته ایرانی درشت که به دلیل
                  شکل خاص خود شناخته می‌شود.
                </p>

                <a
                  href="/quote"
                  className="product-button"
                >
                  درخواست قیمت
                </a>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* درخواست */}
      <section className="products-cta">
        <div className="products-container">

          <h2>
            به دنبال نوع خاصی از پسته هستید؟
          </h2>

          <p>
            نوع پسته، مقدار، بسته‌بندی و مقصد موردنظر
            خود را به ما اطلاع دهید.
          </p>

          <a
            href="/quote"
            className="product-button"
          >
            درخواست قیمت
          </a>

        </div>
      </section>

    </main>
  )
}

export default Products
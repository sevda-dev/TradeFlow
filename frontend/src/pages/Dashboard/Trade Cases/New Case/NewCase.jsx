import './NewCase.css'

function NewCase() {
  return (
    <main className="new-case-page">

      <header className="new-case-header">
        <div>
          <span className="new-case-label">
            پرونده‌های تجاری
          </span>

          <h1>
            پرونده تجاری جدید
          </h1>

          <p>
            ایجاد یک پرونده تجاری جدید.
          </p>
        </div>
      </header>


      <form className="new-case-form">

        {/* اطلاعات پایه */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>اطلاعات پایه</h2>
            <p>اطلاعات اصلی پرونده تجاری را مشخص کنید.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>نوع پرونده</label>

              <select defaultValue="">
                <option value="" disabled>
                  نوع پرونده را انتخاب کنید
                </option>
                <option value="sale">فروش</option>
                <option value="purchase">خرید</option>
              </select>
            </div>


            <div className="form-group">
              <label>محصول</label>

              <select defaultValue="">
                <option value="" disabled>
                  محصول را انتخاب کنید
                </option>
                <option value="akbari">Akbari</option>
                <option value="ahmad-aghaei">Ahmad Aghaei</option>
                <option value="fandoghi">Fandoghi</option>
                <option value="kalleh-ghouchi">Kalleh Ghouchi</option>
              </select>
            </div>


            <div className="form-group">
              <label>مشتری</label>

              <select defaultValue="">
                <option value="" disabled>
                  مشتری را انتخاب کنید
                </option>
                <option value="global-foods">
                  Global Foods Ltd.
                </option>
                <option value="euro-nuts">
                  Euro Nuts GmbH
                </option>
                <option value="dubai-foods">
                  Dubai Foods LLC
                </option>
              </select>
            </div>


            <div className="form-group">
              <label>تأمین‌کننده</label>

              <select defaultValue="">
                <option value="" disabled>
                  تأمین‌کننده را انتخاب کنید
                </option>
                <option value="kerman">
                  Kerman Pistachio Co.
                </option>
                <option value="rafsanjan">
                  Rafsanjan Agro
                </option>
                <option value="iran-nuts">
                  Iran Nuts Trading
                </option>
              </select>
            </div>

          </div>

        </section>


        {/* مقدار و مقصد */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>مقدار و مقصد</h2>
            <p>مقدار تجاری و مقصد را مشخص کنید.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>مقدار کل</label>

              <input
                type="number"
                placeholder="مقدار را وارد کنید"
              />
            </div>


            <div className="form-group">
              <label>واحد</label>

              <select defaultValue="ton">
                <option value="ton">تن</option>
                <option value="kg">کیلوگرم</option>
              </select>
            </div>


            <div className="form-group">
              <label>کشور مقصد</label>

              <input
                type="text"
                placeholder="مثلاً UAE"
              />
            </div>


            <div className="form-group">
              <label>شهر مقصد</label>

              <input
                type="text"
                placeholder="مثلاً Dubai"
              />
            </div>

          </div>

        </section>


        {/* اطلاعات تجاری */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>اطلاعات تجاری</h2>
            <p>اطلاعات قیمت‌گذاری و پرداخت را وارد کنید.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>قیمت</label>

              <input
                type="number"
                placeholder="قیمت را وارد کنید"
              />
            </div>


            <div className="form-group">
              <label>ارز</label>

              <select defaultValue="">
                <option value="" disabled>
                  ارز را انتخاب کنید
                </option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="aed">AED</option>
              </select>
            </div>


            <div className="form-group">
              <label>شرایط پرداخت</label>

              <select defaultValue="">
                <option value="" disabled>
                  شرایط پرداخت را انتخاب کنید
                </option>
                <option value="advance">پرداخت پیش‌پرداخت</option>
                <option value="partial">
                  پرداخت جزئی
                </option>
                <option value="after-delivery">
                  پس از تحویل
                </option>
              </select>
            </div>


            <div className="form-group">
              <label>بسته‌بندی</label>

              <input
                type="text"
                placeholder="مثلاً کیسه‌های 25 کیلویی"
              />
            </div>

          </div>

        </section>


        {/* یادداشت‌ها */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>یادداشت‌ها</h2>
          </div>

          <div className="form-group">

            <textarea
              rows="5"
              placeholder="اطلاعات تکمیلی را وارد کنید..."
            />

          </div>

        </section>


        {/* عملیات */}

        <div className="new-case-actions">

          <a
            href="/dashboard/trade-cases"
            className="cancel-button"
          >
            لغو
          </a>

          <button
            type="submit"
            className="save-case-button"
          >
            ایجاد پرونده تجاری
          </button>

        </div>

      </form>

    </main>
  )
}

export default NewCase
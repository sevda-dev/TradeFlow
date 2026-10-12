
import { useState } from 'react'
import './RequestQuote.css'
import { createQuote } from '../../../services/api'

function RequestQuote() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    setLoading(true)
    setMessage('')

    try {
      await createQuote(data)
      setMessage('درخواست شما با موفقیت ثبت شد.')
      form.reset()
    } catch (error) {
      console.error(error)
      setMessage('ثبت درخواست ناموفق بود. لطفاً دوباره تلاش کنید.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-container">
          <span className="quote-label">درخواست قیمت</span>
          <h1>نیاز خود را به ما بگویید</h1>
          <p>
            نیازهای خود را برای ما ارسال کنید تا تیم ما
            با یک پیش‌فاکتور مناسب با شما تماس بگیرد.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-container">
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>نام و نام خانوادگی</label>
              <input name="full_name" type="text" required
                placeholder="نام و نام خانوادگی شما" />
            </div>

            <div className="form-group">
              <label>نام شرکت</label>
              <input name="company_name" type="text" required
                placeholder="نام شرکت شما" />
            </div>

            <div className="form-group">
              <label>ایمیل</label>
              <input name="email" type="email" required
                placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>کشور</label>
              <input name="country" type="text" required
                placeholder="کشور شما" />
            </div>

            <div className="form-group">
              <label>محصول</label>
              <select name="product" required defaultValue="">
                <option value="">یک محصول را انتخاب کنید</option>
                <option value="akbari">Akbari</option>
                <option value="ahmad-aghaei">Ahmad Aghaei</option>
                <option value="fandoghi">Fandoghi</option>
                <option value="kalleh-ghouchi">Kalleh Ghouchi</option>
              </select>
            </div>

            <div className="form-group">
              <label>مقدار</label>
              <input name="quantity" type="text" required
                placeholder="مثلاً 10 تن" />
            </div>

            <div className="form-group">
              <label>بسته‌بندی</label>
              <input name="packaging" type="text" required
                placeholder="نیازهای بسته‌بندی" />
            </div>

            <div className="form-group">
              <label>مقصد</label>
              <input name="destination" type="text" required
                placeholder="مقصد تحویل" />
            </div>

            <div className="form-group form-full">
              <label>پیام</label>
              <textarea name="message" rows="6" required
                placeholder="نیازهای خود را برای ما بنویسید..." />
            </div>

            <div className="form-full">
              <button type="submit" className="quote-submit"
                disabled={loading}>
                {loading ? 'در حال ارسال...' : 'ارسال درخواست'}
              </button>
              {message && <p role="status">{message}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default RequestQuote


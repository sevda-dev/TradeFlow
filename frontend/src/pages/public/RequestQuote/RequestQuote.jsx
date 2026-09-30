import './RequestQuote.css'

function RequestQuote() {
  return (
    <main className="quote-page">

      <section className="quote-hero">
        <div className="quote-container">
          <span className="quote-label">
            REQUEST A QUOTE
          </span>

          <h1>
            Tell Us What You Need
          </h1>

          <p>
            Send us your requirements and our team will
            get back to you with a suitable quotation.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-container">

          <form className="quote-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                placeholder="Your country"
              />
            </div>

            <div className="form-group">
              <label>Product</label>
              <select>
                <option value="">Select a product</option>
                <option value="akbari">Akbari</option>
                <option value="ahmad-aghaei">Ahmad Aghaei</option>
                <option value="fandoghi">Fandoghi</option>
                <option value="kalleh-ghouchi">Kalleh Ghouchi</option>
              </select>
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                placeholder="e.g. 10 tons"
              />
            </div>

            <div className="form-group">
              <label>Packaging</label>
              <input
                type="text"
                placeholder="Packaging requirements"
              />
            </div>

            <div className="form-group">
              <label>Destination</label>
              <input
                type="text"
                placeholder="Delivery destination"
              />
            </div>

            <div className="form-group form-full">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <div className="form-full">
              <button type="submit" className="quote-submit">
                Submit Request
              </button>
            </div>

          </form>

        </div>
      </section>

    </main>
  )
}

export default RequestQuote
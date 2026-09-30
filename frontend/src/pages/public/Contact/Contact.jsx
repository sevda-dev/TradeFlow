import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">

      {/* Page Header */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Contact TradeFlow
          </h1>

          <p>
            Have a question about our Iranian pistachios?
            Contact our team and tell us what you need.
          </p>
        </div>
      </section>


      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <span className="section-label">
              CONTACT INFORMATION
            </span>

            <h2>
              Let's Talk About Your Next Order
            </h2>

            <p>
              Whether you are looking for a specific pistachio
              variety, quantity, packaging, or destination,
              our team is ready to discuss your requirements.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <h3>Email</h3>
                <p>info@tradeflow.com</p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 000 000 0000</p>
              </div>

              <div className="contact-item">
                <h3>Business Hours</h3>
                <p>Monday – Friday, 9:00 AM – 6:00 PM</p>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <h2>
              Send Us a Message
            </h2>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                />
              </div>


              <div className="form-group">
                <label htmlFor="company">
                  Company Name
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>


              <div className="form-group">
                <label htmlFor="country">
                  Country
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Your country"
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
import './NewCase.css'

function NewCase() {
  return (
    <main className="new-case-page">

      <header className="new-case-header">
        <div>
          <span className="new-case-label">
            TRADE CASES
          </span>

          <h1>
            New Trade Case
          </h1>

          <p>
            Create a new commercial trade case.
          </p>
        </div>
      </header>


      <form className="new-case-form">

        {/* Basic Information */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>Basic Information</h2>
            <p>Define the main information of the trade case.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Case Type</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select case type
                </option>
                <option value="sale">Sale</option>
                <option value="purchase">Purchase</option>
              </select>
            </div>


            <div className="form-group">
              <label>Product</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select product
                </option>
                <option value="akbari">Akbari</option>
                <option value="ahmad-aghaei">Ahmad Aghaei</option>
                <option value="fandoghi">Fandoghi</option>
                <option value="kalleh-ghouchi">Kalleh Ghouchi</option>
              </select>
            </div>


            <div className="form-group">
              <label>Customer</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select customer
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
              <label>Supplier</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select supplier
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


        {/* Quantity & Destination */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>Quantity & Destination</h2>
            <p>Define the commercial quantity and destination.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Total Quantity</label>

              <input
                type="number"
                placeholder="Enter quantity"
              />
            </div>


            <div className="form-group">
              <label>Unit</label>

              <select defaultValue="ton">
                <option value="ton">Ton</option>
                <option value="kg">Kilogram</option>
              </select>
            </div>


            <div className="form-group">
              <label>Destination Country</label>

              <input
                type="text"
                placeholder="e.g. UAE"
              />
            </div>


            <div className="form-group">
              <label>Destination City</label>

              <input
                type="text"
                placeholder="e.g. Dubai"
              />
            </div>

          </div>

        </section>


        {/* Commercial Information */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>Commercial Information</h2>
            <p>Enter pricing and payment information.</p>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                placeholder="Enter price"
              />
            </div>


            <div className="form-group">
              <label>Currency</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select currency
                </option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="aed">AED</option>
              </select>
            </div>


            <div className="form-group">
              <label>Payment Terms</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select payment terms
                </option>
                <option value="advance">Advance Payment</option>
                <option value="partial">
                  Partial Payment
                </option>
                <option value="after-delivery">
                  After Delivery
                </option>
              </select>
            </div>


            <div className="form-group">
              <label>Packaging</label>

              <input
                type="text"
                placeholder="e.g. 25kg bags"
              />
            </div>

          </div>

        </section>


        {/* Notes */}

        <section className="new-case-section">

          <div className="section-header">
            <h2>Notes</h2>
          </div>

          <div className="form-group">

            <textarea
              rows="5"
              placeholder="Add any additional information..."
            />

          </div>

        </section>


        {/* Actions */}

        <div className="new-case-actions">

          <a
            href="/dashboard/trade-cases"
            className="cancel-button"
          >
            Cancel
          </a>

          <button
            type="submit"
            className="save-case-button"
          >
            Create Trade Case
          </button>

        </div>

      </form>

    </main>
  )
}

export default NewCase
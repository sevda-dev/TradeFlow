import './Payments.css'

function Payments() {
  return (
    <main className="payments-page">

      <header className="payments-header">
        <div>
          <span className="payments-label">
            FINANCE
          </span>

          <h1>Payments</h1>

          <p>
            Manage actual payments made for trade operations.
          </p>
        </div>

        <button className="payments-button">
          Record Payment
        </button>
      </header>

      <section className="payments-summary">

        <div className="payment-card">
          <span>Total Payments</span>
          <strong>86</strong>
        </div>

        <div className="payment-card">
          <span>Paid This Month</span>
          <strong>$245,000</strong>
        </div>

        <div className="payment-card">
          <span>Pending</span>
          <strong>$86,500</strong>
        </div>

        <div className="payment-card">
          <span>Failed</span>
          <strong>3</strong>
        </div>

      </section>

      <section className="payments-panel">

        <div className="payments-panel-header">
          <h2>Payment Records</h2>

          <input
            type="text"
            placeholder="Search payments..."
          />
        </div>

        <div className="payments-table-wrapper">

          <table className="payments-table">

            <thead>
              <tr>
                <th>Payment</th>
                <th>Trade Case</th>
                <th>Payment Request</th>
                <th>Recipient</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PAY-001</td>
                <td>TR-001</td>
                <td>PR-001</td>
                <td>Kerman Pistachio Co.</td>
                <td>$80,000</td>
                <td>Bank Transfer</td>
                <td>
                  <span className="payment-status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>PAY-002</td>
                <td>TR-002</td>
                <td>PR-002</td>
                <td>Global Freight Co.</td>
                <td>$12,500</td>
                <td>Bank Transfer</td>
                <td>
                  <span className="payment-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>PAY-003</td>
                <td>TR-003</td>
                <td>PR-003</td>
                <td>Customs Services</td>
                <td>$4,500</td>
                <td>Bank Transfer</td>
                <td>
                  <span className="payment-status completed">
                    Completed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default Payments
import './PaymentRequests.css'

function PaymentRequests() {
  return (
    <main className="payment-requests-page">

      <header className="payment-requests-header">
        <div>
          <span className="payment-requests-label">
            FINANCE
          </span>

          <h1>Payment Requests</h1>

          <p>
            Create and manage requests for financial payments.
          </p>
        </div>

        <button className="payment-requests-button">
          New Payment Request
        </button>
      </header>

      <section className="payment-requests-summary">

        <div className="payment-request-card">
          <span>Total Requests</span>
          <strong>42</strong>
        </div>

        <div className="payment-request-card">
          <span>Pending Approval</span>
          <strong>12</strong>
        </div>

        <div className="payment-request-card">
          <span>Approved</span>
          <strong>20</strong>
        </div>

        <div className="payment-request-card">
          <span>Rejected</span>
          <strong>10</strong>
        </div>

      </section>

      <section className="payment-requests-panel">

        <div className="payment-requests-panel-header">

          <div>
            <h2>Payment Requests</h2>

            <p>
              Review payment requests before actual payment.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

        </div>

        <div className="payment-requests-table-wrapper">

          <table className="payment-requests-table">

            <thead>
              <tr>
                <th>Request</th>
                <th>Trade Case</th>
                <th>Purpose</th>
                <th>Amount</th>
                <th>Requested By</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PR-001</td>
                <td>TR-001</td>
                <td>Supplier Payment</td>
                <td>$80,000</td>
                <td>Procurement</td>
                <td>Sep 20, 2026</td>
                <td>
                  <span className="payment-request-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>PR-002</td>
                <td>TR-002</td>
                <td>Freight Payment</td>
                <td>$12,500</td>
                <td>Logistics</td>
                <td>Sep 19, 2026</td>
                <td>
                  <span className="payment-request-status approved">
                    Approved
                  </span>
                </td>
              </tr>

              <tr>
                <td>PR-003</td>
                <td>TR-003</td>
                <td>Customs Cost</td>
                <td>$4,500</td>
                <td>Customs</td>
                <td>Sep 18, 2026</td>
                <td>
                  <span className="payment-request-status approved">
                    Approved
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

export default PaymentRequests
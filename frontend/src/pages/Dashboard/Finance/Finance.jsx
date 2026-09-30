import { Link } from 'react-router-dom'
import './Finance.css'

function Finance() {
  return (
    <main className="finance-page">

      <header className="finance-header">
        <div>
          <span className="finance-label">
            FINANCE
          </span>

          <h1>Finance</h1>

          <p>
            Manage payment requests, payments, transactions, and settlements.
          </p>
        </div>
      </header>

      <section className="finance-summary">

        <div className="finance-card">
          <span>Pending Requests</span>
          <strong>12</strong>
          <small>Waiting for approval</small>
        </div>

        <div className="finance-card">
          <span>Pending Payments</span>
          <strong>$86,500</strong>
          <small>Payments to be processed</small>
        </div>

        <div className="finance-card">
          <span>Total Transactions</span>
          <strong>148</strong>
          <small>This month</small>
        </div>

        <div className="finance-card">
          <span>Pending Settlements</span>
          <strong>8</strong>
          <small>Cases awaiting settlement</small>
        </div>

      </section>

      <section className="finance-section">

        <div className="section-header">
          <h2>Financial Operations</h2>

          <p>
            Manage the complete financial cycle of trade cases.
          </p>
        </div>

        <div className="finance-grid">

          <Link
            to="/dashboard/finance/payment-requests"
            className="finance-operation-card"
          >
            <span className="operation-number">01</span>

            <h3>Payment Requests</h3>

            <p>
              Create, review, and approve payment requests.
            </p>

            <span className="operation-link">
              View Payment Requests →
            </span>
          </Link>

          <Link
            to="/dashboard/finance/payments"
            className="finance-operation-card"
          >
            <span className="operation-number">02</span>

            <h3>Payments</h3>

            <p>
              Manage actual payments and payment status.
            </p>

            <span className="operation-link">
              View Payments →
            </span>
          </Link>

          <Link
            to="/dashboard/finance/transactions"
            className="finance-operation-card"
          >
            <span className="operation-number">03</span>

            <h3>Transactions</h3>

            <p>
              View financial transactions and money movements.
            </p>

            <span className="operation-link">
              View Transactions →
            </span>
          </Link>

          <Link
            to="/dashboard/finance/settlements"
            className="finance-operation-card"
          >
            <span className="operation-number">04</span>

            <h3>Settlements</h3>

            <p>
              Manage final settlements and remaining balances.
            </p>

            <span className="operation-link">
              View Settlements →
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Finance
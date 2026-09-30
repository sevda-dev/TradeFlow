import { Link } from 'react-router-dom'
import './Customs.css'

function Customs() {
  return (
    <main className="customs-page">

      <header className="customs-header">
        <div>
          <span className="customs-label">
            CUSTOMS
          </span>

          <h1>Customs</h1>

          <p>
            Manage customs declarations, clearance, and customs operations.
          </p>
        </div>
      </header>

      <section className="customs-summary">

        <div className="customs-card">
          <span>Active Declarations</span>
          <strong>14</strong>
          <small>Currently in process</small>
        </div>

        <div className="customs-card">
          <span>Pending Clearance</span>
          <strong>7</strong>
          <small>Waiting for clearance</small>
        </div>

        <div className="customs-card">
          <span>Cleared Shipments</span>
          <strong>28</strong>
          <small>Successfully cleared</small>
        </div>

        <div className="customs-card">
          <span>Customs Costs</span>
          <strong>$42,500</strong>
          <small>Current cases</small>
        </div>

      </section>

      <section className="customs-section">

        <div className="section-header">
          <div>
            <h2>Customs Operations</h2>

            <p>
              Manage customs declarations and clearance operations.
            </p>
          </div>
        </div>

        <div className="customs-grid">

          <Link
            to="/dashboard/customs/declarations"
            className="customs-operation-card"
          >
            <span className="operation-number">
              01
            </span>

            <h3>Declarations</h3>

            <p>
              Create and manage customs declarations for shipments.
            </p>

            <span className="operation-link">
              View Declarations →
            </span>
          </Link>

          <Link
            to="/dashboard/customs/clearance"
            className="customs-operation-card"
          >
            <span className="operation-number">
              02
            </span>

            <h3>Clearance</h3>

            <p>
              Track customs clearance, brokers, costs, and clearance status.
            </p>

            <span className="operation-link">
              View Clearance →
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Customs
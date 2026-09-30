import { Link } from 'react-router-dom'
import './Logistics.css'

function Logistics() {
  return (
    <main className="logistics-page">

      <header className="logistics-header">
        <div>
          <span className="logistics-label">
            LOGISTICS
          </span>

          <h1>Logistics</h1>

          <p>
            Manage shipments, drivers, vehicles, and weighbridge operations.
          </p>
        </div>
      </header>

      <section className="logistics-summary">

        <div className="logistics-card">
          <span>Active Shipments</span>
          <strong>12</strong>
          <small>Currently in transit</small>
        </div>

        <div className="logistics-card">
          <span>Available Drivers</span>
          <strong>18</strong>
          <small>Ready for assignment</small>
        </div>

        <div className="logistics-card">
          <span>Vehicles</span>
          <strong>24</strong>
          <small>Registered vehicles</small>
        </div>

        <div className="logistics-card">
          <span>Pending Weighbridge</span>
          <strong>5</strong>
          <small>Waiting for weighing</small>
        </div>

      </section>

      <section className="logistics-section">

        <div className="section-header">
          <div>
            <h2>Logistics Operations</h2>
            <p>
              Manage daily transportation operations.
            </p>
          </div>
        </div>

        <div className="logistics-grid">

          <Link
            to="/dashboard/logistics/shipments"
            className="logistics-operation-card"
          >
            <span className="operation-number">01</span>
            <h3>Shipments</h3>
            <p>
              View and manage all shipments and their transportation status.
            </p>
            <span className="operation-link">
              View Shipments →
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/drivers"
            className="logistics-operation-card"
          >
            <span className="operation-number">02</span>
            <h3>Drivers</h3>
            <p>
              Manage drivers, assignments, and driver information.
            </p>
            <span className="operation-link">
              View Drivers →
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/vehicles"
            className="logistics-operation-card"
          >
            <span className="operation-number">03</span>
            <h3>Vehicles</h3>
            <p>
              Manage vehicles, plates, and transportation information.
            </p>
            <span className="operation-link">
              View Vehicles →
            </span>
          </Link>

          <Link
            to="/dashboard/logistics/weighbridge"
            className="logistics-operation-card"
          >
            <span className="operation-number">04</span>
            <h3>Weighbridge</h3>
            <p>
              Record gross, tare, and net weights for shipments.
            </p>
            <span className="operation-link">
              View Weighbridge →
            </span>
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Logistics
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <main className="dashboard-page">

      <header className="dashboard-header">
        <div>
          <span className="dashboard-label">
            DASHBOARD
          </span>

          <h1>Dashboard</h1>

          <p>
            Overview of your trading, logistics, customs, and financial operations.
          </p>
        </div>

        <div className="dashboard-user">
          <span>Welcome</span>
          <strong>Admin</strong>
        </div>
      </header>


      {/* Main Statistics */}

      <section className="dashboard-summary">

        <article className="dashboard-card">
          <span>Active Trade Cases</span>
          <strong>24</strong>
          <small>+4 this month</small>
        </article>

        <article className="dashboard-card">
          <span>Pending Quotes</span>
          <strong>12</strong>
          <small>5 awaiting review</small>
        </article>

        <article className="dashboard-card">
          <span>Active Shipments</span>
          <strong>8</strong>
          <small>3 in transit</small>
        </article>

        <article className="dashboard-card">
          <span>Pending Payments</span>
          <strong>5</strong>
          <small>$170K remaining</small>
        </article>

      </section>


      {/* Trade Overview */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>Trade Overview</h2>

            <p>
              Current status of commercial operations.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            View All Cases
          </Link>

        </div>

        <div className="trade-overview-grid">

          <div className="trade-stat">
            <span>Total Trade Cases</span>
            <strong>42</strong>
          </div>

          <div className="trade-stat">
            <span>In Progress</span>
            <strong>24</strong>
          </div>

          <div className="trade-stat">
            <span>Completed</span>
            <strong>13</strong>
          </div>

          <div className="trade-stat">
            <span>Pending</span>
            <strong>5</strong>
          </div>

        </div>

      </section>


      {/* Recent Cases */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>Recent Trade Cases</h2>

            <p>
              Recently created or updated cases.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            View All
          </Link>

        </div>

        <div className="dashboard-table-wrapper">

          <table className="dashboard-table">

            <thead>
              <tr>
                <th>Case</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 Tons</td>

                <td>
                  <span className="dashboard-status active">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 Tons</td>

                <td>
                  <span className="dashboard-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 Tons</td>

                <td>
                  <span className="dashboard-status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-004</td>
                <td>Global Nuts GmbH</td>
                <td>Kalleh Ghouchi</td>
                <td>25 Tons</td>

                <td>
                  <span className="dashboard-status active">
                    In Progress
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* Operations */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>Operations</h2>

            <p>
              Current activity across different departments.
            </p>
          </div>

        </div>

        <div className="operations-grid">

          <Link
            to="/dashboard/sales"
            className="operation-card"
          >
            <span>Sales</span>
            <strong>12</strong>
            <small>Pending requests</small>
          </Link>

          <Link
            to="/dashboard/procurement"
            className="operation-card"
          >
            <span>Procurement</span>
            <strong>9</strong>
            <small>Active purchases</small>
          </Link>

          <Link
            to="/dashboard/logistics"
            className="operation-card"
          >
            <span>Logistics</span>
            <strong>8</strong>
            <small>Active shipments</small>
          </Link>

          <Link
            to="/dashboard/customs"
            className="operation-card"
          >
            <span>Customs</span>
            <strong>6</strong>
            <small>Open declarations</small>
          </Link>

          <Link
            to="/dashboard/finance"
            className="operation-card"
          >
            <span>Finance</span>
            <strong>5</strong>
            <small>Pending payments</small>
          </Link>

        </div>

      </section>


      {/* Quick Actions */}

      <section className="dashboard-panel">

        <div className="dashboard-panel-header">

          <div>
            <h2>Quick Actions</h2>

            <p>
              Frequently used actions.
            </p>
          </div>

        </div>

        <div className="quick-actions">

          <Link
            to="/dashboard/trade-cases/new"
            className="quick-action"
          >
            New Trade Case
          </Link>

          <Link
            to="/dashboard/sales"
            className="quick-action"
          >
            New Sale
          </Link>

          <Link
            to="/dashboard/procurement"
            className="quick-action"
          >
            New Purchase
          </Link>

          <Link
            to="/dashboard/logistics"
            className="quick-action"
          >
            View Shipments
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Dashboard
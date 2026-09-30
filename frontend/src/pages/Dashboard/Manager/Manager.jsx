import { Link } from 'react-router-dom'
import './Manager.css'

function Manager() {
  return (
    <main className="manager-page">

      <header className="manager-header">
        <div>
          <span className="manager-label">
            MANAGEMENT
          </span>

          <h1>Manager Dashboard</h1>

          <p>
            Monitor business performance, trade operations, and financial activity.
          </p>
        </div>

        <div className="manager-user">
          <span>Welcome</span>
          <strong>Manager</strong>
        </div>
      </header>


      {/* Main KPIs */}

      <section className="manager-summary">

        <article className="manager-card">
          <span>Active Trade Cases</span>
          <strong>24</strong>
          <small>8 sales · 16 purchases</small>
        </article>

        <article className="manager-card">
          <span>Total Trade Value</span>
          <strong>$2.48M</strong>
          <small>Current active cases</small>
        </article>

        <article className="manager-card">
          <span>Estimated Profit</span>
          <strong>$320K</strong>
          <small>Current trade cases</small>
        </article>

        <article className="manager-card">
          <span>Pending Payments</span>
          <strong>$170K</strong>
          <small>5 payment requests</small>
        </article>

      </section>


      {/* Trade Performance */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>Trade Performance</h2>

            <p>
              Current commercial performance.
            </p>
          </div>
        </div>

        <div className="performance-grid">

          <div className="performance-item">
            <span>Sales Value</span>
            <strong>$1.24M</strong>
          </div>

          <div className="performance-item">
            <span>Purchase Value</span>
            <strong>$920K</strong>
          </div>

          <div className="performance-item">
            <span>Gross Profit</span>
            <strong>$320K</strong>
          </div>

          <div className="performance-item">
            <span>Total Tonnage</span>
            <strong>685 Tons</strong>
          </div>

        </div>

      </section>


      {/* Trade Cases */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>Trade Cases</h2>

            <p>
              Overview of current case statuses.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            View All
          </Link>
        </div>

        <div className="case-status-grid">

          <div className="case-status-card">
            <span>Pending</span>
            <strong>5</strong>
          </div>

          <div className="case-status-card">
            <span>In Progress</span>
            <strong>24</strong>
          </div>

          <div className="case-status-card">
            <span>Completed</span>
            <strong>13</strong>
          </div>

        </div>

      </section>


      {/* Department Activity */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>Department Activity</h2>

            <p>
              Current activity across company departments.
            </p>
          </div>
        </div>

        <div className="department-grid">

          <Link
            to="/dashboard/sales"
            className="department-card"
          >
            <span>Sales</span>
            <strong>12</strong>
            <small>Pending requests</small>
          </Link>

          <Link
            to="/dashboard/procurement"
            className="department-card"
          >
            <span>Procurement</span>
            <strong>9</strong>
            <small>Active purchases</small>
          </Link>

          <Link
            to="/dashboard/logistics"
            className="department-card"
          >
            <span>Logistics</span>
            <strong>8</strong>
            <small>Active shipments</small>
          </Link>

          <Link
            to="/dashboard/customs"
            className="department-card"
          >
            <span>Customs</span>
            <strong>6</strong>
            <small>Open declarations</small>
          </Link>

          <Link
            to="/dashboard/finance"
            className="department-card"
          >
            <span>Finance</span>
            <strong>5</strong>
            <small>Pending payments</small>
          </Link>

        </div>

      </section>


      {/* Recent Cases */}

      <section className="manager-panel">

        <div className="manager-panel-header">
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

        <div className="manager-table-wrapper">

          <table className="manager-table">

            <thead>
              <tr>
                <th>Case</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 Tons</td>
                <td>$340,000</td>
                <td>
                  <span className="manager-status active">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 Tons</td>
                <td>$160,000</td>
                <td>
                  <span className="manager-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>TR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 Tons</td>
                <td>$207,000</td>
                <td>
                  <span className="manager-status completed">
                    Completed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* Alerts */}

      <section className="manager-panel">

        <div className="manager-panel-header">
          <div>
            <h2>Management Alerts</h2>

            <p>
              Items requiring attention.
            </p>
          </div>
        </div>

        <div className="manager-alerts">

          <div className="manager-alert warning">
            <strong>5 payment requests</strong>
            <span>
              are waiting for financial approval.
            </span>
          </div>

          <div className="manager-alert warning">
            <strong>3 shipments</strong>
            <span>
              are currently waiting for customs clearance.
            </span>
          </div>

          <div className="manager-alert info">
            <strong>2 trade cases</strong>
            <span>
              have exceeded their expected processing time.
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Manager
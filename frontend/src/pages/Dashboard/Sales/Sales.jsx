import { Link } from 'react-router-dom'
import './Sales.css'

function Sales() {
  return (
    <main className="sales-page">

      <header className="sales-header">
        <div>
          <span className="sales-label">
            SALES
          </span>

          <h1>Sales</h1>

          <p>
            Manage customers, sales requests, quotations, and sales orders.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases/new"
          className="sales-button"
        >
          New Sale
        </Link>
      </header>


      {/* Summary Cards */}

      <section className="sales-summary">

        <article className="sales-card">
          <span>Pending Quotes</span>
          <strong>12</strong>
        </article>

        <article className="sales-card">
          <span>Active Sales</span>
          <strong>18</strong>
        </article>

        <article className="sales-card">
          <span>Total Sales Value</span>
          <strong>$1.24M</strong>
        </article>

        <article className="sales-card">
          <span>Pending Approval</span>
          <strong>5</strong>
        </article>

      </section>


      {/* Sales Requests */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>Sales Requests</h2>

            <p>
              Customer requests and quotations.
            </p>
          </div>

          <span>12 Requests</span>
        </div>

        <div className="sales-table-wrapper">

          <table className="sales-table">

            <thead>
              <tr>
                <th>Request</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SR-001</td>
                <td>Global Foods Ltd.</td>
                <td>Akbari</td>
                <td>40 Tons</td>
                <td>Dubai, UAE</td>
                <td>
                  <span className="sales-status pending">
                    Pending
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-001">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-002</td>
                <td>Euro Nuts GmbH</td>
                <td>Ahmad Aghaei</td>
                <td>20 Tons</td>
                <td>Hamburg, Germany</td>
                <td>
                  <span className="sales-status quotation">
                    Quotation
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-002">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-003</td>
                <td>Dubai Foods LLC</td>
                <td>Fandoghi</td>
                <td>30 Tons</td>
                <td>Dubai, UAE</td>
                <td>
                  <span className="sales-status approved">
                    Approved
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-003">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>SR-004</td>
                <td>Global Nuts GmbH</td>
                <td>Kalleh Ghouchi</td>
                <td>25 Tons</td>
                <td>Berlin, Germany</td>
                <td>
                  <span className="sales-status active">
                    In Progress
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-004">
                    View
                  </Link>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* Sales Pipeline */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>Sales Pipeline</h2>

            <p>
              Current sales process.
            </p>
          </div>
        </div>

        <div className="sales-pipeline">

          <div className="pipeline-step">
            <span>01</span>
            <strong>Request</strong>
            <small>12</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>02</span>
            <strong>Quotation</strong>
            <small>8</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>03</span>
            <strong>Negotiation</strong>
            <small>5</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>04</span>
            <strong>Approved</strong>
            <small>4</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>05</span>
            <strong>Trade Case</strong>
            <small>3</small>
          </div>

        </div>

      </section>


      {/* Recent Sales */}

      <section className="sales-panel">

        <div className="sales-panel-header">
          <div>
            <h2>Recent Sales</h2>

            <p>
              Recently created sales cases.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            View All
          </Link>
        </div>

        <div className="recent-sales">

          <div className="recent-sale">
            <div>
              <strong>TR-001</strong>
              <span>Global Foods Ltd. · Akbari · 40 Tons</span>
            </div>

            <span className="sales-status active">
              In Progress
            </span>
          </div>

          <div className="recent-sale">
            <div>
              <strong>TR-002</strong>
              <span>Euro Nuts GmbH · Ahmad Aghaei · 20 Tons</span>
            </div>

            <span className="sales-status quotation">
              Quotation
            </span>
          </div>

          <div className="recent-sale">
            <div>
              <strong>TR-004</strong>
              <span>Global Nuts GmbH · Kalleh Ghouchi · 25 Tons</span>
            </div>

            <span className="sales-status approved">
              Approved
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Sales
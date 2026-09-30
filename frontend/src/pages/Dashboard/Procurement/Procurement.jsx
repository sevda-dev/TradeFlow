import { Link } from 'react-router-dom'
import './Procurement.css'

function Procurement() {
  return (
    <main className="procurement-page">

      <header className="procurement-header">
        <div>
          <span className="procurement-label">
            PROCUREMENT
          </span>

          <h1>Procurement</h1>

          <p>
            Manage suppliers, purchase requests, sourcing, and procurement orders.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases/new"
          className="procurement-button"
        >
          New Purchase
        </Link>
      </header>


      {/* Summary Cards */}

      <section className="procurement-summary">

        <article className="procurement-card">
          <span>Purchase Requests</span>
          <strong>15</strong>
        </article>

        <article className="procurement-card">
          <span>Active Purchases</span>
          <strong>9</strong>
        </article>

        <article className="procurement-card">
          <span>Total Procurement</span>
          <strong>$680K</strong>
        </article>

        <article className="procurement-card">
          <span>Pending Approval</span>
          <strong>4</strong>
        </article>

      </section>


      {/* Purchase Requests */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>Purchase Requests</h2>

            <p>
              Current sourcing and purchase requests.
            </p>
          </div>

          <span>15 Requests</span>
        </div>

        <div className="procurement-table-wrapper">

          <table className="procurement-table">

            <thead>
              <tr>
                <th>Request</th>
                <th>Supplier</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delivery</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>PR-001</td>
                <td>Kerman Pistachio Co.</td>
                <td>Akbari</td>
                <td>40 Tons</td>
                <td>$7,800 / Ton</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status sourcing">
                    Sourcing
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-001">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>PR-002</td>
                <td>Rafsanjan Agro</td>
                <td>Ahmad Aghaei</td>
                <td>20 Tons</td>
                <td>$7,500 / Ton</td>
                <td>Rafsanjan</td>
                <td>
                  <span className="procurement-status pending">
                    Pending
                  </span>
                </td>
                <td>
                  <Link to="/dashboard/trade-cases/TR-002">
                    View
                  </Link>
                </td>
              </tr>

              <tr>
                <td>PR-003</td>
                <td>Iran Nuts Trading</td>
                <td>Fandoghi</td>
                <td>30 Tons</td>
                <td>$6,900 / Ton</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status approved">
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
                <td>PR-004</td>
                <td>Kerman Agro</td>
                <td>Kalleh Ghouchi</td>
                <td>25 Tons</td>
                <td>$7,200 / Ton</td>
                <td>Kerman</td>
                <td>
                  <span className="procurement-status active">
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


      {/* Suppliers */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>Suppliers</h2>

            <p>
              Main suppliers and their current activity.
            </p>
          </div>

          <span>24 Suppliers</span>
        </div>

        <div className="suppliers-grid">

          <article className="supplier-card">
            <div>
              <strong>Kerman Pistachio Co.</strong>
              <span>Kerman, Iran</span>
            </div>

            <div className="supplier-info">
              <span>Active Orders</span>
              <strong>3</strong>
            </div>
          </article>

          <article className="supplier-card">
            <div>
              <strong>Rafsanjan Agro</strong>
              <span>Rafsanjan, Iran</span>
            </div>

            <div className="supplier-info">
              <span>Active Orders</span>
              <strong>2</strong>
            </div>
          </article>

          <article className="supplier-card">
            <div>
              <strong>Iran Nuts Trading</strong>
              <span>Kerman, Iran</span>
            </div>

            <div className="supplier-info">
              <span>Active Orders</span>
              <strong>4</strong>
            </div>
          </article>

        </div>

      </section>


      {/* Procurement Pipeline */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>Procurement Pipeline</h2>

            <p>
              Current purchase process.
            </p>
          </div>
        </div>

        <div className="procurement-pipeline">

          <div className="pipeline-step">
            <span>01</span>
            <strong>Request</strong>
            <small>15</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>02</span>
            <strong>Sourcing</strong>
            <small>10</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>03</span>
            <strong>Supplier Offer</strong>
            <small>7</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>04</span>
            <strong>Approved</strong>
            <small>5</small>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="pipeline-step">
            <span>05</span>
            <strong>Purchase Order</strong>
            <small>4</small>
          </div>

        </div>

      </section>


      {/* Recent Purchases */}

      <section className="procurement-panel">

        <div className="procurement-panel-header">
          <div>
            <h2>Recent Purchases</h2>

            <p>
              Recently created procurement cases.
            </p>
          </div>

          <Link to="/dashboard/trade-cases">
            View All
          </Link>
        </div>

        <div className="recent-purchases">

          <div className="recent-purchase">
            <div>
              <strong>TR-001</strong>
              <span>
                Kerman Pistachio Co. · Akbari · 40 Tons
              </span>
            </div>

            <span className="procurement-status sourcing">
              Sourcing
            </span>
          </div>

          <div className="recent-purchase">
            <div>
              <strong>TR-002</strong>
              <span>
                Rafsanjan Agro · Ahmad Aghaei · 20 Tons
              </span>
            </div>

            <span className="procurement-status pending">
              Pending
            </span>
          </div>

          <div className="recent-purchase">
            <div>
              <strong>TR-003</strong>
              <span>
                Iran Nuts Trading · Fandoghi · 30 Tons
              </span>
            </div>

            <span className="procurement-status approved">
              Approved
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Procurement
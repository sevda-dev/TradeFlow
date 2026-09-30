import './Shipments.css'

function Shipments() {
  return (
    <main className="shipments-page">

      <header className="shipments-header">
        <div>
          <span className="shipments-label">
            LOGISTICS
          </span>

          <h1>Shipments</h1>

          <p>
            View and manage physical shipments related to trade cases.
          </p>
        </div>

        <button className="shipments-button">
          New Shipment
        </button>
      </header>

      <section className="shipments-summary">

        <div className="shipment-summary-card">
          <span>Total Shipments</span>
          <strong>36</strong>
        </div>

        <div className="shipment-summary-card">
          <span>In Transit</span>
          <strong>12</strong>
        </div>

        <div className="shipment-summary-card">
          <span>Pending</span>
          <strong>8</strong>
        </div>

        <div className="shipment-summary-card">
          <span>Delivered</span>
          <strong>16</strong>
        </div>

      </section>

      <section className="shipments-panel">

        <div className="shipments-panel-header">
          <h2>All Shipments</h2>

          <div className="shipments-filters">
            <input
              type="text"
              placeholder="Search shipments..."
            />

            <select defaultValue="all">
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="transit">In Transit</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="shipments-table-wrapper">

          <table className="shipments-table">

            <thead>
              <tr>
                <th>Shipment</th>
                <th>Trade Case</th>
                <th>Quantity</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SH-001</td>
                <td>TR-001</td>
                <td>20 Tons</td>
                <td>Ali Rezaei</td>
                <td>12A-34567</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status transit">
                    In Transit
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-002</td>
                <td>TR-001</td>
                <td>20 Tons</td>
                <td>Hossein Karimi</td>
                <td>45B-67890</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-003</td>
                <td>TR-002</td>
                <td>18 Tons</td>
                <td>Reza Ahmadi</td>
                <td>21C-11223</td>
                <td>Abu Dhabi</td>
                <td>
                  <span className="shipment-status delivered">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-004</td>
                <td>TR-003</td>
                <td>15 Tons</td>
                <td>Mehdi Karimi</td>
                <td>32D-44556</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status transit">
                    In Transit
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

export default Shipments
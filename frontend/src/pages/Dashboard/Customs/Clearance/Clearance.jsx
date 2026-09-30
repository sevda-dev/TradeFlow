import './Clearance.css'

function Clearance() {
  return (
    <main className="clearance-page">

      <header className="clearance-header">
        <div>
          <span className="clearance-label">
            CUSTOMS
          </span>

          <h1>Clearance</h1>

          <p>
            Track customs clearance operations, costs, and brokers.
          </p>
        </div>

        <button className="clearance-button">
          New Clearance
        </button>
      </header>

      <section className="clearance-summary">

        <div className="clearance-summary-card">
          <span>Active Clearance</span>
          <strong>9</strong>
        </div>

        <div className="clearance-summary-card">
          <span>Waiting for Documents</span>
          <strong>4</strong>
        </div>

        <div className="clearance-summary-card">
          <span>Cleared</span>
          <strong>23</strong>
        </div>

        <div className="clearance-summary-card">
          <span>Total Costs</span>
          <strong>$42,500</strong>
        </div>

      </section>

      <section className="clearance-panel">

        <div className="clearance-panel-header">

          <div>
            <h2>Clearance Operations</h2>

            <p>
              Monitor the customs clearance process for shipments.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="documents">Waiting for Documents</option>
            <option value="cleared">Cleared</option>
          </select>

        </div>

        <div className="clearance-table-wrapper">

          <table className="clearance-table">

            <thead>
              <tr>
                <th>Clearance</th>
                <th>Declaration</th>
                <th>Shipment</th>
                <th>Broker</th>
                <th>Customs Cost</th>
                <th>Commission</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CL-001</td>
                <td>CD-001</td>
                <td>SH-001</td>
                <td>Global Customs Co.</td>
                <td>$3,200</td>
                <td>$800</td>
                <td>
                  <span className="clearance-status active">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-002</td>
                <td>CD-002</td>
                <td>SH-003</td>
                <td>Persian Customs Services</td>
                <td>$2,100</td>
                <td>$550</td>
                <td>
                  <span className="clearance-status documents">
                    Documents
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-003</td>
                <td>CD-003</td>
                <td>SH-004</td>
                <td>Global Customs Co.</td>
                <td>$4,500</td>
                <td>$1,000</td>
                <td>
                  <span className="clearance-status cleared">
                    Cleared
                  </span>
                </td>
              </tr>

              <tr>
                <td>CL-004</td>
                <td>CD-004</td>
                <td>SH-005</td>
                <td>Iran Customs Group</td>
                <td>$2,800</td>
                <td>$700</td>
                <td>
                  <span className="clearance-status active">
                    In Progress
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

export default Clearance
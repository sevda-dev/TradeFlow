import './Declarations.css'

function Declarations() {
  return (
    <main className="declarations-page">

      <header className="declarations-header">
        <div>
          <span className="declarations-label">
            CUSTOMS
          </span>

          <h1>Declarations</h1>

          <p>
            Create and manage customs declarations for trade shipments.
          </p>
        </div>

        <button className="declarations-button">
          New Declaration
        </button>
      </header>

      <section className="declarations-summary">

        <div className="declaration-summary-card">
          <span>Total Declarations</span>
          <strong>35</strong>
        </div>

        <div className="declaration-summary-card">
          <span>Draft</span>
          <strong>6</strong>
        </div>

        <div className="declaration-summary-card">
          <span>Submitted</span>
          <strong>14</strong>
        </div>

        <div className="declaration-summary-card">
          <span>Cleared</span>
          <strong>15</strong>
        </div>

      </section>

      <section className="declarations-panel">

        <div className="declarations-panel-header">

          <div>
            <h2>Customs Declarations</h2>

            <p>
              Track all customs declarations related to trade cases.
            </p>
          </div>

          <div className="declarations-filters">

            <input
              type="text"
              placeholder="Search declarations..."
            />

            <select defaultValue="all">
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="submitted">Submitted</option>
              <option value="cleared">Cleared</option>
            </select>

          </div>

        </div>

        <div className="declarations-table-wrapper">

          <table className="declarations-table">

            <thead>
              <tr>
                <th>Declaration</th>
                <th>Trade Case</th>
                <th>Shipment</th>
                <th>Product</th>
                <th>Destination</th>
                <th>Broker</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CD-001</td>
                <td>TR-001</td>
                <td>SH-001</td>
                <td>Akbari</td>
                <td>Dubai</td>
                <td>Global Customs Co.</td>
                <td>
                  <span className="declaration-status submitted">
                    Submitted
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-002</td>
                <td>TR-002</td>
                <td>SH-003</td>
                <td>Ahmad Aghaei</td>
                <td>Abu Dhabi</td>
                <td>Persian Customs Services</td>
                <td>
                  <span className="declaration-status draft">
                    Draft
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-003</td>
                <td>TR-003</td>
                <td>SH-004</td>
                <td>Fandoghi</td>
                <td>Dubai</td>
                <td>Global Customs Co.</td>
                <td>
                  <span className="declaration-status cleared">
                    Cleared
                  </span>
                </td>
              </tr>

              <tr>
                <td>CD-004</td>
                <td>TR-004</td>
                <td>SH-005</td>
                <td>Kalleh Ghouchi</td>
                <td>Dubai</td>
                <td>Iran Customs Group</td>
                <td>
                  <span className="declaration-status submitted">
                    Submitted
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

export default Declarations
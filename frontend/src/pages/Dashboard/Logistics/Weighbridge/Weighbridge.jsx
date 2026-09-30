import './Weighbridge.css'

function Weighbridge() {
  return (
    <main className="weighbridge-page">

      <header className="weighbridge-header">
        <div>
          <span className="weighbridge-label">
            LOGISTICS
          </span>

          <h1>Weighbridge</h1>

          <p>
            Record and manage shipment weight information.
          </p>
        </div>

        <button className="weighbridge-button">
          New Weighbridge Record
        </button>
      </header>

      <section className="weighbridge-summary">

        <div className="weight-summary-card">
          <span>Total Records</span>
          <strong>42</strong>
        </div>

        <div className="weight-summary-card">
          <span>Pending</span>
          <strong>5</strong>
        </div>

        <div className="weight-summary-card">
          <span>Completed Today</span>
          <strong>8</strong>
        </div>

        <div className="weight-summary-card">
          <span>Total Net Weight</span>
          <strong>186 Tons</strong>
        </div>

      </section>

      <section className="weighbridge-panel">

        <div className="weighbridge-panel-header">
          <h2>Weighbridge Records</h2>

          <input
            type="text"
            placeholder="Search shipment..."
          />
        </div>

        <div className="weighbridge-table-wrapper">

          <table className="weighbridge-table">

            <thead>
              <tr>
                <th>Record</th>
                <th>Shipment</th>
                <th>Vehicle</th>
                <th>Gross Weight</th>
                <th>Tare Weight</th>
                <th>Net Weight</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>WB-001</td>
                <td>SH-001</td>
                <td>12A-34567</td>
                <td>42,000 kg</td>
                <td>2,000 kg</td>
                <td>40,000 kg</td>
                <td>
                  <span className="weight-status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>WB-002</td>
                <td>SH-002</td>
                <td>45B-67890</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>
                  <span className="weight-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>WB-003</td>
                <td>SH-003</td>
                <td>21C-11223</td>
                <td>31,500 kg</td>
                <td>1,500 kg</td>
                <td>30,000 kg</td>
                <td>
                  <span className="weight-status completed">
                    Completed
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

export default Weighbridge
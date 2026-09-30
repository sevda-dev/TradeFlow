import './Drivers.css'

function Drivers() {
  return (
    <main className="drivers-page">

      <header className="drivers-header">
        <div>
          <span className="drivers-label">
            LOGISTICS
          </span>

          <h1>Drivers</h1>

          <p>
            Manage drivers and their transportation assignments.
          </p>
        </div>

        <button className="drivers-button">
          Add Driver
        </button>
      </header>

      <section className="drivers-summary">

        <div className="driver-summary-card">
          <span>Total Drivers</span>
          <strong>32</strong>
        </div>

        <div className="driver-summary-card">
          <span>Available</span>
          <strong>18</strong>
        </div>

        <div className="driver-summary-card">
          <span>On Shipment</span>
          <strong>12</strong>
        </div>

        <div className="driver-summary-card">
          <span>Inactive</span>
          <strong>2</strong>
        </div>

      </section>

      <section className="drivers-panel">

        <div className="drivers-panel-header">
          <h2>Driver List</h2>

          <input
            type="text"
            placeholder="Search drivers..."
          />
        </div>

        <div className="drivers-table-wrapper">

          <table className="drivers-table">

            <thead>
              <tr>
                <th>Driver</th>
                <th>Phone</th>
                <th>License</th>
                <th>Vehicle</th>
                <th>Current Shipment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ali Rezaei</td>
                <td>+98 912 000 0000</td>
                <td>DL-10021</td>
                <td>12A-34567</td>
                <td>SH-001</td>
                <td>
                  <span className="driver-status active">
                    On Shipment
                  </span>
                </td>
              </tr>

              <tr>
                <td>Hossein Karimi</td>
                <td>+98 913 000 0000</td>
                <td>DL-10022</td>
                <td>45B-67890</td>
                <td>SH-002</td>
                <td>
                  <span className="driver-status pending">
                    Assigned
                  </span>
                </td>
              </tr>

              <tr>
                <td>Reza Ahmadi</td>
                <td>+98 914 000 0000</td>
                <td>DL-10023</td>
                <td>21C-11223</td>
                <td>—</td>
                <td>
                  <span className="driver-status available">
                    Available
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

export default Drivers
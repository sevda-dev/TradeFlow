import './Vehicles.css'

function Vehicles() {
  return (
    <main className="vehicles-page">

      <header className="vehicles-header">
        <div>
          <span className="vehicles-label">
            LOGISTICS
          </span>

          <h1>Vehicles</h1>

          <p>
            Manage registered vehicles and transportation information.
          </p>
        </div>

        <button className="vehicles-button">
          Add Vehicle
        </button>
      </header>

      <section className="vehicles-summary">

        <div className="vehicle-summary-card">
          <span>Total Vehicles</span>
          <strong>24</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>Available</span>
          <strong>9</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>On Shipment</span>
          <strong>12</strong>
        </div>

        <div className="vehicle-summary-card">
          <span>Maintenance</span>
          <strong>3</strong>
        </div>

      </section>

      <section className="vehicles-panel">

        <div className="vehicles-panel-header">
          <h2>Vehicle List</h2>

          <input
            type="text"
            placeholder="Search vehicles..."
          />
        </div>

        <div className="vehicles-table-wrapper">

          <table className="vehicles-table">

            <thead>
              <tr>
                <th>Plate</th>
                <th>Vehicle Type</th>
                <th>Driver</th>
                <th>Capacity</th>
                <th>Current Shipment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>12A-34567</td>
                <td>Truck</td>
                <td>Ali Rezaei</td>
                <td>25 Tons</td>
                <td>SH-001</td>
                <td>
                  <span className="vehicle-status active">
                    On Shipment
                  </span>
                </td>
              </tr>

              <tr>
                <td>45B-67890</td>
                <td>Truck</td>
                <td>Hossein Karimi</td>
                <td>25 Tons</td>
                <td>SH-002</td>
                <td>
                  <span className="vehicle-status assigned">
                    Assigned
                  </span>
                </td>
              </tr>

              <tr>
                <td>21C-11223</td>
                <td>Trailer</td>
                <td>—</td>
                <td>30 Tons</td>
                <td>—</td>
                <td>
                  <span className="vehicle-status available">
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

export default Vehicles
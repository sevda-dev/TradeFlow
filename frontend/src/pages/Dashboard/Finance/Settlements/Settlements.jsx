import './Settlements.css'

function Settlements() {
  return (
    <main className="settlements-page">

      <header className="settlements-header">
        <div>
          <span className="settlements-label">
            FINANCE
          </span>

          <h1>Settlements</h1>

          <p>
            Manage final financial settlements of trade cases.
          </p>
        </div>

        <button className="settlements-button">
          New Settlement
        </button>
      </header>

      <section className="settlements-summary">

        <div className="settlement-summary-card">
          <span>Total Settlements</span>
          <strong>28</strong>
        </div>

        <div className="settlement-summary-card">
          <span>Pending</span>
          <strong>8</strong>
        </div>

        <div className="settlement-summary-card">
          <span>Completed</span>
          <strong>20</strong>
        </div>

        <div className="settlement-summary-card">
          <span>Remaining Balance</span>
          <strong>$170,000</strong>
        </div>

      </section>

      <section className="settlements-panel">

        <div className="settlements-panel-header">

          <div>
            <h2>Trade Case Settlements</h2>

            <p>
              Review final balances and settlement status.
            </p>
          </div>

          <select defaultValue="all">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

        </div>

        <div className="settlements-table-wrapper">

          <table className="settlements-table">

            <thead>
              <tr>
                <th>Settlement</th>
                <th>Trade Case</th>
                <th>Total Value</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Settlement Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>ST-001</td>
                <td>TR-001</td>
                <td>$340,000</td>
                <td>$170,000</td>
                <td>$170,000</td>
                <td>—</td>
                <td>
                  <span className="settlement-status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-002</td>
                <td>TR-002</td>
                <td>$170,000</td>
                <td>$170,000</td>
                <td>$0</td>
                <td>Sep 18, 2026</td>
                <td>
                  <span className="settlement-status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-003</td>
                <td>TR-003</td>
                <td>$255,000</td>
                <td>$255,000</td>
                <td>$0</td>
                <td>Sep 15, 2026</td>
                <td>
                  <span className="settlement-status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>ST-004</td>
                <td>TR-004</td>
                <td>$212,500</td>
                <td>$100,000</td>
                <td>$112,500</td>
                <td>—</td>
                <td>
                  <span className="settlement-status pending">
                    Pending
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

export default Settlements
import './AllCases.css'

function AllCases() {
  return (
    <main className="all-cases-page">

      <header className="all-cases-header">

        <div>
          <span className="all-cases-label">
            TRADE CASES
          </span>

          <h1>
            All Cases
          </h1>

          <p>
            View and manage all commercial trade cases.
          </p>
        </div>

        <a
          href="/dashboard/trade-cases/new"
          className="all-cases-button"
        >
          New Case
        </a>

      </header>


      <section className="cases-filters">

        <input
          type="text"
          placeholder="Search cases..."
        />

        <select defaultValue="all">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="active">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select defaultValue="all">
          <option value="all">All Types</option>
          <option value="sale">Sale</option>
          <option value="purchase">Purchase</option>
        </select>

      </section>


      <section className="cases-panel">

        <div className="cases-panel-header">
          <h2>
            Trade Cases
          </h2>

          <span>
            24 Cases
          </span>
        </div>


        <div className="cases-table-wrapper">

          <table className="cases-table">

            <thead>
              <tr>
                <th>Case</th>
                <th>Type</th>
                <th>Customer</th>
                <th>Supplier</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              <tr>
                <td>TR-001</td>
                <td>Sale</td>
                <td>Global Foods Ltd.</td>
                <td>Kerman Pistachio Co.</td>
                <td>Akbari</td>
                <td>40 Tons</td>
                <td>
                  <span className="case-status active">
                    In Progress
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-001">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-002</td>
                <td>Sale</td>
                <td>Euro Nuts GmbH</td>
                <td>Rafsanjan Agro</td>
                <td>Ahmad Aghaei</td>
                <td>20 Tons</td>
                <td>
                  <span className="case-status pending">
                    Pending
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-002">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-003</td>
                <td>Purchase</td>
                <td>Dubai Foods LLC</td>
                <td>Iran Nuts Trading</td>
                <td>Fandoghi</td>
                <td>30 Tons</td>
                <td>
                  <span className="case-status completed">
                    Completed
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-003">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>TR-004</td>
                <td>Sale</td>
                <td>Global Nuts GmbH</td>
                <td>Kerman Agro</td>
                <td>Kalleh Ghouchi</td>
                <td>25 Tons</td>
                <td>
                  <span className="case-status active">
                    In Progress
                  </span>
                </td>
                <td>
                  <a href="/dashboard/trade-cases/TR-004">
                    View
                  </a>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default AllCases
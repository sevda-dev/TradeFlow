import './Transactions.css'

function Transactions() {
  return (
    <main className="transactions-page">

      <header className="transactions-header">
        <div>
          <span className="transactions-label">
            FINANCE
          </span>

          <h1>Transactions</h1>

          <p>
            View all financial transactions and money movements.
          </p>
        </div>
      </header>

      <section className="transactions-summary">

        <div className="transaction-summary-card">
          <span>Total Transactions</span>
          <strong>148</strong>
        </div>

        <div className="transaction-summary-card">
          <span>Total Income</span>
          <strong>$520,000</strong>
        </div>

        <div className="transaction-summary-card">
          <span>Total Expenses</span>
          <strong>$315,000</strong>
        </div>

        <div className="transaction-summary-card">
          <span>Net Balance</span>
          <strong>$205,000</strong>
        </div>

      </section>

      <section className="transactions-panel">

        <div className="transactions-panel-header">

          <div>
            <h2>Transaction History</h2>

            <p>
              Financial movements recorded in the system.
            </p>
          </div>

          <div className="transactions-filters">

            <input
              type="text"
              placeholder="Search transactions..."
            />

            <select defaultValue="all">
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

          </div>

        </div>

        <div className="transactions-table-wrapper">

          <table className="transactions-table">

            <thead>
              <tr>
                <th>Transaction</th>
                <th>Trade Case</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TX-001</td>
                <td>TR-001</td>
                <td>Customer Payment</td>
                <td>
                  <span className="transaction-type income">
                    Income
                  </span>
                </td>
                <td>$170,000</td>
                <td>Sep 20, 2026</td>
              </tr>

              <tr>
                <td>TX-002</td>
                <td>TR-001</td>
                <td>Supplier Payment</td>
                <td>
                  <span className="transaction-type expense">
                    Expense
                  </span>
                </td>
                <td>$80,000</td>
                <td>Sep 20, 2026</td>
              </tr>

              <tr>
                <td>TX-003</td>
                <td>TR-002</td>
                <td>Freight Cost</td>
                <td>
                  <span className="transaction-type expense">
                    Expense
                  </span>
                </td>
                <td>$12,500</td>
                <td>Sep 19, 2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  )
}

export default Transactions
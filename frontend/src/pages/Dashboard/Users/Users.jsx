import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
  return (
    <main className="users-page">

      <header className="users-header">

        <div>
          <span className="users-label">
            ADMINISTRATION
          </span>

          <h1>Users</h1>

          <p>
            Manage users, roles, departments, and account status.
          </p>
        </div>

        <button className="add-user-button">
          Add User
        </button>

      </header>


      {/* Summary */}

      <section className="users-summary">

        <article className="users-summary-card">
          <span>Total Users</span>
          <strong>24</strong>
          <small>Registered accounts</small>
        </article>

        <article className="users-summary-card">
          <span>Active Users</span>
          <strong>20</strong>
          <small>Currently active</small>
        </article>

        <article className="users-summary-card">
          <span>Administrators</span>
          <strong>2</strong>
          <small>Full system access</small>
        </article>

        <article className="users-summary-card">
          <span>Pending</span>
          <strong>2</strong>
          <small>Awaiting activation</small>
        </article>

      </section>


      {/* Filters */}

      <section className="users-filters">

        <input
          type="text"
          placeholder="Search users..."
        />

        <select defaultValue="all">
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="sales">Sales</option>
          <option value="procurement">Procurement</option>
          <option value="logistics">Logistics</option>
          <option value="customs">Customs</option>
          <option value="finance">Finance</option>
        </select>

        <select defaultValue="all">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>

      </section>


      {/* Users Table */}

      <section className="users-panel">

        <div className="users-panel-header">

          <div>
            <h2>System Users</h2>

            <p>
              Users with access to the PistaTrade ERP system.
            </p>
          </div>

          <span>24 Users</span>

        </div>


        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      A
                    </div>

                    <div>
                      <strong>Admin User</strong>
                      <span>admin</span>
                    </div>
                  </div>
                </td>

                <td>
                  admin@pistatrade.com
                </td>

                <td>
                  <span className="role-badge admin">
                    Administrator
                  </span>
                </td>

                <td>
                  Management
                </td>

                <td>
                  <span className="user-status active">
                    Active
                  </span>
                </td>

                <td>
                  Sep 30, 2026
                </td>

                <td>
                  <Link to="/dashboard/profile">
                    View
                  </Link>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      S
                    </div>

                    <div>
                      <strong>Sarah Miller</strong>
                      <span>sarah</span>
                    </div>
                  </div>
                </td>

                <td>
                  sarah@pistatrade.com
                </td>

                <td>
                  <span className="role-badge sales">
                    Sales
                  </span>
                </td>

                <td>
                  Sales
                </td>

                <td>
                  <span className="user-status active">
                    Active
                  </span>
                </td>

                <td>
                  Sep 29, 2026
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      M
                    </div>

                    <div>
                      <strong>Michael Brown</strong>
                      <span>michael</span>
                    </div>
                  </div>
                </td>

                <td>
                  michael@pistatrade.com
                </td>

                <td>
                  <span className="role-badge logistics">
                    Logistics
                  </span>
                </td>

                <td>
                  Logistics
                </td>

                <td>
                  <span className="user-status active">
                    Active
                  </span>
                </td>

                <td>
                  Sep 28, 2026
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      D
                    </div>

                    <div>
                      <strong>Daniel Smith</strong>
                      <span>daniel</span>
                    </div>
                  </div>
                </td>

                <td>
                  daniel@pistatrade.com
                </td>

                <td>
                  <span className="role-badge finance">
                    Finance
                  </span>
                </td>

                <td>
                  Finance
                </td>

                <td>
                  <span className="user-status pending">
                    Pending
                  </span>
                </td>

                <td>
                  Never
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      R
                    </div>

                    <div>
                      <strong>Robert Wilson</strong>
                      <span>robert</span>
                    </div>
                  </div>
                </td>

                <td>
                  robert@pistatrade.com
                </td>

                <td>
                  <span className="role-badge manager">
                    Manager
                  </span>
                </td>

                <td>
                  Management
                </td>

                <td>
                  <span className="user-status inactive">
                    Inactive
                  </span>
                </td>

                <td>
                  Sep 10, 2026
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      <div className="users-footer">

        <Link
          to="/dashboard"
          className="back-dashboard-button"
        >
          Back to Dashboard
        </Link>

      </div>

    </main>
  )
}

export default Users
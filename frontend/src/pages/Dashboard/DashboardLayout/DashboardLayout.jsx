import { NavLink, Outlet } from 'react-router-dom'
import './DashboardLayout.css'

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <aside className="dashboard-sidebar">

        <div className="sidebar-brand">
          <h2>PistaTrade</h2>
          <span>ERP Dashboard</span>
        </div>

        <nav className="sidebar-nav">

          <NavLink
            to="/dashboard"
            end
            className="sidebar-link"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/trade-cases"
            className="sidebar-link"
          >
            Trade Cases
          </NavLink>

          <NavLink
            to="/dashboard/sales"
            className="sidebar-link"
          >
            Sales
          </NavLink>

          <NavLink
            to="/dashboard/procurement"
            className="sidebar-link"
          >
            Procurement
          </NavLink>

          <NavLink
            to="/dashboard/logistics"
            className="sidebar-link"
          >
            Logistics
          </NavLink>

          <NavLink
            to="/dashboard/customs"
            className="sidebar-link"
          >
            Customs
          </NavLink>
          <NavLink
  to="/dashboard/profile"
  className="sidebar-link"
>
  Profile
 </NavLink>
 <NavLink
  to="/dashboard/users"
  className="sidebar-link"
>
  Users
</NavLink>
          <NavLink
            to="/dashboard/finance"
            className="sidebar-link"
          >
            Finance
          </NavLink>

          <NavLink
            to="/dashboard/documents"
            className="sidebar-link"
          >
            Documents
          </NavLink>

        </nav>

      </aside>


      <main className="dashboard-content">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout
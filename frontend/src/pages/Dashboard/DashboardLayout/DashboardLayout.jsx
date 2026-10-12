import { NavLink, Outlet } from 'react-router-dom'
import './DashboardLayout.css'

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <aside className="dashboard-sidebar">

        <div className="sidebar-brand">
          <h2>PistaTrade</h2>
          <span>داشبورد ERP</span>
        </div>

        <nav className="sidebar-nav">

          <NavLink
            to="/dashboard"
            end
            className="sidebar-link"
          >
            داشبورد
          </NavLink>

          <NavLink
            to="/dashboard/trade-cases"
            className="sidebar-link"
          >
            پرونده‌های تجاری
          </NavLink>

          <NavLink
            to="/dashboard/sales"
            className="sidebar-link"
          >
            فروش
          </NavLink>

          <NavLink
            to="/dashboard/procurement"
            className="sidebar-link"
          >
            تأمین
          </NavLink>

          <NavLink
            to="/dashboard/logistics"
            className="sidebar-link"
          >
            لجستیک
          </NavLink>

          <NavLink
            to="/dashboard/customs"
            className="sidebar-link"
          >
            گمرک
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className="sidebar-link"
          >
            پروفایل
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className="sidebar-link"
          >
            کاربران
          </NavLink>

          <NavLink
            to="/dashboard/finance"
            className="sidebar-link"
          >
            امور مالی
          </NavLink>

          <NavLink
            to="/dashboard/documents"
            className="sidebar-link"
          >
            اسناد
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
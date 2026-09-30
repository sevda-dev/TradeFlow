import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './pages/Dashboard/Users/Users'
// =========================
// Components
// =========================

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


// =========================
// Dashboard Layout
// =========================

import DashboardLayout from './pages/Dashboard/DashboardLayout/DashboardLayout'


// =========================
// Public Pages
// =========================

import Home from './pages/public/Home/Home'
import Products from './pages/public/Products/Products'
import ProductDetail from './pages/public/ProductDetail/ProductDetail'
import About from './pages/public/About/About'
import Contact from './pages/public/Contact/Contact'
import RequestQuote from './pages/public/RequestQuote/RequestQuote'
import Profile from './pages/Dashboard/Profile/Profile'

// =========================
// Dashboard
// =========================

import Dashboard from './pages/Dashboard/Dashboard/Dashboard'


// =========================
// Trade Cases
// =========================

import AllCases from './pages/Dashboard/Trade Cases/All Cases/AllCases'
import NewCase from './pages/Dashboard/Trade Cases/New Case/NewCase'
import CaseDetails from './pages/Dashboard/Trade Cases/Case Details/CaseDetails'


// =========================
// Sales
// =========================

import Sales from './pages/Dashboard/Sales/Sales'


// =========================
// Procurement
// =========================

import Procurement from './pages/Dashboard/Procurement/Procurement'

import Login from './pages/public/Login/Login'


// =========================
// Logistics
// =========================

import Logistics from './pages/Dashboard/Logistics/Logistics'
import Shipments from './pages/Dashboard/Logistics/Shipments/Shipments'
import Drivers from './pages/Dashboard/Logistics/Drivers/Drivers'
import Vehicles from './pages/Dashboard/Logistics/Vehicles/Vehicles'
import Weighbridge from './pages/Dashboard/Logistics/Weighbridge/Weighbridge'


// =========================
// Customs
// =========================

import Customs from './pages/Dashboard/Customs/Customs'
import Declarations from './pages/Dashboard/Customs/Declarations/Declarations'
import Clearance from './pages/Dashboard/Customs/Clearance/Clearance'


// =========================
// Finance
// =========================

import Finance from './pages/Dashboard/Finance/Finance'
import PaymentRequests from './pages/Dashboard/Finance/Payment Requests/PaymentRequests'
import Payments from './pages/Dashboard/Finance/Payments/Payments'
import Transactions from './pages/Dashboard/Finance/Transactions/Transactions'
import Settlements from './pages/Dashboard/Finance/Settlements/Settlements'


// =========================
// Documents
// =========================

import Documents from './pages/Dashboard/Documents/Documents'


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* =========================
            PUBLIC WEBSITE
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
  path="/login"
  element={<Login />}
/>

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:slug"
          element={<ProductDetail />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/quote"
          element={<RequestQuote />}
        />


        {/* =========================
            DASHBOARD LAYOUT
        ========================= */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >

          {/* Dashboard Home */}

          <Route
            index
            element={<Dashboard />}
          />

<Route
  path="users"
  element={<Users />}
/>
          {/* =========================
              TRADE CASES
          ========================= */}

          <Route
            path="trade-cases"
            element={<AllCases />}
          />
         <Route
           path="profile"
           element={<Profile />}
          />
          <Route
            path="trade-cases/new"
            element={<NewCase />}
          />

          <Route
            path="trade-cases/:caseId"
            element={<CaseDetails />}
          />


          {/* =========================
              SALES
          ========================= */}

          <Route
            path="sales"
            element={<Sales />}
          />


          {/* =========================
              PROCUREMENT
          ========================= */}

          <Route
            path="procurement"
            element={<Procurement />}
          />


          {/* =========================
              LOGISTICS
          ========================= */}

          <Route
            path="logistics"
            element={<Logistics />}
          />

          <Route
            path="logistics/shipments"
            element={<Shipments />}
          />

          <Route
            path="logistics/drivers"
            element={<Drivers />}
          />

          <Route
            path="logistics/vehicles"
            element={<Vehicles />}
          />

          <Route
            path="logistics/weighbridge"
            element={<Weighbridge />}
          />


          {/* =========================
              CUSTOMS
          ========================= */}

          <Route
            path="customs"
            element={<Customs />}
          />

          <Route
            path="customs/declarations"
            element={<Declarations />}
          />

          <Route
            path="customs/clearance"
            element={<Clearance />}
          />


          {/* =========================
              FINANCE
          ========================= */}

          <Route
            path="finance"
            element={<Finance />}
          />

          <Route
            path="finance/payment-requests"
            element={<PaymentRequests />}
          />

          <Route
            path="finance/payments"
            element={<Payments />}
          />

          <Route
            path="finance/transactions"
            element={<Transactions />}
          />

          <Route
            path="finance/settlements"
            element={<Settlements />}
          />


          {/* =========================
              DOCUMENTS
          ========================= */}

          <Route
            path="documents"
            element={<Documents />}
          />

        </Route>

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
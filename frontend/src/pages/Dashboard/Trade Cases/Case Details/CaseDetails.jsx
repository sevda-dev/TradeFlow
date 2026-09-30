import { Link, useParams } from 'react-router-dom'
import './CaseDetails.css'

function CaseDetails() {
  const { caseId } = useParams()

  return (
    <main className="case-details-page">

      <header className="case-details-header">
        <div>
          <span className="case-details-label">
            TRADE CASE
          </span>

          <h1>{caseId}</h1>

          <p>
            View and manage the details of this commercial trade case.
          </p>
        </div>

        <Link
          to="/dashboard/trade-cases"
          className="back-button"
        >
          Back to Cases
        </Link>
      </header>


      {/* Case Summary */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Case Summary</h2>
            <p>
              Main information about this trade case.
            </p>
          </div>

          <span className="case-status active">
            In Progress
          </span>
        </div>

        <div className="info-grid">

          <div className="info-item">
            <span>Case Type</span>
            <strong>Sale</strong>
          </div>

          <div className="info-item">
            <span>Product</span>
            <strong>Akbari</strong>
          </div>

          <div className="info-item">
            <span>Customer</span>
            <strong>Global Foods Ltd.</strong>
          </div>

          <div className="info-item">
            <span>Supplier</span>
            <strong>Kerman Pistachio Co.</strong>
          </div>

          <div className="info-item">
            <span>Total Quantity</span>
            <strong>40 Tons</strong>
          </div>

          <div className="info-item">
            <span>Destination</span>
            <strong>Dubai, UAE</strong>
          </div>

        </div>

      </section>


      {/* Commercial Information */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Commercial Information</h2>
            <p>
              Pricing and payment information.
            </p>
          </div>
        </div>

        <div className="info-grid">

          <div className="info-item">
            <span>Price</span>
            <strong>$8,500 / Ton</strong>
          </div>

          <div className="info-item">
            <span>Currency</span>
            <strong>USD</strong>
          </div>

          <div className="info-item">
            <span>Payment Terms</span>
            <strong>Partial Payment</strong>
          </div>

          <div className="info-item">
            <span>Packaging</span>
            <strong>25kg Bags</strong>
          </div>

        </div>

      </section>


      {/* Shipments */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Shipments</h2>
            <p>
              Physical shipments related to this trade case.
            </p>
          </div>

          <span className="section-count">
            2 Shipments
          </span>
        </div>

        <div className="table-wrapper">

          <table className="case-table">

            <thead>
              <tr>
                <th>Shipment</th>
                <th>Quantity</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SH-001</td>
                <td>20 Tons</td>
                <td>Ali Rezaei</td>
                <td>12A-34567</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status active">
                    In Transit
                  </span>
                </td>
              </tr>

              <tr>
                <td>SH-002</td>
                <td>20 Tons</td>
                <td>Hossein Karimi</td>
                <td>45B-67890</td>
                <td>Dubai</td>
                <td>
                  <span className="shipment-status pending">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* Financial Information */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Financial Information</h2>
            <p>
              Payments and financial status of this case.
            </p>
          </div>
        </div>

        <div className="financial-grid">

          <div className="financial-card">
            <span>Total Value</span>
            <strong>$340,000</strong>
          </div>

          <div className="financial-card">
            <span>Paid</span>
            <strong>$170,000</strong>
          </div>

          <div className="financial-card">
            <span>Remaining</span>
            <strong>$170,000</strong>
          </div>

        </div>

      </section>


      {/* Documents */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Documents</h2>
            <p>
              Documents related to this trade case.
            </p>
          </div>
        </div>

        <div className="documents-list">

          <div className="document-item">
            <div>
              <strong>Commercial Invoice</strong>
              <span>Invoice_TR-001.pdf</span>
            </div>

            <a href="#">
              View
            </a>
          </div>

          <div className="document-item">
            <div>
              <strong>Packing List</strong>
              <span>PackingList_TR-001.pdf</span>
            </div>

            <a href="#">
              View
            </a>
          </div>

          <div className="document-item">
            <div>
              <strong>Bill of Lading</strong>
              <span>BL_TR-001.pdf</span>
            </div>

            <a href="#">
              View
            </a>
          </div>

        </div>

      </section>


      {/* Notes */}

      <section className="case-section">

        <div className="section-header">
          <div>
            <h2>Notes</h2>
          </div>
        </div>

        <p className="case-notes">
          Shipment is currently being prepared for export.
          Customs clearance is expected to start after loading.
        </p>

      </section>


      <div className="case-actions">

        <Link
          to="/dashboard/trade-cases"
          className="secondary-button"
        >
          Back to Cases
        </Link>

        <button className="primary-button">
          Edit Case
        </button>

      </div>

    </main>
  )
}

export default CaseDetails
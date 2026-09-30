import { Link } from 'react-router-dom'
import './Documents.css'

function Documents() {
  return (
    <main className="documents-page">

      <header className="documents-header">
        <div>
          <span className="documents-label">
            DOCUMENTS
          </span>

          <h1>Documents</h1>

          <p>
            Manage and track documents related to trade cases,
            shipments, customs, and finance.
          </p>
        </div>

        <button className="upload-document-button">
          Upload Document
        </button>
      </header>


      {/* Summary */}

      <section className="documents-summary">

        <div className="summary-card">
          <span>Total Documents</span>
          <strong>128</strong>
          <small>All uploaded documents</small>
        </div>

        <div className="summary-card">
          <span>Pending Review</span>
          <strong>14</strong>
          <small>Waiting for approval</small>
        </div>

        <div className="summary-card">
          <span>Approved</span>
          <strong>96</strong>
          <small>Verified documents</small>
        </div>

        <div className="summary-card">
          <span>Missing Documents</span>
          <strong>8</strong>
          <small>Required documents</small>
        </div>

      </section>


      {/* Filters */}

      <section className="documents-filters">

        <input
          type="text"
          placeholder="Search documents..."
        />

        <select defaultValue="all">
          <option value="all">All Types</option>
          <option value="invoice">Commercial Invoice</option>
          <option value="packing-list">Packing List</option>
          <option value="bill-of-lading">Bill of Lading</option>
          <option value="insurance">Insurance</option>
          <option value="customs">Customs Document</option>
          <option value="certificate">Certificate</option>
        </select>

        <select defaultValue="all">
          <option value="all">All Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="missing">Missing</option>
        </select>

      </section>


      {/* Documents Table */}

      <section className="documents-panel">

        <div className="documents-panel-header">

          <div>
            <h2>Document Records</h2>
            <p>
              Documents associated with trade operations.
            </p>
          </div>

          <span>128 Documents</span>

        </div>


        <div className="documents-table-wrapper">

          <table className="documents-table">

            <thead>
              <tr>
                <th>Document</th>
                <th>Type</th>
                <th>Trade Case</th>
                <th>Shipment</th>
                <th>Uploaded By</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              <tr>
                <td>
                  <strong>Invoice_TR-001.pdf</strong>
                </td>

                <td>Commercial Invoice</td>

                <td>TR-001</td>

                <td>SH-001</td>

                <td>Sales Department</td>

                <td>Sep 20, 2026</td>

                <td>
                  <span className="document-status approved">
                    Approved
                  </span>
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>PackingList_TR-001.pdf</strong>
                </td>

                <td>Packing List</td>

                <td>TR-001</td>

                <td>SH-001</td>

                <td>Logistics</td>

                <td>Sep 20, 2026</td>

                <td>
                  <span className="document-status approved">
                    Approved
                  </span>
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>BL_TR-002.pdf</strong>
                </td>

                <td>Bill of Lading</td>

                <td>TR-002</td>

                <td>SH-003</td>

                <td>Logistics</td>

                <td>Sep 19, 2026</td>

                <td>
                  <span className="document-status pending">
                    Pending
                  </span>
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>Origin_TR-003.pdf</strong>
                </td>

                <td>Certificate</td>

                <td>TR-003</td>

                <td>SH-004</td>

                <td>Customs</td>

                <td>Sep 18, 2026</td>

                <td>
                  <span className="document-status approved">
                    Approved
                  </span>
                </td>

                <td>
                  <a href="#">
                    View
                  </a>
                </td>
              </tr>


              <tr>
                <td>
                  <strong>Insurance_TR-004.pdf</strong>
                </td>

                <td>Insurance</td>

                <td>TR-004</td>

                <td>SH-006</td>

                <td>Logistics</td>

                <td>Sep 17, 2026</td>

                <td>
                  <span className="document-status missing">
                    Missing
                  </span>
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


      {/* Document Categories */}

      <section className="document-categories">

        <div className="category-card">
          <span>Commercial</span>
          <strong>32</strong>
          <p>Invoices and commercial documents</p>
        </div>

        <div className="category-card">
          <span>Logistics</span>
          <strong>41</strong>
          <p>Shipping and transportation documents</p>
        </div>

        <div className="category-card">
          <span>Customs</span>
          <strong>28</strong>
          <p>Customs and clearance documents</p>
        </div>

        <div className="category-card">
          <span>Financial</span>
          <strong>27</strong>
          <p>Payment and financial documents</p>
        </div>

      </section>


      <div className="documents-footer">

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

export default Documents
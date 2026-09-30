import './Profile.css'

function Profile() {
  return (
    <main className="profile-page">

      <header className="profile-header">
        <div>
          <span className="profile-label">
            ACCOUNT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and account settings.
          </p>
        </div>
      </header>


      <section className="profile-container">

        {/* Profile Header */}

        <div className="profile-card profile-main">

          <div className="profile-avatar">
            A
          </div>

          <div className="profile-main-info">
            <h2>Admin User</h2>

            <p>
              admin@pistatrade.com
            </p>

            <span className="profile-role">
              Administrator
            </span>
          </div>

        </div>


        {/* Personal Information */}

        <section className="profile-card">

          <div className="profile-card-header">
            <div>
              <h2>Personal Information</h2>

              <p>
                Your basic account information.
              </p>
            </div>

            <button className="profile-button">
              Edit Profile
            </button>
          </div>


          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>First Name</span>
              <strong>Admin</strong>
            </div>

            <div className="profile-info-item">
              <span>Last Name</span>
              <strong>User</strong>
            </div>

            <div className="profile-info-item">
              <span>Email</span>
              <strong>admin@pistatrade.com</strong>
            </div>

            <div className="profile-info-item">
              <span>Phone</span>
              <strong>+1 000 000 0000</strong>
            </div>

            <div className="profile-info-item">
              <span>Company</span>
              <strong>PistaTrade</strong>
            </div>

            <div className="profile-info-item">
              <span>Role</span>
              <strong>Administrator</strong>
            </div>

          </div>

        </section>


        {/* Account Information */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div>
              <h2>Account Information</h2>

              <p>
                Account and access details.
              </p>
            </div>

          </div>


          <div className="profile-info-grid">

            <div className="profile-info-item">
              <span>Username</span>
              <strong>admin</strong>
            </div>

            <div className="profile-info-item">
              <span>Account Status</span>

              <strong className="profile-status active">
                Active
              </strong>
            </div>

            <div className="profile-info-item">
              <span>Department</span>
              <strong>Management</strong>
            </div>

            <div className="profile-info-item">
              <span>Joined</span>
              <strong>September 2026</strong>
            </div>

          </div>

        </section>


        {/* Security */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div>
              <h2>Security</h2>

              <p>
                Manage your password and account security.
              </p>
            </div>

            <button className="profile-button">
              Change Password
            </button>

          </div>

        </section>

      </section>

    </main>
  )
}

export default Profile
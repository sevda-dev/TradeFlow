import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <main className="login-page">

      <section className="login-container">

        <div className="login-header">
          <span className="login-label">
            PISTATRADE
          </span>

          <h1>Sign In</h1>

          <p>
            Sign in to access your account.
          </p>
        </div>


        <form className="login-form">

          <div className="login-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>


          <div className="login-form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>


          <div className="login-options">

            <label className="remember-me">
              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>
            </label>

            <a href="/forgot-password">
              Forgot password?
            </a>

          </div>


          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>


        <div className="login-footer">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Create an account
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Login
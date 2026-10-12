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

          <h1>ورود</h1>

          <p>
            برای دسترسی به حساب کاربری خود وارد شوید.
          </p>
        </div>


        <form className="login-form">

          <div className="login-form-group">
            <label htmlFor="email">
              آدرس ایمیل
            </label>

            <input
              id="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>


          <div className="login-form-group">
            <label htmlFor="password">
              رمز عبور
            </label>

            <input
              id="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>


          <div className="login-options">

            <label className="remember-me">
              <input
                type="checkbox"
              />

              <span>
                مرا به خاطر بسپار
              </span>
            </label>

            <a href="/forgot-password">
              رمز عبور را فراموش کرده‌اید؟
            </a>

          </div>


          <button
            type="submit"
            className="login-button"
          >
            ورود
          </button>

        </form>


        <div className="login-footer">

          <span>
            حساب کاربری ندارید؟
          </span>

          <Link to="/register">
            ایجاد حساب کاربری
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Login
import './Button.css'

function Button({ children, variant = 'primary', type = 'button' }) {
  return (
    <button
      type={type}
      className={`custom-button custom-button-${variant}`}
    >
      {children}
    </button>
  )
}

export default Button
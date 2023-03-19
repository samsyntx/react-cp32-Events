import './index.css'

const ActiveEventRegistration = () => (
  <div className="yet-to-register-container">
    <img
      className="registration-img"
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
      alt="yet to register"
    />
    <p className="no-event-available">
      A live performance brings so much to your relationship with dance. Seeing
      dance live can often make your fall totaly in love with this beautiful art
      form.
    </p>
    <button type="button" className="register-button-style">
      Register Here
    </button>
  </div>
)

export default ActiveEventRegistration

import '../App.css'

const Login = () => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <h1 className="formTitle">Staff Login</h1>

        <div className="formField">
          <label className="formLabel" htmlFor="email">Email</label>
          <input className="formInput" type="email" id="email" name="email" autoComplete="email" />
        </div>

        <div className="formField">
          <label className="formLabel" htmlFor="password">Password</label>
          <input className="formInput" type="password" id="password" name="password" autoComplete="current-password" />
        </div>

        <button className="formSubmit" type="submit">Login</button>
      </form>

      <div className='SSO'>{/* Add SSO*/}</div>
    </div>
  )
}

export default Login

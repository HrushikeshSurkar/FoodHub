import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="main-register-wrapper">
        <div className="main-register-title">
          <h1>Sign up</h1>
        </div>
        <form>
          <div className="input-wrapper">
            <input type="text" placeholder=" " id="register-email" />
            <label htmlFor="register-email">Email</label>
          </div>

          <div className="input-wrapper">
            <input type="password" placeholder=" " id="register-password" />
            <label htmlFor="register-password">Password</label>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder=" "
              id="register-confirm-password"
            />
            <label htmlFor="register-confirm-password">Confirm Password</label>
          </div>

          <div className="main-register-button">Register</div>
        </form>
      </div>
      <div className="main-register-sign-in-button">
        Already have an account?
        <span>Sign in</span>
      </div>
    </>
  );
};

export default Register;

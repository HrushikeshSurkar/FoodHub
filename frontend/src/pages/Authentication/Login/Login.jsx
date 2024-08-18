import "./Login.scss";

const Login = () => {
  return (
    <>
      <form className="main-login-wrapper">
        <div className="main-login-title">
          <h1>FoodHub</h1>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder=" " id="floating-email" />
          <label htmlFor="floating-email">Email</label>
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder=" " id="floating-password" />
          <label htmlFor="floating-password">Password</label>
        </div>

        <div className="main-login-button">Log in</div>
        <div className="main-login-forgot-password">Forgot Password</div>
      </form>
      <div className="main-login-sign-up-button">
        Don&apos;t have an account?
        <span>Sign up</span>
      </div>
    </>
  );
};

export default Login;

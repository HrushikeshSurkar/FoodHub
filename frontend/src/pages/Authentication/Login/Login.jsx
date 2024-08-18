import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <form className="main-login-wrapper" onSubmit={handleLogin}>
        <div className="main-login-title">
          <h1>Sign in</h1>
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder=" " id="floating-email" />
          <label htmlFor="floating-email">Email</label>
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder=" " id="floating-password" />
          <label htmlFor="floating-password">Password</label>
        </div>

        <button type="submit" className="main-login-button">
          Log in
        </button>
        <div className="main-login-forgot-password">Forgot Password</div>
      </form>
      <div className="main-login-sign-up-button">
        Don&apos;t have an account?
        <span onClick={handleSignUp}>Sign up</span>
      </div>
    </>
  );
};

export default Login;

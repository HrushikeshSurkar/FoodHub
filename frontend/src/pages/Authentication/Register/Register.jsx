import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate(); // For navigation

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  const handleSignIn = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <>
      <div className="main-register-wrapper">
        <div className="main-register-title">
          <h1>Sign up</h1>
        </div>
        <form onSubmit={handleRegister}>
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

          <button type="submit" className="main-register-button">
            Register
          </button>
        </form>
      </div>
      <div className="main-register-sign-in-button">
        Already have an account?
        <span onClick={handleSignIn}>Sign in</span>
      </div>
    </>
  );
};

export default Register;

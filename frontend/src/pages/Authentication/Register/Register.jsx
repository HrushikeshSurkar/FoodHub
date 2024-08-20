import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./Register.scss";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="register-password">Password</label>
            {password && (
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder=" "
              id="register-confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="register-confirm-password">Confirm Password</label>
            {confirmPassword && (
              <button
                type="button"
                className="password-toggle-button"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            )}
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

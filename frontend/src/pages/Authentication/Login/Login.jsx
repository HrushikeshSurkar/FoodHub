import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (data) => {
    console.log("Login submitted with data:", data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Label className="form-label">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              isInvalid={!!errors.email}
              autoComplete="email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email && errors.email.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must contain at least one letter, one number, and be at least 6 characters long",
                },
              })}
              isInvalid={!!errors.password}
              autoComplete="current-password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password && errors.password.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="password-checkbox">
            <Form.Check
              type="checkbox"
              label="Show Password"
              onChange={togglePasswordVisibility}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button">
            Login
          </Button>

          <p className="mt-3">
            Don&apos;t have an account?{" "}
            <button
              className="btn btn-link"
              onClick={() => alert("Switch to Sign Up")}
            >
              Sign Up
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

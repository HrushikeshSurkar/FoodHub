import axios from "axios";
import configURL from "../config/config";
import { toast } from "react-toastify";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(configURL.register, userData);
    toast.success("User registered successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 200 range
      toast.error(
        `Registration failed: ${error.response.data.message || error.message}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      toast.error("Registration failed: No response from server");
    } else {
      // Something happened in setting up the request that triggered an error
      toast.error(`Registration failed: ${error.message}`);
    }
    console.error("Registration error:", error);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(configURL.login, credentials);
    toast.success("Login successful");
    return response.data;
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 200 range
      toast.error(
        `Login failed: ${error.response.data.message || error.message}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      toast.error("Login failed: No response from server");
    } else {
      // Something happened in setting up the request that triggered an error
      toast.error(`Login failed: ${error.message}`);
    }
    console.error("Login error:", error);
  }
};

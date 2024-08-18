import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticateToken, logoutUser); // Requires authentication
router.get("/profile", authenticateToken, getUserProfile); // Requires authentication
router.put("/profile", authenticateToken, updateUserProfile); // Requires authentication
router.delete("/profile", authenticateToken, deleteUserProfile); // Requires authentication
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;

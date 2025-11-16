import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
 
// Create order
router.post("/", protect, createOrder);
   
// Get my orders
router.get("/my", protect, getMyOrders);

// Get all orders (Admin only)
router.get("/", protect, admin, getAllOrders);

// Update order status (Admin only)
router.put("/:id/status", protect, admin, updateOrderStatus);

export default router;

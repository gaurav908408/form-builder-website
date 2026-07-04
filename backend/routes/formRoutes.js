import express from "express";
import {
  createForm,
  getForms,
  getFormById,
  getPublicForm,
  updateForm,
  deleteForm,
} from "../controllers/formController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ================= PUBLIC ROUTE =================

// Anyone can access this form
router.get("/public/:id", getPublicForm);

// ================= PRIVATE ROUTES =================

// Create Form
router.post("/", authMiddleware, createForm);

// Get All Forms
router.get("/", authMiddleware, getForms);

// Get Single Form
router.get("/:id", authMiddleware, getFormById);

// Update Form
router.put("/:id", authMiddleware, updateForm);

// Delete Form
router.delete("/:id", authMiddleware, deleteForm);

export default router;
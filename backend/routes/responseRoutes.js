import express from "express";

import {
  submitResponse,
  getResponses,
} from "../controllers/responseController.js";

const router = express.Router();

// Submit Form Response
router.post("/", submitResponse);

// Get All Responses of a Form
router.get("/:id", getResponses);

export default router;
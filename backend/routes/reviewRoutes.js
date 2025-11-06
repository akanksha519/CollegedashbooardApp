import express from "express";
import Review from "../models/Review.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get reviews (for one college or all)
router.get("/", async (req, res) => {
  try {
    const { collegeId } = req.query;
    let query = {};
    if (collegeId) query.collegeId = collegeId;

    const reviews = await Review.find(query)
      .populate("userId", "name")
      .populate("collegeId", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews", error: err.message });
  }
});


// ✅ Add review
router.post("/", verifyToken, async (req, res) => {
  try {
    const { collegeId, rating, comment } = req.body;
    if (!collegeId || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({
      collegeId,
      userId: req.user.id,
      rating,
      comment,
    });

    const populatedReview = await Review.findById(review._id)
      .populate("userId", "name")
      .populate("collegeId", "name");

    res.status(201).json({ message: "Review added", review: populatedReview });
  } catch (err) {
    console.error("❌ Error submitting review:", err);
    res.status(500).json({ message: "Error submitting review" });
  }
});

export default router;

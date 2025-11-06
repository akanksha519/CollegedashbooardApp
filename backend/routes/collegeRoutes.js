import express from "express";
import College from "../models/College.js";
import Review from "../models/Review.js";

const router = express.Router();

// GET all colleges + avg rating
router.get("/", async (req, res) => {
  try {
    const { location, course, minFee, maxFee, search } = req.query;

    let filter = {};

    if (location) filter.location = location;
    if (course) filter.course = course;
    if (minFee || maxFee) {
      filter.fee = {};
      if (minFee) filter.fee.$gte = Number(minFee);
      if (maxFee) filter.fee.$lte = Number(maxFee);
    }
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const colleges = await College.find(filter);
    res.json(colleges);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;

// backend/models/College.js
import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true }, // e.g., Hyderabad
  course: { type: String, required: true, trim: true },   // e.g., CSE
  fee: { type: Number, required: true },                  // numeric value
}, { timestamps: true });

const College = mongoose.model("College", collegeSchema);
export default College;

// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import College from "./models/College.js";

dotenv.config();
const MONGO_URI = "mongodb+srv://collegeUser:%40Akshu519@cluster0.deauewz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const sampleColleges = [
  { name: "Hyderabad Institute of Tech", location: "Hyderabad", course: "CSE", fee: 80000 },
  { name: "Bangalore College of Engineering", location: "Bangalore", course: "ECE", fee: 70000 },
  { name: "Chennai School of Management", location: "Chennai", course: "MBA", fee: 120000 },
  { name: "Central College of Technology", location: "Hyderabad", course: "ECE", fee: 65000 },
  { name: "City Institute of Science", location: "Bangalore", course: "CSE", fee: 90000 },
  { name: "Metropolitan Business School", location: "Chennai", course: "MBA", fee: 110000 }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB for seeding");
    // Optional: clear existing
    await College.deleteMany({});
    await College.insertMany(sampleColleges);
    console.log("Seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();

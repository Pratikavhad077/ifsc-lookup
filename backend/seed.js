import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Branch from "./models/Branch.js";

dotenv.config();
await connectDB();

const branches = [
  {
    ifsc: "HDFC0001234",
    bank: "HDFC Bank",
    branch: "Pune FC Road",
    address: "FC Road, Pune, Maharashtra",
    state: "Maharashtra",
    district: "Pune",
    micr: "411240003",
    contact: "02012345678"
  },
  {
    ifsc: "SBIN0000456",
    bank: "State Bank of India",
    branch: "Mumbai Fort",
    address: "Fort, Mumbai, Maharashtra",
    state: "Maharashtra",
    district: "Mumbai",
    micr: "400002002",
    contact: "02298765432"
  }
];

await Branch.deleteMany();
await Branch.insertMany(branches);
console.log("✅ Database seeded with default branches");
process.exit();

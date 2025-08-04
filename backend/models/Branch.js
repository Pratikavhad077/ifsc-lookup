import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  ifsc: { type: String, required: true, unique: true },
  bank: { type: String, required: true },
  branch: { type: String, required: true },
  address: String,
  state: String,
  district: String,
  micr: String,
  contact: String
});

export default mongoose.model("Branch", branchSchema);

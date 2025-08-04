import express from "express";
import Branch from "../models/Branch.js";

const router = express.Router();

// Search by IFSC Code
router.get("/ifsc/:code", async (req, res) => {
  try {
    const branch = await Branch.findOne({ ifsc: req.params.code.toUpperCase() });
    console.log(branch);
    
    if (!branch) return res.status(404).json({ error: "IFSC Code not found" });
    res.json(branch);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Search by Bank + State + District
router.get("/search", async (req, res) => {
  try {
    const { bank, state, district } = req.query;
    const branches = await Branch.find({
      bank: new RegExp(bank, "i"),
      state: new RegExp(state, "i"),
      district: new RegExp(district, "i"),
    });
    res.json(branches);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Add a new branch (optional admin feature)
router.post("/add", async (req, res) => {
  try {
    const branch = new Branch(req.body);
    await branch.save();
    res.json(branch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

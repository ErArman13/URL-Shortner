// Mongoose schema for storing URLs
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    originalUrl: { type: String, required: true }, // The original long URL
    shortUrl: { type: String, required: true }, // The generated short code
    timeStamp: [{ timeStamp: { type: Number } }], // Array of access timestamps
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

module.exports = mongoose.model("url", urlSchema);

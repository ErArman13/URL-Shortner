const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB (update the URI as needed)
mongoose.connect("mongodb://localhost:27017/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", urlRoutes);

// Redirect short URL
const URL = require("./models/urlModel");
app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  const url = await URL.findOne({ shortUrl });
  if (url) {
    // Optionally, update timestamp array
    url.timeStamp.push({ timeStamp: Date.now() });
    await url.save();
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: "URL not found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

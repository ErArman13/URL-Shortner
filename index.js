const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(express.json());
// Serve static files (HTML, CSS) from public directory
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", urlRoutes);

// Redirect short URL (moved to controller)
const { redirectToOriginalUrl } = require("./controllers/redirectController");
app.get("/:shortUrl", redirectToOriginalUrl);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

    // Routes for URL shortening API
const express = require("express");
const router = express.Router();
const { generateShortUrl } = require("../controllers/url");

// POST /api/shorten: create a new short URL
router.post("/shorten", generateShortUrl);

module.exports = router;

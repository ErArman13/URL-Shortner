// Controller for handling URL shortening logic
const { nanoid } = require("nanoid");
const URL = require("../models/url");

// Receives originalUrl in body, creates a short URL, and saves to DB
async function generateShortUrl(req, res) {
  const { originalUrl } = req.body;
  const shortUrl = nanoid(10); // Generate a random short code
  await URL.create({
    originalUrl: originalUrl,
    shortUrl: shortUrl,
    timeStamp: [], // Initialize empty timestamp array
  });
  return res.json({ id: shortUrl });
}

module.exports = {
  generateShortUrl,
};

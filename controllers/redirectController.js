// Controller for handling redirection from short URL to original URL
const URL = require("../models/urlModel");

async function redirectToOriginalUrl(req, res) {
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
}

module.exports = { redirectToOriginalUrl };

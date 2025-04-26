const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Handle all routes by sending the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Your server setup (for example, on port 5000)
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

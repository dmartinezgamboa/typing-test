const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// // Serve static files
app.use("/js", express.static(path.join(__dirname, "public/js/")));
app.use("/css", express.static(path.join(__dirname, "public/css/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});

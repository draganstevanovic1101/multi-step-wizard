const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const steps = require("./steps.json");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.get("/api/steps", (req, res) => {
  res.json(steps);
});

app.post("/api/submit", (req, res) => {
  const answer = req.body; // Get the submitted answers
  console.log("Received answers:", answer);
  res.json({
    message: "Answers received successfully!",
    receivedData: answer,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

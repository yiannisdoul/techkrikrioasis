const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = process.env.VITE_HUGGING_FACE_API_TOKEN;

// Middleware
app.use(
  cors({
    origin: "*", // or list your front-end URL(s)
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

// Hugging Face API Proxy Endpoint
app.post("/api/chat", async (req, res) => {
  const userInput = req.body.inputs;
  console.log("User input:", userInput);

  if (!userInput) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
      { inputs: userInput }, // payload
      {
        headers: {
          Authorization: `Bearer ${process.env.VITE_HUGGING_FACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Hugging Face API response:", response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error communicating with Hugging Face API:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch response from Hugging Face API" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


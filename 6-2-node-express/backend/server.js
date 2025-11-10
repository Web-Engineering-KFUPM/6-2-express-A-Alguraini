import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// TODO 1: Initialize Express App
const app = express();
const PORT = 3000;

{/*write code for cors*/}
// TODO 4: Enable CORS
app.use(cors());


{/*write code to define routes*/}
// TODO 5.1: Create a Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the Quote Generator API");
});

// TODO 5.2: Create a Quote API Route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});


{/*write code to create server*/}
// TODO 1: Create Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
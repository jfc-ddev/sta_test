import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Welcome to My Express.js App!");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Smartphone", price: 800 },
    { id: 103, name: "Headphones", price: 150 },
  ]);
});

app.get("/api/quotes", (req, res) => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The purpose of our lives is to be happy.",
  ];
  res.json({ quote: quotes[Math.floor(Math.random() * quotes.length)] });
});

app.get("/api/weather", (req, res) => {
  res.json({
    city: "Barcelona",
    temperature: "20°C",
    condition: "Sunny",
  });
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ];
  res.json({ joke: jokes[Math.floor(Math.random() * jokes.length)] });
});

app.get("/api/time", (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
});

app.get("/api/languages", (req, res) => {
  res.json(["JavaScript", "Python", "Java", "C#", "Go", "Rust"]);
});

app.get("/api/countries", (req, res) => {
  res.json(["Spain", "France", "Germany", "Italy", "Japan", "Brazil"]);
});

app.get("/api/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ randomNumber });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;

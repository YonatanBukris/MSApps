// Import required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const imagesRoute = require("./routes/images"); // Importing the images route

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON request bodies

// Basic route for server health check
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).send({ error: "Something went wrong!" }); // Send generic error response
});

// Use the images route for API requests
app.use("/api/images", imagesRoute);

// Start the server
const PORT = process.env.PORT || 5000; // Set the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

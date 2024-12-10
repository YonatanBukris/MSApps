// Import required modules
const express = require('express');
const { getImages } = require('../controllers/imagesController'); // Import the controller function
const router = express.Router();


// This route handles GET requests to fetch images with optional category, page, and sort parameters
router.get('/', getImages);

module.exports = router; // Export the router for use in the server

const axios = require('axios');

// Controller to fetch images from Pixabay API
const getImages = async (req, res, next) => {
    try {
        // Extract query parameters from the request
        const { category = 'nature', page = 1, sort } = req.query; // Default values: category 'nature', page 1
        const PIXABAY_API_KEY = '25540812-faf2b76d586c1787d2dd02736'; // API key for Pixabay
        const PER_PAGE = 9; // Number of images to fetch per page

        const currentPage = parseInt(page, 10); // Ensure the page parameter is an integer

        // Build the Pixabay API URL
        const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${category}&image_type=photo&page=${currentPage}&per_page=${PER_PAGE}`;

        // Fetch data from Pixabay
        const response = await axios.get(url); 
        let data = response.data.hits; // Extract the 'hits' array from the API response

        // Sorting functionality
        if (sort === 'id') {
            data.sort((a, b) => b.id - a.id);
        } else if (sort === 'date') {
            console.log('Sorting by date is not implemented.'); // Log the issue
        }

        // Send paginated data as a response
        res.status(200).json({
            currentPage, // Current page number
            nextPage: currentPage + 1, // Next page number
            prevPage: currentPage > 1 ? currentPage - 1 : null, // Previous page number (null if on the first page)
            data, // Array of images
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching images:', error.message); // Log the error for debugging
        res.status(500).json({ error: 'Failed to fetch images' }); // Send an error response
    }
};

module.exports = { getImages }; // Export the controller function

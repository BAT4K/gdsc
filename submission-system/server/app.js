// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config'); // Import config file
const submissionsRouter = require('./routes/submissions'); // Import route handler

// Create an instance of Express
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using environment variable
mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true, // Option removed in MongoDB Node.js driver 4.x
    useUnifiedTopology: true // Option removed in MongoDB Node.js driver 4.x
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

// Use routes from the submissions router
app.use('/api', submissionsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

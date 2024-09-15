const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI from environment variable or fallback to local
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('MONGO_URI is not defined in .env file');
    process.exit(1);
}

console.log(`Connecting to MongoDB URI: ${mongoURI}`);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files for the client
app.use(express.static(path.join(__dirname, '../client')));

// MongoDB connection using Atlas URI
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('MongoDB connection error:', err.message); // Log just the error message
    process.exit(1); // Exit process on MongoDB connection failure
});


// Routes
const submissionRoutes = require('./routes/submissions');
app.use('/api', submissionRoutes);

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

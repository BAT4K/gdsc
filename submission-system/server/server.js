const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Log environment variables for debugging
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', PORT);

// Middleware
app.use(cors({
    origin: '*', // Adjust this as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files for the client
app.use(express.static(path.join(__dirname, '../client')));

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error('MONGO_URI is not defined in .env file');
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
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

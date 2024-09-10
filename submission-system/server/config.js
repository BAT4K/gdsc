require('dotenv').config();  // This loads environment variables from .env file

const config = {
    MONGO_URI: process.env.MONGO_URI,  // Fetch MongoDB URI from .env file
    PORT: process.env.PORT || 3000,    // Fetch Port from .env file or fallback to 3000
};

module.exports = config;

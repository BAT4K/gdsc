require('dotenv').config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/submission-system',
    PORT: process.env.PORT || 5000
};

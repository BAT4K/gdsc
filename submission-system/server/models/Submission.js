// Import mongoose
const mongoose = require('mongoose');

// Define the submission schema
const submissionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true, // Trim whitespace from the input
        minlength: 1, // Minimum length of 1 character
        maxlength: 500 // Maximum length of 500 characters
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Optional: Add an index to improve query performance
submissionSchema.index({ createdAt: 1 });

// Create a model based on the schema
const Submission = mongoose.model('Submission', submissionSchema);

// Export the model
module.exports = Submission;

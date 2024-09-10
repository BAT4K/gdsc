const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const { body, validationResult } = require('express-validator');

// Handle form submissions with validation
router.post('/submit', 
    // Validate and sanitize the input
    body('text')
        .trim()
        .notEmpty().withMessage('Submission text is required.')
        .isLength({ max: 500 }).withMessage('Submission text cannot exceed 500 characters.'),
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { text } = req.body;
            const newSubmission = new Submission({ text });
            await newSubmission.save();
            res.status(201).json({ message: 'Submission received', submission: newSubmission });
        } catch (err) {
            console.error('Error saving submission:', err);
            res.status(500).json({ error: 'Error submitting your entry' });
        }
    }
);

module.exports = router;

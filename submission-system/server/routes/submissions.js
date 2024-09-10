// routes/submissions.js

const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// POST: Create a new submission
router.post('/submissions', async (req, res) => {
    const { submission } = req.body;
    if (!submission) {
        return res.status(400).json({ success: false, error: 'Submission text is required' });
    }

    try {
        const newSubmission = new Submission({ text: submission });
        await newSubmission.save();
        res.status(201).json({
            success: true,
            message: 'Submission saved successfully',
            submission: newSubmission,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to save submission' });
    }
});

// GET: Retrieve all submissions
router.get('/submissions', async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to retrieve submissions' });
    }
});

// DELETE: Delete a submission by ID
router.delete('/submissions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSubmission = await Submission.findByIdAndDelete(id);
        if (!deletedSubmission) {
            return res.status(404).json({ success: false, error: 'Submission not found' });
        }
        res.status(200).json({ success: true, message: 'Submission deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to delete submission' });
    }
});

module.exports = router;

import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
// Email service removed as per user request
// Contact is saved to database only

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form (saves to DB + sends email)
// @access  Public
router.post(
    '/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').trim().notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, message } = req.body;

            // Save to MongoDB
            const newContact = new Contact({
                name,
                email,
                message,
                ipAddress: req.ip || req.connection.remoteAddress,
            });

            const savedContact = await newContact.save();
            console.log('Contact saved to database:', savedContact._id);

            // Email notification skipped (Database only mode)
            console.log('Contact saved to database only (Email service disabled)');

            res.status(200).json({
                success: true,
                message: 'Message received successfully! I will get back to you soon.',
                contactId: savedContact._id,
            });
        } catch (error) {
            console.error('Error processing contact form:', error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again later.',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
);

// @route   GET /api/contact
// @desc    Get all contact submissions (for admin)
// @access  Public (should be protected in production)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
});

export default router;

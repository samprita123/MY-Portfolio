const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const Joi = require('joi');

// Joi Validation Schema
const validateContact = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        subject: Joi.string().min(5).required(),
        message: Joi.string().min(10).required(),
    });
    return schema.validate(data);
};

// POST /api/contact/send
router.post('/send', async (req, res) => {
    // Validate request
    const { error } = validateContact(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const { name, email, subject, message } = req.body;

        // Save to Database
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Setup Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Standard service, can be changed via ENV
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'sampritapatra123@gmail.com', // Your email
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Send Email
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your-email@gmail.com') {
            try {
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            } catch (mailErr) {
                console.error('Email Sending Failed (Check Credentials):', mailErr.message);
            }
        } else {
            console.log('Skipping email send: Missing or placeholder credentials');
        }

        res.status(200).json({ message: 'Message sent successfully!' });

    } catch (err) {
        console.error('Contact Error:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;

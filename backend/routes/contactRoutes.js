const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
    console.log("CONTACT REQUEST RECEIVED:", req.body);
    const { name, email, phone, message, token } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Verify reCAPTCHA
    if (!token) {
        return res.status(400).json({ message: 'reCAPTCHA token is missing' });
    }

    try {
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
        const verificationResponse = await fetch(verificationURL, { method: 'POST' });
        const verificationData = await verificationResponse.json();

        if (!verificationData.success) {
            return res.status(400).json({ message: 'reCAPTCHA verification failed' });
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return res.status(500).json({ message: 'Error verifying reCAPTCHA' });
    }

    try {
        // 1. Save to MongoDB (Optional)
        let contactSaved = false;
        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                message,
            });

            await newContact.save();
            contactSaved = true;
        } catch (dbError) {
            console.error('Database save failed (continuing to email):', dbError.message);
        }

        // 2. Send Email Notification
        // Only attempt to send email if credentials are present
        if (process.env.OWNER_EMAIL && process.env.EMAIL_APP_PASSWORD) {
            const transporter = nodemailer.createTransport({
                service: 'gmail', // You can configure this based on the provider, gmail is common
                auth: {
                    user: process.env.OWNER_EMAIL,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.OWNER_EMAIL, // Sender address
                to: process.env.OWNER_EMAIL, // Receiver address
                subject: 'New Contact Form Submission - SCA IT',
                text: `
            You have a new contact form submission:
            
            Name: ${name}
            Email: ${email}
            Phone: ${phone || 'N/A'}
            Message: ${message}
            Date: ${new Date().toLocaleString()}
          `,
                html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `,
            };

            try {
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // We return 500 here as requested ("return error"), even though DB save worked.
                // Client will see error alert.
                return res.status(500).json({ message: 'Message saved, but failed to send email notification.' });
            }
        } else {
            console.log('Email credentials missing, skipping email sending.');
        }

        res.status(201).json({
            message: 'Message sent successfully',
            warning: contactSaved ? null : 'Note: Message sent via email but not saved to database.'
        });

    } catch (error) {
        console.error('Error in contact route:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

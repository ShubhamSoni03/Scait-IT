require('dotenv').config({ path: './.env' });
const nodemailer = require('nodemailer');

async function sendTestEmail() {
    console.log('Testing email with:', process.env.OWNER_EMAIL);

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.OWNER_EMAIL,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.OWNER_EMAIL,
        to: process.env.OWNER_EMAIL,
        subject: 'Test Email from Debug Script',
        text: 'If you receive this, email configuration is working.',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
    } catch (error) {
        console.error('Email sending failed:', error);
    }
}

sendTestEmail();

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow all origins to prevent CORS errors during local dev
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        // process.exit(1); // Do not exit, allow server to run for email functionality
    }
};

// Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});

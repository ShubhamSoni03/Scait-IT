require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');

async function testDB() {
    console.log('Testing MongoDB connection...');
    console.log('URI:', process.env.MONGO_URI.replace(/:([^@]+)@/, ':****@')); // Hide password

    try {
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log('MongoDB Connected Successfully!');
        process.exit(0);
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
}

testDB();

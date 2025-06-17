const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const db = require('./utils/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
db();

// Routes
app.use('/api/posts', postRoutes());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
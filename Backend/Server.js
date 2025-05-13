const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const sliderRoutes = require('./routes/sliderRoutes');

const app = express();

// Load environment variables
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use(sliderRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

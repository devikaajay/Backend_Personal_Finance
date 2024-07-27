// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const authRoutes = require('./auth');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use('/auth', authRoutes);  // Mount auth routes

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:5000/finance', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('Error connecting to MongoDB:', err));

// // Start the server
// app.listen(5000, () => {
//   console.log('Connected');
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./auth');
const adminRoutes = require('./admin');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);  // Mount auth routes
app.use('/admin', adminRoutes);  // Mount admin routes

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://DevikaG:Devika@cluster0.emuhexx.mongodb.net/Finance?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

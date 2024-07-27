// const express = require('express');
// const router = express.Router();
// const { User, Transaction, Expense } = require('./user');  // Use the models from user.js

// // User Management
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).send('Error fetching users');
//   }
// });

// // Expense Management
// router.get('/expenses', async (req, res) => {
//   try {
//     const expenses = await Expense.find();
//     res.json(expenses);
//   } catch (error) {
//     res.status(500).send('Error fetching expenses');
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { User, Transaction, Expense } = require('./user'); 

// User Management
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

// Expense Management
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).send('Error fetching expenses');
  }
});

module.exports = router;

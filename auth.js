// const express = require('express');
// const router = express.Router();
// const User = require('./user'); 
// const bcrypt = require('bcrypt');

// router.post('/signup', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).send('User created');
//   } catch (error) {
//     console.error('Error creating user:', error);  // Log the error
//     res.status(500).send('Error creating user');
//   }
// });

// router.post('/signin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).send('Invalid credentials');
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).send('Invalid credentials');
    
//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
//     res.json({ token });
//   } catch (error) {
//     console.error('Error signing in:', error);  // Log the error
//     res.status(500).send('Error signing in');
//   }
// });

// // // Sign Up
// // router.post('/signup', async (req, res) => {
// //   try {
// //     const { username, email, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({ username, email, password: hashedPassword });
// //     await newUser.save();
// //     res.status(201).send('User created');
// //   } catch (error) {
// //     res.status(500).send('Error creating user');
// //   }
// // });

// // // Sign In
// // router.post('/signin', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).send('Invalid credentials');
// //     const match = await bcrypt.compare(password, user.password);
// //     if (!match) return res.status(400).send('Invalid credentials');
    
// //     // For simplicity, just send a success message or user info
// //     res.send('Sign in successful');
// //   } catch (error) {
// //     res.status(500).send('Error signing in');
// //   }
// // });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { User } = require('./user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid credentials');
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send('Invalid credentials');
    
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send('Error signing in');
  }
});

module.exports = router;

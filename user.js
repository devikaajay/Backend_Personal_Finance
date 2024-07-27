// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // User Schema
// // const userSchema = new Schema({
// //   username: String,
// //   email: { type: String, unique: true },
// //   password: String
// // });

// const userSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: 'user' }  // 'user' or 'admin'
// });

// const user = mongoose.model('User', userSchema);

// module.exports = User;

// // Transaction Schema
// const transactionSchema = new Schema({
//   amount: Number,
//   category: String,
//   date: { type: Date, default: Date.now },
//   description: String,
//   user: { type: Schema.Types.ObjectId, ref: 'User' }
// });

// // Expense Schema
// const expenseSchema = new Schema({
//   amount: Number,
//   category: String,
//   date: { type: Date, default: Date.now },
//   description: String,
//   user: { type: Schema.Types.ObjectId, ref: 'User' }
// });

// // Models
// const User = mongoose.model('User', userSchema);
// const Transaction = mongoose.model('Transaction', transactionSchema);
// const Expense = mongoose.model('Expense', expenseSchema);

// module.exports = { User, Transaction, Expense };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }  // 'user' or 'admin'
});

// Transaction Schema
const transactionSchema = new Schema({
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Expense Schema
const expenseSchema = new Schema({
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Models
const User = mongoose.model('User', userSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = { User, Transaction, Expense };

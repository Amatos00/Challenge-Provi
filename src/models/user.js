const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    cpf: String,
    fullname: String,
    birthday: String,
    phonenumber: Number,
    address: String, Number
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

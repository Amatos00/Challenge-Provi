const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
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

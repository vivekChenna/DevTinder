const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required : true,
  },
  lastName: {
    type: String,
    required : true,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
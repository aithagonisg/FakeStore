const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  cart: {
    type: Array,
  },
});

const Registration = mongoose.model("userenv", userSchema);

module.exports = Registration;

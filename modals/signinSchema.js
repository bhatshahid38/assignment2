const mongoose = require("mongoose");
const { Schema } = mongoose;
const signinSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("login", signinSchema);

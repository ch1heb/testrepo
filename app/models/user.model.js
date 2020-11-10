const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
	firstname: String,
	lastname: String, 
	age: String,
	gender: String, 
	zipcode: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    username: String,
    email: String,
	firstname: String,
	lastname: String, 
	age: String,
	gender: String, 
	zipcode: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = Contact;
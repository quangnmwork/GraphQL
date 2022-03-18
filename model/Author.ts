export {};
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Author", AuthorSchema);

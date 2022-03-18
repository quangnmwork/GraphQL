export {};
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  id: String,
});

module.exports = mongoose.model("Book", AuthorSchema);

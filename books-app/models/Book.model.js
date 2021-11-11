const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number,
    img_url: String,
  },
  {
    timestamps: true
    
  }

);

const Book = model("Book", bookSchema);

module.exports = Book;

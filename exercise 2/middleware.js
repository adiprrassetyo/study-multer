const Book = require("./book");

function setBook(req, res, next) {
  const book = Book.find(req.params.id);
  if (!book) {
    res.status(404).json({
      error: "Book not found!",
    });

    return;
  }

  req.book = book;
  next();
}

module.exports = {
  setBook,
};

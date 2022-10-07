const Book = require("./book");

function handleCreateBook(req, res) {
  const book = Book.create(req.body);
  req.body.map();
  res.status(201).json(book);
}

function handleListBooks(req, res) {
  const books = Book.list();

  res.status(200).json(books);
}

function handleGetBook(req, res) {
  const book = req.book;

  res.status(200).json(book);
}

function handleUpdateBook(req, res) {
  // console.log(req)
  const book = Book.update(req.body, req.params.id);

  // book.update(req.body);

  res.status(200).json(book);
}

function handleDeleteBook(req, res) {
  const book = Book.delete(req.params.id);
  // const book = req.book;

  // book.delete();

  res.status(200).json(book);
  // res.status(204).end();
}

module.exports = {
  handleCreateBook,
  handleListBooks,
  handleGetBook,
  handleUpdateBook,
  handleDeleteBook,
};

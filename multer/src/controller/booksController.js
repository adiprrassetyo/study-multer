const booksData = require("../../assets/data/books.json");
let books = [...booksData];

const getBooks = (req, res) => {
  try {
    res.status(200).json({
      message: "success",
      data: books,
    });
  } catch (e) {
    res.status(404).end(e.message);
  }
};

const getBooksById = (req, res) => {
  try {
    const book = books.find((book) => book.id == req.params.id);

    if (!book)
      throw new Error(
        `Oops! sorry book with id: ${req.params.id} is not availabe yet, try to looking for another book :)`
      );
    res.status(200).json({
      message: "success",
      data: book,
    });
  } catch (e) {
    res.status(404).json({ message: e.message, data: [] });
  }
};

const addBooks = (req, res) => {
  try {
    const newBook = { id: books.length + 1, ...req.body, image: req.file.path };
    books.push(newBook);
    res.status(200).json({
      message: "success",
      data: books,
    });
  } catch (e) {
    res.status(404).end(e.message);
  }
};

const updateBooks = (req, res) => {
  try {
    books = books.map((book) => {
      if (book.id == req.params.id) {
        return { ...book, ...req.body };
      }
      return book;
    });
    res.status(200).json({
      message: `Book with id: ${req.params.id} successfully updated`,
    });
  } catch (e) {
    res.status(404).end(e.message);
  }
};

const deleteBooks = (req, res) => {
  try {
    books = books.filter((book) => book.id != req.params.id);
    res.status(200).json({
      message: `Book with id: ${req.params.id} successfully deleted`,
    });
  } catch (e) {
    res.status(404).end(e.message);
  }
};

module.exports = { getBooks, getBooksById, addBooks, updateBooks, deleteBooks };

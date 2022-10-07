const books = require("./fixtures/books.json");

class Book {
  static records = books;

  constructor(params) {
    this.id = this._generateId();
    this.title = params.title;
    this.coverImage = params.coverImage;
    this.synopsis = params.synopsis;
    this.publisher = params.publisher;
    this.author = params.author;
    this.price = params.price;
  }

  _generateId() {
    const lastRecordId =
      this.constructor.records[this.constructor.records - 1]?.id || 0;
    return lastRecordId + 1;
  }

  static update(params, id) {
    // const idx = this.constructor.records.findIndex((i) => i.id === this.id);
    const idx = this.records.findIndex((i) => i.id == id);

    params.title && (this.records[idx].title = params.title);
    params.coverImage && (this.records[idx].coverImage = params.coverImage);
    params.synopsis && (this.records[idx].synopsis = params.synopsis);
    params.publisher && (this.records[idx].publisher = params.publisher);
    params.author && (this.records[idx].author = params.author);
    params.price && (this.records[idx].price = params.price);

    // this.records[idx] = this;

    return this.records;
  }

  static delete(id) {
    this.records = this.records.filter((i) => i.id != id);

    return this.records;
  }

  static create(params) {
    const book = new this(params);

    this.records.push(book);

    return book;
  }

  static find(id) {
    const book = this.records.find((i) => i.id === Number(id));
    if (!book) return null;

    return book;
  }

  static list() {
    return this.records;
  }
}

module.exports = Book;

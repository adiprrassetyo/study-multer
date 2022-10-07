const faker = require("faker");
const fs = require("fs");
const path = require("path");

const outpath = path.join(__dirname, "books.json");
const books = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 25; i++) {
  books.push({
    id: i + 1,
    title: faker.lorem.sentence(),
    synopsis: faker.lorem.paragraph(),
    coverImage: "https://placeimg.com/384/640/any",
    author: faker.company.companyName(),
    publisher: faker.company.companyName(),
    price: getRandomInt(0, 1000000),
  });
}

fs.writeFileSync(outpath, JSON.stringify(books, null, 2));

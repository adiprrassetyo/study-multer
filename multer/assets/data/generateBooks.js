const { faker } = require('@faker-js/faker');
const fs = require('fs')

const books = []
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < 25; i++) {
  books.push({
    id: i + 1,
    nama_buku: faker.lorem.sentence(),
    penulis: faker.name.firstName(),
    harga: getRandomInt(0, 1000000),
    image: faker.image.abstract()
  });
}

fs.writeFileSync("./books.json", JSON.stringify(books, null, 2));
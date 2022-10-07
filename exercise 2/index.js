const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");

const port = process.env.PORT || 8000;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());

// Router
app.post("/books", handler.handleCreateBook);
app.get("/books", handler.handleListBooks);
app.get("/books/:id", middleware.setBook, handler.handleGetBook);
app.put("/books/:id", middleware.setBook, handler.handleUpdateBook);
app.delete("/books/:id", middleware.setBook, handler.handleDeleteBook);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Utama!");
});
app.get("/hello", (req, res) => {
  console.log({ reqParams: req.query.alamat }); //mengambil data dari params
  res.send("Hello World!");
});
app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body }); //mengambil data dari boddy.json
  res.send("login berhasil");
});
app.put("/username", (req, res) => {
  console.log({ updateData: req.body }); //mengambil data dari boddy.json
  res.send("update berhasil");
});
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

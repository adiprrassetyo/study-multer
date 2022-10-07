const express = require('express');
const port = process.env.PORT || 8000;
const personRoutes = require('./routes/person.js')

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", personRoutes)


app.listen(port, () => {
  console.log(`Express nyala di http://localhost:${port}`);
});

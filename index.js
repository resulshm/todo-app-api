const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbUrl = "mongodb://localhost:27017/mydatabase";
const PORT = process.env.PORT || 3000;
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server is listening on port ${PORT} and connected to database...`
      )
    )
  )
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

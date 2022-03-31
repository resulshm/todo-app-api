const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const dbUrl = "mongodb://localhost:27017/mydatabase";
const PORT = process.env.PORT || 5000;
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/task", taskRoutes);

app.use((req, res) => {
  res.status(404);
});

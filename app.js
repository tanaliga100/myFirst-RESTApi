require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middleware/NotFound");
const errorHandler = require("./middleware/Error-Handler");

// ROUTES
const tasks = require("./routes/tasks");

// MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());
// ROUTES
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const PORT = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

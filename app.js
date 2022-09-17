require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// ROUTES
const tasks = require("./routes/tasks");

// MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const PORT = 3000;
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

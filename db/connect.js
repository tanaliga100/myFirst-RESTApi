const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://jordan100:jordan100@nodeexpressprojects.i0sme95.mongodb.net/NODE-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

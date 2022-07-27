const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://shyam-dev:uC0Sd8VwvJgWpskm@cluster0.luc7y.mongodb.net/?retryWrites=true&w=majority";

const initiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("connected to db");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = initiateMongoServer;

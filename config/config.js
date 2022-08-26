const mongoose = require("mongoose");

const connetDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url);
    console.log(`mongoDB conneted ${conn.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
  }
};

module.exports = connetDB;

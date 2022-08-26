const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Pizza = require("./models/pizzaModel");
const Pizzas = require("./data/pizza-data");
const connetDB = require("./config/config");

//config dotenv and mongoDB conn file
dotenv.config();
connetDB();

//import data

const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampaleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampaleData);
    console.log("Data Imported...");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}

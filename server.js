const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const connetDB = require("./config/config");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(morgan("dev"));
connetDB();

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoute"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/FrontEnd/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "FrontEnd", "build", "index.html"));
  });
} else {
  //route
  app.get("/", (req, res) => {
    res.send("hello world");
  });
}

app.listen(PORT, () => {
  console.log(`server running on port no: ${PORT}`);
});

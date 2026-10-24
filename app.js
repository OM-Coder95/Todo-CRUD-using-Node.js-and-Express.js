const cl = console.log;

const express = require("express");
const cors = require("cors");
const router = require("./routes/todoRoutes");

let app = express();

app.use(express.json());
app.use(cors());
app.use("/api/todo", router);

module.exports = app;

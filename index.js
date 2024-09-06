const express = require("express");
const port = 5000;
const app = express();
const db = require("./config/database");
const crud = require("./model/movieSchema")
const path = require('path')
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.use('/uploads',express.static(path.join(__dirname, "uploads")))


app.use("/", require('./routes'));

app.listen(port, (err) => {
    console.log(err ? "error" : `Server start on port = ${port}`)
});
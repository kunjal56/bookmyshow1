const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movieBook");

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log("Error occurd") : console.log("Database start Successfully !")
});
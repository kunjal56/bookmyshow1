const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({

    moviePoster: {
        type: String,
        required: true
    },

    movieName: {
        type: String,
        required: false
    },

    votes: {
        type: Number,
        required: false
    },

    genre: {
        type: String,
        required: false
    },

    language: {
        type: String,
        required: false
    },

    relDate: {
        type: Date,
        required: false
    },

    duration: {
        type: String,
        required: false
    },

    aboutMovie: {
        type: String,
        required: false
    },

});

const crud = mongoose.model("movieTicketPr", movieSchema);

module.exports = crud
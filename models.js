const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: 'a@email.com',
    },
});

const User = mongoose.model("users", UserSchema);

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: 'a@email.com',
    },
});

const Movie = mongoose.model("movies", MovieSchema);

module.exports = { User, Movie };
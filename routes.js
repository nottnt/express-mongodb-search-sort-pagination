const express = require("express");
const { User: userModel, Movie: movieModel } = require("./models");
const { generateSearchObj, generateSortObject, generatePaginationObject } = require('./helper')
const app = express();


const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
}
app.get("/users", async (request, response) => {
    try {
        const { query } = request
        let users = []
        const count =  await userModel.countDocuments({})

        if (isEmpty(query)) {
            users = await userModel.find({}).limit(10);
        } else {
            const { search, sort } = query
            const searchObj = generateSearchObj(search)
            const sortObj = generateSortObject(sort)
            const { limit, skip } = generatePaginationObject(query.offset, query.limit)

            users = await userModel.find(searchObj).sort(sortObj).limit(limit).skip(skip);
        }

        response.send({
            data: users,
            count
        });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/movies", async (request, response) => {
    try {
        const { query } = request
        let movies = []
        const count = await movieModel.countDocuments({})

        if (isEmpty(query)) {
            movies = await movieModel.find({}).limit(10);
        } else {
            const { search, sort } = query
            const searchObj = generateSearchObj(search)
            const sortObj = generateSortObject(sort)
            const { limit, skip } = generatePaginationObject(query.offset, query.limit)

            movies = await movieModel.find(searchObj).sort(sortObj).limit(limit).skip(skip);
        }

        response.send({
            data: movies,
            count
        });
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = app;

const express = require("express");
const app = express();

const movies = [
    {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
    },
    {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
    },
    {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
    },
];

/* Route Get "/" */

app.get("/", (req, res) => {
    res.send("Welcome to my favorite movie list");
});

/* Route Get "/api/movies" */

const getMovies = (req, res) => {
    res.status(200).json(movies);
    };
    
    app.get("/api/movies", getMovies);

/* Route Get "/api/movies/:id" */

app.get("/api/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);

    const foundMovie = movies.find((movie) => movie.id === movieId);

    if (foundMovie) {
    res.status(200).json(foundMovie);
    } else {
    res.status(404).send("Not Found");
    }
});

module.exports = app;
var express = require("express");
var app = express();
var fs = require("fs");
var people = JSON.parse(fs.readFileSync("./files/people.json"));
var films = JSON.parse(fs.readFileSync("./files/films.json"));
var planets = JSON.parse(fs.readFileSync("./files/planets.json"));
var species = JSON.parse(fs.readFileSync("./files/species.json"));
var starships = JSON.parse(fs.readFileSync("./files/starships.json"));
var vehicles = JSON.parse(fs.readFileSync("./files/vehicles.json"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8000, () => {
 console.log("Server running on port 8000");
});

app.get("/people", (req, res, next) => {
    res.json([people]);
});
app.get("/films", (req, res, next) => {
    res.json([films]);
});
app.get("/planets", (req, res, next) => {
    res.json([planets]);
});
app.get("/species", (req, res, next) => {
    res.json([species]);
});
app.get("/starships", (req, res, next) => {
    res.json([starships]);
});
app.get("/vehicles", (req, res, next) => {
    res.json([vehicles]);
});
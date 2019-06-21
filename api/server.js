const express = require("express");
const server = express();
const Games = require("../games/gamesModel.js");

server.use(express.json());

server.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I'm server. I was sent to destroy you." });
});

server.get("/games", (req, res) => {
  Games.getAll().then(games => {
    res.status(200).json(games);
  });
});

module.exports = server;

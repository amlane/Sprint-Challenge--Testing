const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll
};

function insert(game) {
  return db("games")
    .insert(game, "id")
    .then(ids => {
      return db("games")
        .where({ id: ids[0] })
        .first();
    });
}

function getAll() {
  return db("games");
}

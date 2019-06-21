exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", game => {
    game.increments();

    game.string("title", 128).notNullable();

    game.string("genre", 128).notNullable();

    game.integer("releaseYear", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};

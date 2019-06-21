const db = require("../data/dbConfig.js");
const { insert } = require("./gamesModel.js");

describe("games model tests", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    beforeEach(async () => {
      await db("games").truncate();
    });
    it("should add a new game", async () => {
      await insert({
        title: "Donkey Kong",
        genre: "Platform",
        releaseYear: 1981
      });
      const games = await db("games");
      expect(games).toHaveLength(1);
    });
    it("should add the provided game name", async () => {
      let game = {
        id: 2,
        title: "Katamari",
        genre: "Puzzle",
        releaseYear: 1981
      };
      const inserted = await insert(game);
      expect(inserted).toEqual(game);
    });
  });
});

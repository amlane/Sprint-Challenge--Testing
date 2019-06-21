const supertest = require("supertest");
const server = require("./server.js");

describe("initial test", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});

describe("GET/games", () => {
  it("should respond with status code 200", () => {
    return supertest(server)
      .get("/games")
      .expect(200);
  });
  it("should return content type in JSON format", () => {
    return supertest(server)
      .get("/games")
      .expect("Content-Type", /json/i);
  });

  it("should always return any array", () => {
    return supertest(server)
      .get("/games")
      .then(res => {
        expect(Array.isArray());
      });
  });
});

describe("POST/games", () => {
  it("should return a status code of 422 when data is incomplete", async () => {
    let game = { title: "Street Fighter", genre: "", releaseYear: "" };

    await supertest(server)
      .post("/games")
      .send(game);

    expect(res.status).toEqual(422);
  });

  it("should return status 201 when is data is complete", async () => {
    let game = {
      title: "SuperMarioBros",
      genre: "Platform game",
      releaseYear: 1985
    };

    await supertest(server)
      .post("/games")
      .send(game);
    expect(res.status).toEqual(201);
  });

  it("should return correct shape of object and db contraints", () => {
    return supertest(server)
      .get("/games")
      .then(res => {
        expect(res.body).toEqual({
          title: "Katamari",
          genre: "Puzzle game",
          releaseYear: 2004
        });
      });
  });
});

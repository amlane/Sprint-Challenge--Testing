const supertest = require("supertest");
// const server = require("./server.js");

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
  it("should return correct shape of object and db contraints", () => {
    return supertest(server)
      .get("/games")
      .then(res => {
        expect(res.body).toEqual({
          title: "SuperMarioBros",
          genre: "Platform game",
          releaseYear: 1985
        });
      });
  });
});

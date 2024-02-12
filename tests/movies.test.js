const request = require("supertest");
const app = require("../app");

describe("GET /api/movies/:id", () => {
    it("should return one movie", async () => {
        const response = await request(app).get("/api/movies/1");

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    });
    it("should return error 404", async () => {
        const response = await request(app).get("/api/movies/5");
    
    expect(response.status).toEqual(404);
    });
});
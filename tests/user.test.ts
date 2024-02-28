import request from "supertest";
import app from "../src/app";

describe("Get /users", () => {
  it("responds with json empty array", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

describe("Post /users", () => {
  it("responds with 201 created", async () => {
    const newUser = { id: 1, name: "John Doe", email: "johndoe@mail.com" };
    const response = await request(app)
      .post("/api/users")
      .send(newUser)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.text).toBe("User added successfully");
  });
});

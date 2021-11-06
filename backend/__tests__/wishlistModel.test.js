const mongoose = require("mongoose");
const app = require("../server");
const request = require("supertest");
mongoose.connect(
  "mongodb+srv://test:test@cluster0.3uhux.mongodb.net/shoppingDB?retryWrites=true&w=majority"
);
const usersModel = require("../db/models/user");

beforeAll(async () => {
  await usersModel.remove();
});
afterEach(async () => {
  await usersModel.remove();
});
afterAll(async () => {
  await usersModel.remove();
  mongoose.connection.close();
});

describe("Testing User Model", () => {
  it("check if the model defined", () => {
    expect(usersModel).toBeDefined();
  });

  it(" should save a user", async () => {
    const userInfo = {
      firstName: "omar",
      lastName: "hushki",
      age: 27,
      email: "omar@gmail.com",
      password: "123",
    };
    const newUser = new userModel(userInfo);
    await newUser.save();
    const checker = await userModel.findOne({ email: "omar@gmail.com" });
    expect(checker.email).toEqual(userInfo.email);
  });
});

describe("testing User API", () => {
  const userInfo = {
    firstName: "omar",
    lastName: "hushki",
    age: 27,
    email: "omar@gmail.com",
    password: "123",
  };
  it("POST / able to create a user ", async () => {
    const theUser = await request(app).post("/users").send(userInfo);
    expect(typeof theUser.body).toEqual(typeof userInfo);
    expect(theUser.statusCode).toBe(200);
    expect(theUser.body).toHaveProperty("_id");
    expect(theUser.body.email).toBe(userInfo.email);
  });
  it("GET / able to get the user ", async () => {
    const theUser = await request(app).get("/users").send(userInfo);
    expect(typeof theUser.body).toEqual(typeof userInfo);
    expect(theUser.statusCode).toBe(200);
    expect(theUser.body).toHaveProperty("_id");
    expect(theUser.body.email).toBe(userInfo.email);
  });

  const userUpdate = {
    firstName: "khalid",
    lastName: "hushki",
    age: 33,
    email: "khalid@gmail.com",
    password: "123",
  };

  it("PUT / able to update the user ", async () => {
    const theUser = await request(app).put("/users/hushki").send(userUpdate);
    expect(theUser.body).toEqual({
      firstName: "khalid",
      lastName: "hushki",
      age: 33,
      email: "khalid@gmail.com",
      password: "123",
    });
    expect(theUser.statusCode).toBe(200);
    expect(theUser.body).toHaveProperty("_id");
  });

  it("Delete / able to delete the user ", async () => {
    const theUser = await request(app).delete("/users/hushki");
    expect(theUser.body).toEqual({
      status: "success",
      removed: "hushki",
      newLength: 0,
    });
    expect(theUser.statusCode).toBe(200);
  });
});

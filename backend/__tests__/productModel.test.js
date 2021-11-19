const mongoose = require("mongoose");
const app = require("../server");
const request = require("supertest");
const Product = require("./../db/models/product");
mongoose.connect(
  "mongodb+srv://test:test@cluster0.3uhux.mongodb.net/shoppingDB?retryWrites=true&w=majority"
);

beforeAll(async () => {
  await Product.remove();
});
afterEach(async () => {
  await Product.remove();
});
afterAll(async () => {
  await Product.remove();
  mongoose.connection.close();
});

describe("Testing Product Model", () => {
  it("check if the model defined", () => {
    expect(Product).toBeDefined();
  });

  it("should save a product", async () => {
    const productDetails = {
      title: "FoodToEat",
      description: "cat eat ",
      newprice: "10",
      oldPrice: "20",
      quantity: "1",
      img: "hhhh",
      category: "food",
    };
    const product = new Product(productDetails);
    await product.save();
    const checker = await Product.findOne({ title: "FoodToEat" });
    expect(checker.title).toEqual(productDetails.title);
  });
});

describe("testing Product API", () => {
  const productDetails = {
    title: "FoodToEat",
    description: "cat eat ",
    newprice: "10",
    oldPrice: "20",
    quantity: "1",
    img: "hhhh",
    category: "food",
  };
  it("able to create new a Product ", async () => {
    const newProduct = await (
      await request(app).post("/product")
    ).send(productDetails);
    expect(typeof newProduct.body).toEqual(typeof productDetails);
    expect(newProduct.statusCode).toBe(201);
    expect(newProduct.body).toHaveProperty("_id");
    expect(newProduct.body.title).toBe(productDetails.title);
  });

  it("able to get the Product ", async () => {
    const newProduct = await (
      await request(app).get("/product")
    ).send(productDetails);
    expect(typeof newProduct.body).toEqual(typeof productDetails);
    expect(newProduct.statusCode).toBe(201);
    expect(newProduct.body).toHaveProperty("_id");
    expect(newProduct.body.title).toBe(productDetails.title);
  });

  const productDetailsAfterUpdate = {
    title: "nothing to play ",
    description: "dogs  ",
    newprice: "50",
    oldPrice: "100",
    quantity: "10",
    img: "hjhjhjhjh",
    category: "food",
  };

  it("able to pdate  the Product ", async () => {
    const newProduct = await (
      await request(app).put("/product/:id")
    ).send(productDetailsAfterUpdate);
    expect(typeof newProduct.body).toEqual(typeof productDetailsAfterUpdate);
    expect(newProduct.statusCode).toBe(201);
    expect(newProduct.body).toHaveProperty("_id");
    expect(newProduct.body.title).toBe(productDetailsAfterUpdate.title);
  });
});

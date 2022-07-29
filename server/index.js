const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Product = require("./schema");

const app = express();
const PORT = process.env.PORT || 8080;
const ATLAS_URI = process.env.ATLAS_URI;

// Middlewares
app.use(express.json());
app.use(cors());

mongoose
  .connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => console.log("Connection to database failed", err));

// Return entire collection
app.get("/snkrs", (_, res) => {
  Product.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

// Return document with param query
app.get("/snkrs/availability/:availability", (req, res) => {
  Product.find({ availability: req.params.availability })
    .then((data) => res.status(200).send(data))
    .catch((err) => console.log(err));
});

// Return document with param id
app.get("/snkrs/product/:id", (req, res) => {
  Product.find({ _id: req.params.id })
    .then((data) => res.status(200).send(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));

const asyncHandler = require("express-async-handler");
const jsonData = require("../resources/dummydata.json");
const projectModel = require("../models/projectModel");

const getProducts = asyncHandler(async (req, res) => {
  const projects = await projectModel.find();
  console.log("projects", projects);
  res.status(200).json(projects);
});

const getSingularProduct = asyncHandler(async (req, res) => {
  const product = jsonData.products.find(
    (data) => data.id === parseInt(req.params.id)
  );
  res.status(200).json(product);
});

const creatPorject = asyncHandler(async (req, res) => {
  console.log("req.body", req.body, req.files);
  if (
    !req.body ||
    !req.body.title ||
    !req.body.description ||
    !req.body.techStack
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const project = await projectModel.create({
    ...req.body,
    ...req.files,
  });
  res.status(201).json(project);
});

module.exports = { getProducts, getSingularProduct, creatPorject };

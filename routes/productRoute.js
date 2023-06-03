const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingularProduct,
  creatPorject,
} = require("../controllers/productController");

router.route("/").get(getProducts).post(creatPorject);
router.route("/:id").get(getSingularProduct);
module.exports = router;

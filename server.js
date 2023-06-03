const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
var multer = require("multer");
const fileUpload = require("express-fileupload");

var forms = multer();

const app = express();
const port = process.env.PORT || 5000;
connectDb();
var corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://portfolio-react-hermit.onrender.com",
  ],
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(cors(corsOptions));
app.use("/api/products", require("./routes/productRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

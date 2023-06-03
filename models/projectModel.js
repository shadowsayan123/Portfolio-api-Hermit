const mongoose = require("mongoose");
require("mongoose-type-url");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the title"],
  },
  description: {
    type: String,
    required: [true, "Please add the description"],
  },
  techStack: [
    {
      type: String,
      required: [true, "Please add the description"],
    },
  ],
  image: {
    type: mongoose.SchemaTypes.Url,
  },
  url: {
    type: mongoose.SchemaTypes.Url,
  },
});

module.exports = mongoose.model("Project", projectSchema);

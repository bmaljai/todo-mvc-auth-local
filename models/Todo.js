const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  topCaption: {
    type: String,
    required: true,
  },
  bottomCaption: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);

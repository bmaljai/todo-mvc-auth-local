const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Meme", MemeSchema);

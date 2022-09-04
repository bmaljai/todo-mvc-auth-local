const Meme = require("../models/Meme");
const { cloudinary } = require("../config/cloudinary");

module.exports = {
  getMemes: async (req, res) => {
    try {
      const memeItems = await Meme.find({ userId: req.user.id });
      res.render("memes.ejs", {
        memes: memeItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createMeme: async (req, res) => {
    try {
      const uploadedPic = await cloudinary.uploader.upload(req.body.base64, {
        upload_preset: "ml_default",
      });

      await Meme.create({
        topCaption: req.body.topCaption,
        bottomCaption: req.body.bottomCaption,
        imageURL: uploadedPic.secure_url,
        completed: false,
        userId: req.user.id,
      });
      console.log("Meme has been added!");
      res.redirect("/memes");
    } catch (err) {
      console.log(err);
    }
  },
  deleteMeme: async (req, res) => {
    console.log(req.body.memeIdFromJSFile);
    try {
      await Meme.findOneAndDelete({ _id: req.body.memeIdFromJSFile });
      console.log("Deleted Meme");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};

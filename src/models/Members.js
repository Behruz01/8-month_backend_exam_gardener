const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    imageLink: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      default: null,
    },
    twitterLink: {
      type: String,
      default: null,
    },
    instagramLink: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = model("Members", schema);

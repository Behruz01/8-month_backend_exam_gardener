const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    imageLink: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Swiper", schema);

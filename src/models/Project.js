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
    isComplated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Project", schema);

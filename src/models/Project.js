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
    viewCount: {
      type: Number,
      default: 0,
    },
    lastViewed: {
      type: String,
    },
    viewDates: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = model("Project", schema);

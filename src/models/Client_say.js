const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    imageLink: {
      type: String,
    },
    fullname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Client_say", schema);

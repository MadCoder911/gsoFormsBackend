const mongoose = require("mongoose");
const { Schema } = mongoose;
const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    identity: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    registered_at: {
      type: String,
      required: false,
    },
    personal_id_front: {
      type: String,
      required: true,
    },
    personal_id_back: {
      type: String,
      required: true,
    },
    payment_pic: {
      type: String,
      required: true,
    },
    uni_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("FormSchema", FormSchema);

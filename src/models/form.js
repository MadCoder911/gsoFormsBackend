const mongoose = require("mongoose");
const { Schema } = mongoose;
const FormSchema = new mongoose.Schema({
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
});
module.exports = mongoose.model("FormSchema", FormSchema);

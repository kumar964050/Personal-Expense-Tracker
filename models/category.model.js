const mongoose = require("mongoose");

const TRANSACTION_TYPES = ["income", "expense"];

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: TRANSACTION_TYPES, required: true },
});
module.exports = mongoose.model("Category", categorySchema);

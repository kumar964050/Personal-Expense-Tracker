const mongoose = require("mongoose");

const TRANSACTION_TYPES = ["income", "expense"];

const transactionSchema = mongoose.Schema(
  {
    type: { type: String, required: true, enum: TRANSACTION_TYPES },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Transaction", transactionSchema);

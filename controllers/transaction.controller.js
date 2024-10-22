const Transaction = require("../models/transaction.model");
const Category = require("../models/category.model");

// create
exports.addTransaction = async (req, res, next) => {
  try {
    const category = await Category.create({
      name: req.body.category,
      type: req.body.type,
    });
    req.body.category = category._id;
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

// get all
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().populate("category");
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

// get by id
exports.getTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate(
      "category"
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

// update
exports.updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

// delete
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    next(error);
  }
};

//get summary
exports.getSummary = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    const balance = totalIncome - totalExpenses;
    res.status(200).json({ totalIncome, totalExpenses, balance });
  } catch (error) {
    next(error);
  }
};

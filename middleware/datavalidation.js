const validateTransaction = (req, res, next) => {
  const { type, category, amount } = req.body;

  //type
  if (!["income", "expense"].includes(type)) {
    return res
      .status(400)
      .json({ message: "Invalid type. Must be income or expense." });
  }

  //category
  if (!category || typeof category !== "string") {
    return res
      .status(400)
      .json({ message: "Category is required and must be a string." });
  }

  //amount
  if (isNaN(amount) || amount <= 0) {
    return res
      .status(400)
      .json({ message: "Amount must be a positive number." });
  }

  next();
};

module.exports = validateTransaction;

const express = require("express");
const cors = require("cors");

const transactionRoutes = require("./routes/transaction");
const categoryRoutes = require("./routes/category");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

// global error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
});

module.exports = app;

// POST /transactions
// GET  /transactions
// GET  /transactions/:id
// PUT  /transactions/:id
// DELETE /transactions/:id
// GET  /summary

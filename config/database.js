// src/database/db.js
const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Database connected"));
};

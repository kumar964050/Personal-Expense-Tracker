require("dotenv").config(); // load environment variables
require("./config/database").connect(); // connect to the database

// Uncaught Exception handler
process.on("uncaughtException", (e) => {
  console.error("Unhandled Exception:");
  console.error(e.message);
  process.exit(1);
});

// Unhandled Rejection handler
process.on("unhandledRejection", (e) => {
  console.error("Unhandled Rejection:");
  console.error(e.message);
  process.exit(1);
});

const app = require("./app");
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

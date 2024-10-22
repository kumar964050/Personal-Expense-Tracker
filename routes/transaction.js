const router = require("express").Router();

const dataValidation = require("../middleware/datavalidation");

const controller = require("../controllers/transaction.controller");

router.get("/summary", controller.getSummary);
router.get("/", controller.getTransactions);

router.post("/", dataValidation, controller.addTransaction);
router.put("/:id", controller.updateTransaction);
router.get("/:id", controller.getTransactionById);
router.delete("/:id", controller.deleteTransaction);

module.exports = router;

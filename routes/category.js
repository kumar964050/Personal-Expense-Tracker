const router = require("express").Router();
const controller = require("../controllers/category.controller");

router.post("/", controller.addCategory);
router.get("/", controller.getCategories);

module.exports = router;

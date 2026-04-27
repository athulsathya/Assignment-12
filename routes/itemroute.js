const express = require("express");
const router = express();
const foodController = require("../controller/itemController");

router.get("/", foodController.getAllFoods);
router.get("/:id", foodController.getFoodsById);
router.post("/", foodController.createNewFoods);
router.put("/:id", foodController.updatingFoods);
router.patch("/:id", foodController.updatepartial);
router.delete("/:id", foodController.deleteFood);

module.exports = router;

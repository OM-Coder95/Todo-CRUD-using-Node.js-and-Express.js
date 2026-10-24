const express = require("express");
const router = express.Router();

const todoController = require("../controller/todoController");

router.get("/", todoController.getTodos)
router.get("/:id", todoController.getSingleTodo);
router.post("/", todoController.createTodo);
router.patch("/:id", todoController.updateTodo);
router.delete("/:id", todoController.removeTodo);

module.exports = router;
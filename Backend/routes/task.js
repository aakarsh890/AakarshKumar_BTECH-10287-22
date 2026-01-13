const express = require("express");
const auth = require("../middleware/auth");
const {
  createTask,
  getTasks,
  updateTask,
  updateStatus,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.put("/:id", auth, updateTask);
router.put("/:id/status", auth, updateStatus);
router.delete("/:id", auth, deleteTask);

module.exports = router;

const express = require("express");
const auth = require("../middleware/auth");
const {
  updateProfile,
  deleteProfile
} = require("../controllers/userController");

const router = express.Router();

router.put("/update", auth, updateProfile);
router.delete("/delete", auth, deleteProfile);

module.exports = router;

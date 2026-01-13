const User = require("../models/user.js");

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    if (!name && !email) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true, runValidators: true }
    ).select("-password");

    res.json({ message: "Profile updated", user });
  } catch (error) {
    res.status(500).json({ message: "Profile update failed" });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    await User.findByIdAndDelete(userId);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "User deletion failed" });
  }
};

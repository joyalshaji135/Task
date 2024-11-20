const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Edit user profile
router.put('/edit', auth, async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { username, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile.", error });
  }
});

module.exports = router;

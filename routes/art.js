const express = require('express');
const Art = require('../models/Art');
const auth = require('../middleware/auth');
const multer = require('multer');
const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Add art
router.post('/add', auth, upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  const imageUrl = req.file.path;
  
  try {
    const art = new Art({ title, description, imageUrl, artist: req.user.id });
    await art.save();
    res.status(201).json({ message: "Art added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error adding art.", error });
  }
});

// Get all arts
router.get('/', async (req, res) => {
  try {
    const arts = await Art.find().populate('artist', 'username');
    res.json(arts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching arts.", error });
  }
});

module.exports = router;

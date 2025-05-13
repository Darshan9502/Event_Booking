const express = require('express');
const router = express.Router();
const SliderImage = require('../Models/SliderImage');

// Get all active slider images
router.get('/api/slider-images', async (req, res) => {
  try {
    const sliderImages = await SliderImage.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(sliderImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new slider image (admin only)
router.post('/api/slider-images', async (req, res) => {
  try {
    const { title, subtitle, imageUrl } = req.body;
    
    const newSliderImage = new SliderImage({
      title,
      subtitle,
      imageUrl
    });

    const savedImage = await newSliderImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
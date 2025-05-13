const mongoose = require('mongoose');
const SliderImage = require('./Models/SliderImage');

const MONGODB_URI = 'mongodb://localhost:27017/Event_Booking';

const sliderImages = [
  {
    title: 'Discover Amazing Events',
    subtitle: 'Find the best events happening near you',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Music Festivals 2025',
    subtitle: 'Book your tickets for the hottest music events',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Tech Conferences',
    subtitle: 'Learn from industry leaders and innovators',
    imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');
  
  // Clear existing data
  await SliderImage.deleteMany({});
  
  // Insert new data
  await SliderImage.insertMany(sliderImages);
  
  console.log('Slider images seeded successfully');
  process.exit(0);
})
.catch(err => {
  console.error('Error seeding slider images:', err);
  process.exit(1);
});
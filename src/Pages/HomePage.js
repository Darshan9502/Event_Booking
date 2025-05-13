// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick';
// import '../Assets/css/Style.css';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

// const Home = () => {
//   const [sliderImages, setSliderImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSliderImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/slider-images');
//         setSliderImages(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching slider images:', err);
//         setError('Failed to load slider images');
//         setLoading(false);
//       }
//     };

//     fetchSliderImages();
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true
//   };

//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         {loading ? (
//           <div className="loading-indicator">Loading...</div>
//         ) : error ? (
//           <div className="error-message">{error}</div>
//         ) : sliderImages.length === 0 ? (
//           <div className="hero-content">
//             <h1>Find and Book Amazing Events</h1>
//             <p>Discover the best events happening around you</p>
//             <div className="hero-buttons">
//               <button className="primary-btn">Explore Events</button>
//               <button className="secondary-btn">List Your Event</button>
//             </div>
//           </div>
//         ) : (
//           <Slider {...sliderSettings} className="hero-slider">
//             {sliderImages.map((slide) => (
//               <div key={slide._id} className="slider-item">
//                 <div 
//                   className="slider-background" 
//                   style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.imageUrl})` }}
//                 ></div>
//                 <div className="hero-content">
//                   <h1>{slide.title}</h1>
//                   <p>{slide.subtitle}</p>
//                   <div className="hero-buttons">
//                     <button className="primary-btn">Explore Events</button>
//                     <button className="secondary-btn">List Your Event</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         )}
//       </section>

//       <section className="featured-events">
//         <h2>Featured Events</h2>
//         <div className="event-cards">
//           <div className="event-card">
//             <div className="event-image"></div>
//             <div className="event-info">
//               <h3>Music Festival 2025</h3>
//               <p className="event-date">June 15, 2025</p>
//               <p className="event-location">Central Park, New York</p>
//               <button className="book-btn">Book Now</button>
//             </div>
//           </div>
          
//           <div className="event-card">
//             <div className="event-image"></div>
//             <div className="event-info">
//               <h3>Tech Conference</h3>
//               <p className="event-date">July 10, 2025</p>
//               <p className="event-location">Convention Center, San Francisco</p>
//               <button className="book-btn">Book Now</button>
//             </div>
//           </div>
          
//           <div className="event-card">
//             <div className="event-image"></div>
//             <div className="event-info">
//               <h3>Food & Wine Festival</h3>
//               <p className="event-date">August 5, 2025</p>
//               <p className="event-location">Downtown, Chicago</p>
//               <button className="book-btn">Book Now</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="how-it-works">
//         <h2>How It Works</h2>
//         <div className="steps">
//           <div className="step">
//             <div className="step-icon">1</div>
//             <h3>Find Events</h3>
//             <p>Browse through our curated list of events or search for specific ones</p>
//           </div>
          
//           <div className="step">
//             <div className="step-icon">2</div>
//             <h3>Book Tickets</h3>
//             <p>Select your event and book tickets in just a few clicks</p>
//           </div>
          
//           <div className="step">
//             <div className="step-icon">3</div>
//             <h3>Attend & Enjoy</h3>
//             <p>Get your e-tickets instantly and enjoy the event</p>
//           </div>
//         </div>
//       </section>

//       <section className="testimonials">
//         <h2>What Our Users Say</h2>
//         <div className="testimonial-cards">
//           <div className="testimonial">
//             <p>"The easiest way to find and book events. Saved me hours of searching!"</p>
//             <div className="user">
//               <div className="user-avatar"></div>
//               <div className="user-info">
//                 <h4>Sarah Johnson</h4>
//                 <p>Event Enthusiast</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="testimonial">
//             <p>"As an event organizer, this platform has helped me reach a wider audience."</p>
//             <div className="user">
//               <div className="user-avatar"></div>
//               <div className="user-info">
//                 <h4>Michael Chen</h4>
//                 <p>Event Organizer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../Assets/css/Style.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/slider-images');
        setSliderImages(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching slider images:', err);
        setError('Failed to load slider images');
        setLoading(false);
      }
    };

    fetchSliderImages();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : sliderImages.length === 0 ? (
          // Fallback to static hero section if no images in DB
          <div className="hero-content">
            <h1>Find and Book Amazing Events</h1>
            <p>Discover the best events happening around you</p>
            <div className="hero-buttons">
              <button className="primary-btn">Explore Events</button>
              <button className="secondary-btn">List Your Event</button>
            </div>
          </div>
        ) : (
          <Slider {...sliderSettings} className="hero-slider">
            {sliderImages.map((slide) => (
              <div key={slide._id} className="slider-item">
                <div 
                  className="slider-background" 
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.imageUrl})` }}
                ></div>
                <div className="hero-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <div className="hero-buttons">
                    <button className="primary-btn">Explore Events</button>
                    <button className="secondary-btn">List Your Event</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </section>

      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="event-cards">
          {/* Example Event Cards - These would typically come from your API */}
          <div className="event-card">
            <div className="event-image"></div>
            <div className="event-info">
              <h3>Music Festival 2025</h3>
              <p className="event-date">June 15, 2025</p>
              <p className="event-location">Central Park, New York</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-image"></div>
            <div className="event-info">
              <h3>Tech Conference</h3>
              <p className="event-date">July 10, 2025</p>
              <p className="event-location">Convention Center, San Francisco</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-image"></div>
            <div className="event-info">
              <h3>Food & Wine Festival</h3>
              <p className="event-date">August 5, 2025</p>
              <p className="event-location">Downtown, Chicago</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Find Events</h3>
            <p>Browse through our curated list of events or search for specific ones</p>
          </div>
          
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Book Tickets</h3>
            <p>Select your event and book tickets in just a few clicks</p>
          </div>
          
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Attend & Enjoy</h3>
            <p>Get your e-tickets instantly and enjoy the event</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"The easiest way to find and book events. Saved me hours of searching!"</p>
            <div className="user">
              <div className="user-avatar"></div>
              <div className="user-info">
                <h4>Sarah Johnson</h4>
                <p>Event Enthusiast</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial">
            <p>"As an event organizer, this platform has helped me reach a wider audience."</p>
            <div className="user">
              <div className="user-avatar"></div>
              <div className="user-info">
                <h4>Michael Chen</h4>
                <p>Event Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
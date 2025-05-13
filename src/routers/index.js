// src/router/index.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

// Import pages
import Home from '../Pages/HomePage';
// import About from '../pages/About';
// import EventList from '../pages/EventList';
// import EventDetail from '../pages/EventDetail';
// import Contact from '../pages/Contact';
import Login from '../Pages/Login';
// import Register from '../pages/Register';
import NotFound from '../Pages/Notfound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="events" element={<EventList />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={<Register />} /> */}
          
          {/* Redirect if path doesn't exist */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../containers/Header/header';
import Footer from '../containers/Footer/footer';
import '../Assets/css/Style.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
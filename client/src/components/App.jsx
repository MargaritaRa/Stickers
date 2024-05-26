// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;


// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from './Header';
import Footer from './Footer';

const stripePromise = loadStripe('pk_test_51PL4oZ1drKeT8jIsAsYh6wW3nkvWtKuxcpvHUs98trYqmUAGDySFdnfZqHLJlnSWgrx7gRF5ULEnt39w87x94tCy00lrgs39i4');

function App() {
  return (
    <Elements stripe={stripePromise}>
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div> 
    </Elements>
  );
}

export default App;


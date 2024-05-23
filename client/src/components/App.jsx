
import Header from './Header'
import Footer from './Footer'
import CartPage from './CartPage'
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'




function App() {

  const[currentUser, setCurrentUser] = useState(null)

  

  //Effect//
  useEffect(() => {
    fetch('/api/check-session')
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(loggedInUser => setCurrentUser(loggedInUser))
      }
    })
  },[])




  return (
    <div className='App'>
      <h1>This is App.jsx</h1>

      

      <Header />

      <Outlet />



      <Footer />



    </div>
  )
}

export default App

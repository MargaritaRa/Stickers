
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'


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

      <Header />
      <Outlet />
      <Footer />


    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickerContainer from "./StickerContainer";
// import UserPanel from './UserPanel';


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
      {/* <UserPanel currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
      <Outlet context={{ currentUser, setCurrentUser }}/>
      <Footer />
    </div>
  )
}

export default App

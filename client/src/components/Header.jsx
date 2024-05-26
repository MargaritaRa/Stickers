// Header.jsx
import React, { useContext } from 'react';
import NavBar from './NavBar';
import CurrentUserContext from './CurrentUserContext';

export default function Header() {

  const { currentUser, logout } = useContext(CurrentUserContext);

  return (
    <header>
      <div className="header-content">
        <div className="logo" role="img">
          <h1>🧃Stickers🧃</h1>
        </div>
        <NavBar currentUser={currentUser} />
        {currentUser && (
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

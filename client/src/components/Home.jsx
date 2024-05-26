import React from "react"


export default function Home({ currentUser }){
    console.log('currentUser in Home:', currentUser);
    return (
        <div className="home">
          {currentUser && (
            <div className="user-info">
              <span>Welcome, {currentUser.username}!</span>
            </div>
          )}
        </div>
      );
    }

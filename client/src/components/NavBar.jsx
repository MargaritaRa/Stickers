import {NavLink, Link} from 'react-router-dom'


export default function NavBar({ currentUser }){
    return(
        
        <div>
            <nav>
            <div className="container nav-container">
                    <NavLink className={({isActive})=>isActive? "active":""} to='/'>Home</NavLink>
                    
                    <NavLink className={({isActive})=>isActive? "active":""} to='/cart'>Cart</NavLink>
                   
                    <NavLink className={({isActive})=>isActive? "active":""} to='/shopnow'>ShopNow</NavLink>
                  
                    <div className="user-info">
                        {currentUser ? (
                            <span>Welcome, {currentUser.username}!</span>
                        ) : (
                            <Link to="/userPanel">Login</Link>
                        )}
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}


import {NavLink, Link} from 'react-router-dom'


export default function NavBar({ currentUser }){
    return(
        
        <div>
            <nav className ='nav'>
                <h3>
                    <NavLink className={({isActive})=>isActive? "active":""} to='/'>Home</NavLink>
                    <br />
                    <NavLink className={({isActive})=>isActive? "active":""} to='/cart'>Cart</NavLink>
                    <br />

                    <NavLink className={({isActive})=>isActive? "active":""} to='/fav'>Favorites</NavLink>

                    <br />
                    <div className="user-info">
                        {currentUser ? (
                            <span>Welcome, {currentUser.username}!</span>
                        ) : (
                            <Link to="/userPanel">Login</Link>
                        )}
                    </div>
                </h3>
            </nav>
        </div>
    )
}


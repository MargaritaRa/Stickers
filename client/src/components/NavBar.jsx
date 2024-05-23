import {NavLink} from 'react-router-dom'


export default function NavBar(){
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

                    <NavLink className={({isActive})=>isActive? "active":""} to='/userPanel'>Login</NavLink>

                </h3>

            </nav>


        </div>
    )
}


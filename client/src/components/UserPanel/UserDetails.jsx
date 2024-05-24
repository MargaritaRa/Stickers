function Userdetails({currentUser, setCurrentUser}){

    function handleLogout(){
        setCurrentUser(null)
        fetch('/api/logout', {method:'DELETE'})
    }
    return(
        <div className='user_details'>
            <h2 className='logout'> {currentUser.name}</h2>
            <button className='btn-logout' onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Userdetails
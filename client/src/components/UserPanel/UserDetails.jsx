function Userdetails({currentUser, setCurrentUser}){

    function handleLogout(){
        setCurrentUser(null)
        fetch('/api/logout', {method:'DELETE'})
    }
    return(
        <div className='user_details'>
            <h2> {currentUser.name}</h2>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Userdetails
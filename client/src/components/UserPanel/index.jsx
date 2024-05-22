function UserPanel(){

    if (!currentUser){
        return(
            <div>

                <Signup setCurrentUser={setCurrentUser}/>
                <Login setCurrentUser={setCurrentUser}/>

            </div>
        )
    } else {
        return (
            <UserDetails currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        )
    }
}

export default UserPanel
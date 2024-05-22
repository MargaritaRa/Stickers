import Signup from './Signup'
import Login from './Login'
import UserDetails from './UserDetails'

function UserPanel({currentUser, setCurrentUser}){

    if (!currentUser){
        return(
            <div>

                <Signup setCurrentUser={setCurrentUser}/>
                <br />
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
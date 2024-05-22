import {useState} from 'react'

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()

        fetch('api/login',{
            method: 'POST',
            headers:{'Content-Type':'application/json', 'Accept':'application/json'},
            body:JSON.stringify({username, password})
            .then(res=>{
                if(res.ok){
                    res.json()
                    .then(user=>setCurrent(user))
                }else{
                    alert('Invalid username or password')
                }
            })
        })
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <input type="text" 
                onChange = {e=>setUsername(e.target.value)}
                value={username}
                placeholder='username'
                />

                <input type="password"
                onChange = {e=>setPassword(e.target.value)}
                value={password}
                placeholder='password'/>

                <input type="submit"
                value='Login'/>
                
            </form>

        </div>
    )
}

export default Login
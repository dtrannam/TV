import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'

const Login = ({auth, setAuth}) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    const loginUser = (event) => {
        event.preventDefault()

        if (login == "" || password == "") {
            alert("Enter a valid login or password")
        } else {
            const body = {
                login,
                password
            }

            fetch('http://localhost:8000/api/auth', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(body)  
            }).then((res) => {
                {
                    if(!res.ok) {
                        throw Error("Failed to login - Please try again")
                    }
                    return res.json()}
            }).then(data => {
                // TESTING STATUS
                console.log(data)
                setAuth({
                    login: data['login'],
                    token:  data['token']
                })
            }).catch(error => {  
                setPassword("");
                alert(error);
            })
        }
    }

    
    const handleLogin = (event) => {
        setLogin(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="authorization">
        <form onSubmit={loginUser}>
            <div className="container">
                <h1>Login</h1>
                <hr />
                    
                <label htmlFor="text"><b>Login</b></label>
                <input className="authFields" onChange={handleLogin} type="text" placeholder="Enter a Login" value={login} name="login" id="login" required/>

                <label htmlFor="password"><b>Password</b></label>
                <input className="authFields" onChange={handlePassword} type="password" placeholder="Enter a Password" value={password} name="psw" id="psw" required />
                <hr />

                <button type="submit" className="registerbtn">Sign In</button>
            </div>
            
            <div className="container signin">
                <p>Don't have an account? <Link to="/Register">Register Here</Link>.</p>
            </div>
        </form>
        </div>
    )
}

export default Login
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")


    const loginUser = (event) => {
        event.preventDefault()
        console.log(login)
        console.log(password)

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
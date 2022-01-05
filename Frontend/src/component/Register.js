import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const registerUser = (event) => {
        event.preventDefault()
        if (password != password2) {
            alert('Reconfirm password')
        } else if (password.length < 6) {
            alert('Password must be longer than 6 characters')
        } else {
            const body = {
                login,
                password
            }
            console.log(body)
        }
    }

    const handleLogin = (event) => {
        setLogin(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handlePassword2 = (event) => {
        setPassword2(event.target.value)
    }

    return (
        <div className="authorization">
        <form onSubmit={registerUser}>
            <div className="container">
                <h1>Register</h1>
                <hr />
                    
                <label htmlFor="text"><b>Login</b></label>
                <input className="authFields" onChange={handleLogin} type="text" placeholder= "Enter a Login" value={login} name="login" id="login" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input className="authFields" onChange={handlePassword} type="password" placeholder="Enter a Password" value={password} name="password" id="password" required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input className="authFields" onChange={handlePassword2}  type="password" placeholder="Enter a Password" value={password2} name="password2" id="password2" required />
                <hr />

                <button type="submit" className="registerbtn">Register</button>
            </div>
            
            <div className="container signin">
                <p>Already have an account? <Link to="/Login">Sign in</Link>.</p>
            </div>
        </form>
        </div>
    )
}

export default Register
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        login: "",
        password: ""
    })
    return (
        <div className="authorization">
        <form action="/">
            <div class="container">
                <h1>Login</h1>
                <hr />
                    
                <label for="text"><b>Login</b></label>
                <input className="authFields" type="text" placeholder="Enter a Login" name="login" id="login" required/>

                <label for="psw"><b>Password</b></label>
                <input className="authFields" type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <hr />

                <button type="submit" class="registerbtn">Sign In</button>
            </div>
            
            <div class="container signin">
                <p>Don't have an account? <Link to="/Register">Register Here</Link>.</p>
            </div>
        </form>
        </div>
    )
}

export default Login
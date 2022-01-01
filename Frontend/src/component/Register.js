import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        password2: ""
    })
    return (
        <div className="authorization">
        <form action="/">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                    
                <label for="text"><b>Login</b></label>
                <input className="authFields" type="text" placeholder="Enter a Login" name="login" id="login" required/>

                <label for="psw"><b>Password</b></label>
                <input className="authFields" type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input className="authFields" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                <hr />

                <button type="submit" class="registerbtn">Register</button>
            </div>
            
            <div class="container signin">
                <p>Already have an account? <Link to="/Login">Sign in</Link>.</p>
            </div>
        </form>
        </div>
    )
}

export default Register
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
        }
        loginUser(newUser, dispatch, navigate)
    }
    return (
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form onSubmit={handleLogin}>
                <label >ENAIL</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    autoFocus
                    onChange={e => setEmail(e.target.value)}
                />
                <label>PASSWORD</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit"> Login </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
        </section>
    );
}

export default Login;
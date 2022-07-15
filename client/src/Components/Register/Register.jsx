import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";
import "./register.css";
const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPasword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            username: username,
            password: password,
        }

        registerUser(newUser, dispatch, navigate)

    }
    return (
        <section className="register-container">
            <div className="register-title"> Sign up </div>
            <form onSubmit={handleRegister}>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email" autoFocus onChange={e => setEmail(e.target.value)} />
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" onChange={e => setPasword(e.target.value)} />
                <button type="submit"> Register </button>
            </form>
            {/* <div className="login-register"> Don't have an account yet? </div> */}
            <Link className="login-register-link" to="/login"> Login </Link>
        </section>

    );
}

export default Register;
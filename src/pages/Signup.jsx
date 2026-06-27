import { Link, useNavigate } from "react-router-dom";
import '../styles/Signup.css';
import { useState } from "react";
function Signup({ theme, setTheme }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shake, setShake] = useState(false);
    const handleSignup = () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            setShake(true);

            setTimeout(() => {
                setShake(false);
            }, 400);

            return;
        }

        navigate("/");
    }
    return (<div className="signup-container">

        <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙dark" : "🌞Light"}</button>
        <div className="signup-card">
            <h1>Sign Up</h1>
            <input className={`signup-input ${shake ? "shake" : ""}`} type="text" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}></input><br></br>
            <input className={`signup-input ${shake ? "shake" : ""}`} type="email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}></input><br></br>

            <div className="password-container">
                <input className={`signup-input ${shake ? "shake" : ""}`} type={showPassword ? "text" : "password"} placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}></input><br></br>

                <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "🔙" : "👁️"}
                </span>
            </div><br></br>
            <input className="signup-input" type="password" placeholder="Confirm password"></input>
            <button className="signup-btn" onClick={handleSignup}>Create Account</button><br></br>
            <p className="signup-subtitle">Already have an account?<br></br>
                <Link to="/">Login</Link>
            </p>
        </div>

    </div>);
}
export default Signup;
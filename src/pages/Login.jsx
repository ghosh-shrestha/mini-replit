import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css'
import { useState } from "react";
function Login({ theme, setTheme }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [shake, setShake] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        if (!email || !password) {
            setShake(true);

            setTimeout(() => {
                setShake(false);
            }, 400);

            return;
        }

        navigate("/editor");
    };
    return (<div className="login-Container">
        <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙dark" : "🌞Light"}</button>
        <div className="login-card">
            <h1 className="login-title">Login</h1>
            <input className={`login-input ${shake ? "shake" : ""}`} type="email" placeholder="email" value={email}
                onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <div className="password-container">
                <input className={`login-input ${shake ? "shake" : ""}`} type={showPassword ? "text" : "password"} placeholder="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🔙" : "👁️"}</span>
            </div><br></br>
            <button className="login-btn" onClick={handleLogin}>Login</button><br></br>
            <p className="login-subtitle">
                Don't have an account?<br></br>
                <Link to="/signup">Sign Up</Link>
            </p>
        </div>


    </div>);
}
export default Login;
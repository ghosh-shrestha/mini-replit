import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css'
function Login() {
    const navigate = useNavigate();
    return (<div className="login-Container">
        <div className="login-card">
            <h1 className="login-title">Login</h1>
            <input className="login-input" type="email" placeholder="email" ></input><br></br>
            <input className="login-input" type="password" placeholder="password"></input><br></br>
            <button className="login-btn" onClick={() => navigate("/editor")}>Login</button><br></br>
            <p className="login-subtitle">
                Don't have an account?<br></br>
                <Link to="/signup">Sign Up</Link>
            </p>
        </div>


    </div>);
}
export default Login;
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate();
    return (<div>
        <h1>Login</h1>
        <input type="email" placeholder="email" ></input><br></br>
        <input type="password" placeholder="password"></input><br></br>
        <button onClick={() => navigate("/editor")}>Login</button><br></br>
        <p>
            Don't have an account?<br></br>
            <Link to="/signup">Sign Up</Link> 
        </p>

    </div>);
}
export default Login;
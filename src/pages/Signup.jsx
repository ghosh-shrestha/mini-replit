import { Link,useNavigate } from "react-router-dom";
function Signup() {
    const navigate=useNavigate();
    return (<div>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Name"></input><br></br>
        <input type="email" placeholder="Email"></input><br></br>
        <input type="password" placeholder="Password"></input><br></br>
        <input type="password" placeholder="Confirm password"></input><br></br>
        <button onClick={()=>navigate("/editor")}>Create Account</button><br></br>
        <p>Already have an account?<br></br>
            <Link to="/">Login</Link>
        </p>
    </div>);
}
export default Signup;
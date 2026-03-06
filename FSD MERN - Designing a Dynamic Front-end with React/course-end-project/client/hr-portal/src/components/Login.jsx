import { useState } from "react";
import { signIn } from "../service/loginService";
import { Link, useNavigate } from "react-router-dom";

function Login() {
let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [role,setRole] = useState("");  
let navigate = useNavigate();
let signInHandler = async (e) => {
    e.preventDefault();
    let result = await signIn();
    console.log(email,password,role)
    let user = result.find((user) => user.email === email && user.password === password && user.role === role);
    console.log(user)
    if(user && role === "hr") {
        // alert("Login successful");
        navigate("/hr-dashboard");
    }else if(user && role === "Employee") {
        localStorage.setItem("employeeEmail", email);
        navigate("/employee-dashboard");
    }else {
        alert("Invalid credentials");
    }
}

    return(
        <>
        <h2>Login Page</h2>
        <form onSubmit={signInHandler}>
            <input type="email" placeholder='Enter your email' 
            value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type="password" placeholder='Enter your password' 
            value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">--Select Role--</option>
                <option value="hr">HR</option>
                <option value="Employee">Employee</option>
            </select><br/>
            <button type="submit">Login</button>
        </form>
        <Link to="/signup">Don't have an account? Sign Up</Link>
        </>
    )
}

export default Login
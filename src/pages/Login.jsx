import { Link } from "react-router-dom";
import "./Login.css";
import React from "react";

const Login=() =>{
    return(
        <div className="form-container">
            
            <h1 className="form-title">Welcome Back</h1>


            {/* Login Form */}
            <form>
                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input  
                       type="email"
                       id="email"
                       name="email"
                       placeholder="Enetr your email"/>
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  
                       type="password"
                       id="password"
                       name="password"
                       placeholder="Enetr your password"
                       />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary">
                    Login
                </button>
            </form>
            {/*Link to Register page*/}
            <p className="link-text">
                Don;t have an account?<Link to="/Register">Register here</Link>
            </p>    
        </div>
    );
};
export default Login;
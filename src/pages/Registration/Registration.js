import React, { useState } from "react";
import "./registration.css";

const Registration = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="container">
            {isLogin ? (
                <div className="a_box">
                  <div className="form-box">
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                        <p>
                            Don't have an account?{" "}
                            <button className="a_button" href="#" onClick={() => setIsLogin(false)}>Register</button>
                        </p>
                    </form>
                </div>
                </div>
            ) : (
                <div className="a_box">
                  <div className="form-box">
                    <h2>Register</h2>
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="contact.no" required />
                        <input type="text" placeholder="current add" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Register</button>
                        <p>
                            Already have an account?{" "}
                            <button className="a_button" href="#" onClick={() => setIsLogin(true)}>Login</button>
                        </p>
                    </form>
                </div>
                </div>
            )}
        </div>
    );
};

export default Registration;


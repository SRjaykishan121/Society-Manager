import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

function Login() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignInClick = (e) => {
        e.preventDefault();
        setIsClicked(true);
        navigate('/forget'); // Navigate to Forgot Password page
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
           
                {/* Image Section */}           
                <div className="col-lg-6 d-lg-flex align-items-center justify-content-center" style={{backgroundColor:"#eff4f9"}}>
                    <div className="image">
                    <h2 className="mt-5 mb-5 ms-3">Dash<span>Stack</span></h2>
                        <img src="src/image/Group1.jpg" alt="DashStack" className="img-fluid" />
                    </div>
                </div>

                {/* Login Form Section */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                        <h2 className="text-center mb-4">Login</h2>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="emailOrPhone">Email or Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailOrPhone"
                                    name="emailOrPhone"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className={`btn ${isClicked ? 'btn-danger' : 'btn-light'}`}
                                    onClick={handleSignInClick} // Trigger navigation
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/forget" className="text-decoration-none">Forgot Password?</Link>
                            </div>
                            <div className="text-center mt-2">
                                <p>
                                    Don't have an account? <a href="#" className="text-decoration-none">Registration</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

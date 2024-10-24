import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

function Login() {
    const [emailOrPhone, setEmailOrPhone] = useState(''); // State for email/phone input
    const [password, setPassword] = useState(''); // State for password input
    const [isClicked, setIsClicked] = useState(false); // State for button click feedback
    const [error, setError] = useState(''); // State for error handling
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignInClick = (e) => {
        e.preventDefault();
        setIsClicked(true);

        // Simple form validation
        if (!emailOrPhone || !password) {
            setError('Please fill out both fields.');
            return;
        }

        // Clear error if validation passes
        setError('');

        // Simulate authentication logic here (e.g., API call)
        // If successful, navigate to the desired page:
        navigate('/dashboard'); // Navigate to the dashboard or other desired page
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
                            {/* Email or Phone Input */}
                            <div className="form-group mb-3">
                                <label htmlFor="emailOrPhone">Email or Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailOrPhone"
                                    name="emailOrPhone"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)} // Update state on input change
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update state on input change
                                    required
                                />
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>

                            {/* Error Message Display */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Submit Button */}
                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className={`btn ${isClicked ? 'btn-danger' : 'btn-light'}`}
                                    onClick={handleSignInClick} // Trigger form submission
                                >
                                    Sign In
                                </button>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-center mt-3">
                                <Link to="/forget" className="text-decoration-none">Forgot Password?</Link>
                            </div>

                            {/* Registration Link */}
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

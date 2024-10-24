import React, { useState } from 'react';
import './ForgetPassword.css'; // Create this CSS for custom styles
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState(''); // State for email or phone input
  const [error, setError] = useState(''); // State for error handling
  const navigate = useNavigate(); // Hook for navigation

  const handleGetOtpClick = (e) => {
    e.preventDefault();

    // Basic validation: check if the input is empty
    if (!emailOrPhone) {
      setError('Please enter your email or phone number.');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Navigate to the OTP page if input is valid
    navigate('/otp');
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        {/* Left Section with Image */} 
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#eff4f9" }}>
          <div className="image-section">
            <h2 className="mt-5 mb-5 ms-3">Dash<span>Stack</span></h2>
            <img src="src/image/Group2.png" alt="DashStack" className="img-fluid mb-3" />
          </div>
        </div>

        {/* Forget Password Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="card shadow p-4 mt-5" style={{ width: '100%', maxWidth: '400px' }}>
            <h3 className="text-center mb-4">Forget Password</h3>
            <p className="text-center text-muted">Enter your email and we’ll send you an OTP to reset your password.</p>

            {/* Form */}
            <form>
              {/* Email or Phone Input */}
              <div className="form-group mb-3">
                <label htmlFor="emailOrPhone">Email or Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="99125 53222"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)} // Update state on input change
                  required
                />
              </div>

              {/* Display error message if validation fails */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* Get OTP Button */}
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-otp text-light"
                  onClick={handleGetOtpClick} // Trigger form validation and OTP request
                >
                  Get OTP
                </button>
              </div>

              {/* Back to Login Link */}
              <div className="text-center mt-3">
                <Link to="/login" className="text-decoration-none text-muted">Back to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

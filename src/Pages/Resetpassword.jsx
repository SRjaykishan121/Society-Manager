import React, { useState } from 'react';
import './ResetPassword.css'; // Optional CSS styling for the Reset Password page

const ResetPassword = () => {
  const [password, setPassword] = useState(''); // State for new password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
  const [error, setError] = useState(''); // State to display error messages

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else {
      setError('');
      // Handle password reset logic here
      alert('Password changed successfully!');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Left Image Section with background-color */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#eff4f9" }}>
        
          <div className="image-section">
          <h2 className="mt-1 mb-5 ms-3">Dash<span>Stack</span></h2>
            <img src="src/image/Group2.png" alt="DashStack" className="img-fluid mb-3" />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
            <h2 className="text-center mb-4">Reset Your Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-danger">{error}</p>}

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-otp btn-primary">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

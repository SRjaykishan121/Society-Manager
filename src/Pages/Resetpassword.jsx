import React, { useState } from 'react';
import './ResetPassword.css'; // Optional CSS styling

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Handle password reset logic here
      alert('Password changed successfully!');
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        {/* Left Image Section with background-color */}
        <div className="col-lg-6  d-lg-flex align-items-center justify-content-center" style={{backgroundColor:"#eff4f9"}}>
                    <div className="image p-5">
                        <h2 className="mt-5 mb-5 ms-3"><span></span></h2>
                        <img src="src/image/Group2.png" alt="Reset your password" className="img-fluid" />
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

              {error && <p className="text-danger">{error}</p>}

              <div className="d-grid">
                <button type="submit" className="btn btn-otp">
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

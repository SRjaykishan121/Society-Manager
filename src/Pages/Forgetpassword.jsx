import React from 'react';
import './ForgetPassword.css'; // Create this CSS for custom styles
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        {/* Left Section with Image */}
        <div className="col-lg-6 d-flex  align-items-center justify-content-center " style={{backgroundColor:"#eff4f9"}}>
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
              <div className="form-group mb-3">
                <label htmlFor="emailOrPhone">Email or Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="99125 53222"
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <Link to='/otp' type="submit" className="btn btn-otp text-light">Get OTP</Link>
              </div>
              <div className="text-center mt-3">
                <a href="/login" className="text-decoration-none text-muted">Back to Login</a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgetPassword;

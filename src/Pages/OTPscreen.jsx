import React, { useState } from 'react';
import './otpsreen.css';
import { Link } from 'react-router-dom';

function OTPscreen() {
    const [otp, setOtp] = useState(Array(6).fill("")); // State to hold OTP input
    const [resendTimer, setResendTimer] = useState(30); // Timer for resending OTP

    // Handle OTP input
    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (value.length <= 1) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    // Simulate resend timer countdown
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (resendTimer > 0) {
                setResendTimer((prevTimer) => prevTimer - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [resendTimer]);

    // Render OTP input boxes
    const renderOtpInputs = () => {
        return otp.map((data, index) => (
            <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                value={data}
                onChange={(e) => handleOtpChange(e, index)}
            />
        ));
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                {/* Left section with image */}
                <div className="col-lg-6  d-lg-flex align-items-center justify-content-center" style={{backgroundColor:"#eff4f9"}}>
                    <div className="image">
                        <h2 className="mt-5 mb-5 ms-3">Dash<span>Stack</span></h2>
                        <img src="src/image/Group1.jpg" alt="Reset your password" className="img-fluid" />
                    </div>
                </div>

                {/* OTP Form Section */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                        <h2 className="text-center mb-4">Enter OTP</h2>
                        <p className="text-center">Please enter the 6 digit code sent to your phone number.</p>
                        <div className="otp-input-group mb-4 text-center">
                            {renderOtpInputs()}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="timer-text">
                                {resendTimer > 0 ? (
                                    <>⏱ 00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer} sec</>
                                ) : (
                                    <a href="#" className="text-decoration-none">Resend OTP</a>
                                )}
                            </span>
                        </div>
                        <div className="d-grid gap-2">
                <Link to='/resetpass' type="submit" className="btn-otp btn text-light">Verify</Link>
              </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTPscreen;

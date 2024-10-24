import React, { useState, useEffect } from 'react';
import './otpsreen.css';
import { Link } from 'react-router-dom';

function OTPscreen() {
    const [otp, setOtp] = useState(Array(6).fill("")); // State to hold OTP input
    const [resendTimer, setResendTimer] = useState(30); // Timer for resending OTP
    const [error, setError] = useState(""); // State to handle any OTP errors

    // Handle OTP input change
    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (value.length <= 1 && /^[0-9]*$/.test(value)) { // Ensures only numbers are entered
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input automatically
            if (value !== "" && index < 5) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    // Handle OTP submission
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join(""); // Combine the OTP digits into a single string
        if (enteredOtp.length === 6) {
            setError(""); // Clear any previous errors
            // Submit OTP logic goes here
            console.log("OTP entered:", enteredOtp);
        } else {
            setError("Please enter a valid 6-digit OTP.");
        }
    };

    // Simulate resend timer countdown
    useEffect(() => {
        const interval = setInterval(() => {
            if (resendTimer > 0) {
                setResendTimer((prevTimer) => prevTimer - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [resendTimer]);

    // Handle OTP resend logic
    const handleResendOtp = () => {
        if (resendTimer === 0) {
            setResendTimer(30); // Reset timer for next OTP resend
            // Resend OTP logic goes here
            console.log("OTP resent");
        }
    };

    // Render OTP input boxes
    const renderOtpInputs = () => {
        return otp.map((data, index) => (
            <input
                key={index}
                id={`otp-input-${index}`} // ID to help focus on next input
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
                <div className="col-lg-6 d-lg-flex align-items-center justify-content-center" style={{ backgroundColor: "#eff4f9" }}>
               
                    <div className="image">
                    <h2 className="mt-1 mb-5 ms-3">Dash<span>Stack</span></h2>
                        <img src="src/image/Group1.jpg" alt="Reset your password" className="img-fluid" />
                    </div>
                </div>

                {/* OTP Form Section */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                        <h2 className="text-center mb-4">Enter OTP</h2>
                        <p className="text-center">Please enter the 6-digit code sent to your phone number.</p>

                        {/* OTP Inputs */}
                        <div className="otp-input-group mb-4 text-center">
                            {renderOtpInputs()}
                        </div>

                        {/* Error message display */}
                        {error && <p className="text-danger text-center">{error}</p>}

                        {/* Resend OTP or Timer */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="timer-text">
                                {resendTimer > 0 ? (
                                    <>⏱ 00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer} sec</>
                                ) : (
                                    <a href="#" className="text-decoration-none" onClick={handleResendOtp}>Resend OTP</a>
                                )}
                            </span>
                        </div>

                        {/* Submit OTP Button */}
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn-otp btn text-light"
                                onClick={handleOtpSubmit} // Validate and submit OTP
                            >
                                Verify
                            </button>
                        </div>

                        {/* Back to Login Link */}
                        <div className="text-center mt-3">
                            <Link to="/login" className="text-decoration-none text-muted">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTPscreen;

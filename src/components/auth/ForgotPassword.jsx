import React, { useState,useRef } from 'react';
import { EyeIcon, ArrowLeftIcon } from "lucide-react";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = useRef([]);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset submission
    console.log({ email, otp, newPassword });
  };

const handleNext = (e) => {
  e.preventDefault();
  if (step === 2 && otp.some((digit) => digit === '')) {
    alert('Please enter all 4 digits of the OTP.');
    return;
  }
  setStep((prev) => prev + 1);
};
  
  return (
    <div className="flex h-screen items-center justify-center">
     { /* Left Section */}
        <div className="w-[40%] p-10 flex flex-col items-center justify-center">
          <header className="flex w-full items-center justify-between py-6 px-4">
            <div className="flex items-center gap-2">
          <img className="" alt="Centaura Logo" src="logo.svg" />
            </div>
            <a
          href="/login"
          className="flex items-center gap-2 text-sm font-normal text-black hover:underline"
            >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Login
            </a>
          </header>

          <h1 className="text-3xl font-semibold mb-2">
            {step === 1 && 'Forgot Password?'}
            {step === 2 && 'Password Reset'}
            {step === 3 && 'Set a Password'}
          </h1>

          <p className="text-gray-600 text-sm mb-6 text-center">
            {step === 1 && "Enter your email and we'll send you a reset link."}
            {step === 2 && `We have sent a code to ${email}.`}
            {step === 3 && "Must be at least 8 characters."}
          </p>

          <form
            onSubmit={step === 3 ? handleSubmit : handleNext}
            className="w-full max-w-md"
          >
            {step === 1 && (
          <>
            <label className="block mb-1 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </>
            )}

            {step === 2 && (
          <>
            
            <div className="flex justify-around mb-5">
  {otp.map((digit, index) => (
    <input
      key={index}
      id={`otp-${index}`}
      ref={(el) => (inputsRef.current[index] = el)}
      type="text"
      inputMode="numeric"
      maxLength="1"
      className="w-16 h-16 text-center border border-gray-400 rounded text-xl focus:outline-none focus:border-blue-800"
      value={digit}
      onChange={(e) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        if (!val) return;

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        // Focus next input
        if (index < 3) {
          inputsRef.current[index + 1]?.focus();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Backspace') {
          e.preventDefault();
          const newOtp = [...otp];

          if (otp[index]) {
            // Clear current
            newOtp[index] = '';
            setOtp(newOtp);
          } else if (index > 0) {
            // Move focus back
            inputsRef.current[index - 1]?.focus();
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          inputsRef.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < 3) {
          inputsRef.current[index + 1]?.focus();
        }
      }}
      onPaste={(e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
        if (pasted.length === 4) {
          const newOtp = pasted.split('').slice(0, 4);
          setOtp(newOtp);
          inputsRef.current[3]?.focus();
        }
      }}
      required
      autoFocus={index === 0}
    />
  ))}
</div>
  <p className='text-center text-sm text-gray-600 mb-4'>Didn't recieve the email?  <a href='#' className='ml-1 text-sm' style={{color:"#0F6CDD",textDecoration:"underline"}}> Click to resend</a></p>


          </>
            )}

            {step === 3 && (
          <>
            <label className="block mb-1 text-sm font-semibold">New Password</label>
            <div className="relative mb-4">
              <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter New Password"
            className="w-full p-2 border border-gray-300 rounded pr-10"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
              />
              <EyeIcon
            className="w-5 h-5 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </>
            )}

            <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition mb-5"
            >
          {step === 1 && 'Send OTP'}
          {step === 2 && 'Verify OTP'}
          {step === 3 && 'Reset Password'}
            </button>
          </form>

          <div className="flex justify-between text-xs text-gray-400 mt-10 w-full max-w-md">
            <a href="#" className="hover:text-gray-500">Terms of Service</a>
            <a href="#" className="hover:text-gray-500">Privacy Policy</a>
          </div>
        </div>

        {/* Right Section */}
      <div
        className="w-[40%] h-[90%] bg-cover bg-no-repeat bg-right-top rounded-xl m-5"
        style={{ backgroundImage: 'url("we1.png")' }}
      />
    </div>
  );
}

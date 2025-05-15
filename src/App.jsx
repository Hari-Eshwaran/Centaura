import React from 'react'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import MFASelection from './components/auth/MFASelection'
import ForgotPassword from './components/auth/ForgotPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CompanyRegister } from './components/auth/CompanyRegister'
import { AdminDashboard } from './components/Admin/AdminDashboard'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/MFA" element={<MFASelection />} />
          <Route path="/Company-Register" element={<CompanyRegister/>} />
          <Route path="/MFA" element={<MFASelection/>} />
          <Route path="/Forgot-password" element={<ForgotPassword/>} />
          <Route path="/dashboard" element={<AdminDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

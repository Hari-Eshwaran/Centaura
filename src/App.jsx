import React from 'react'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import MFASelection from './components/auth/MFASelection'
import ForgotPassword from './components/auth/ForgotPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CompanyRegister } from './components/auth/CompanyRegister'
import { AdminDashboard } from './components/Admin/AdminDashboard'
import { AdminSettings } from './components/Admin/AdminSettings'
import { DataAccess } from './components/Admin/DataAccess'
import { AdminDelegation } from './components/Admin/AdminDelegation'
import { ClientReports } from './components/Admin/ClientReports'
import { AnalystDashboard } from './components/Analyst/AnalystDashboard'
import { Mapview } from './components/Analyst/Mapview'


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
          <Route path="/admin-settings" element={<AdminSettings/>} />
          <Route path="/data-access" element={<DataAccess/>} />
          <Route path="/admin-delegation" element={<AdminDelegation/>} />
          <Route path="/client-reports" element={<ClientReports/>} />
          <Route path="/Analyst-Dashboard" element={<AnalystDashboard/>} />
          <Route path="/Mapview" element={<Mapview/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

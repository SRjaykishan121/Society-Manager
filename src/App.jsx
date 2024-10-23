import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Forgetpassword from "./Pages/Forgetpassword"
import OTPscreen from "./Pages/OTPscreen"
import ResetPassword from "./Pages/Resetpassword"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/forget" element={<Forgetpassword/>}/>
        <Route path="/otp" element={<OTPscreen/>}/>
        <Route path="/resetpass" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App

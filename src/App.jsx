import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Forgetpassword from "./Pages/Forgetpassword"
import OTPscreen from "./Pages/OTPscreen"
import ResetPassword from "./Pages/Resetpassword"
import Header from "./component/Header"
import EditProfile from "./component/EditProfile"
import Residentmanagement from "./component/Residentmanagement"
import Ownerscreen from "./component/Ownerscreen"
import Tenantscreen from "./component/Tenantscreen"
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget" element={<Forgetpassword/>}/>
        <Route path="/otp" element={<OTPscreen/>}/>
        <Route path="/resetpass" element={<ResetPassword/>}/>
        <Route path="/Editpro" element={<EditProfile/>}/>
        <Route path="/residentmanage" element={<Residentmanagement/>}/>
        <Route path="/owner" element={<Ownerscreen/>}/> 
        <Route path="/tanent" element={<Tenantscreen/>}/>
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App

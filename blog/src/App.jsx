import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<h1>Forgot</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

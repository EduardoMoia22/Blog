import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/forgot-password" element={<h1>Forgot</h1>}/>
        </Routes>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

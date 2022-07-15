import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Dashboard } from "./pages/Dashboard"
import { Favorites } from "./pages/Favorites"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Products } from "./pages/Products"
import { Register } from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route 
            path="/login" 
            element={<Login />}
          />

          <Route 
            path="/register" 
            element={<Register />}
          />

          <Route 
            path="/forgot-password" 
            element={<h1>Forgot</h1>}
          />

          <Route 
            path="/" 
            element={<Home />}
          />

          <Route 
            path="/favorites" 
            element={<Favorites />}
          />
          
          <Route 
            path="/dashboard" 
            element={<Dashboard />}
          />
          
          <Route 
            path="/products/:id" 
            element={<Products />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

import { Link } from "react-router-dom"
import { Container } from "../components/Container"

export function Login(){
  
  function handleSubmit(e){
    e.preventDefault()
    console.log("oi")
  }
  
  return(
    <Container>
      <div className="flex flex-col items-center h-screen">
        <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mt-28">
          <span className="text-[38px] font-semibold">
            A
          </span>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-xl font-medium text-black text-center">
            Login to feed
          </h1>

          <form 
            onSubmit={handleSubmit} 
            className="mt-9 flex flex-col items-center justify-center gap-6"
          >
            <input 
              type="email" 
              placeholder="E-mail" 
              className="h-16 rounded-2xl shadow-sm shadow-slate-300 text-black pl-6 placeholder:font-semibold placeholder:text-base placeholder:text-light-gray"
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              className="h-16 rounded-2xl shadow-sm shadow-slate-300 text-black pl-6 placeholder:font-semibold placeholder:text-base placeholder:text-light-gray"
            />
            
            <Link 
              to="/forgot-password" 
              className="text-black font-medium text-sm"
            >
              Forgot Password?
            </Link>
            
            <input 
              type="submit" 
              value="Login" 
              className="bg-primary w-full h-16 rounded-2xl text-lg font-semibold cursor-pointer hover:bg-hover transition-colors"
            />
            
            <span className="text-light-gray font-medium text-sm">
              Don’t have an account?
              <Link 
                to="/register" 
                className="text-primary ml-2"
              >
                Sign Up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </Container>
  )
}
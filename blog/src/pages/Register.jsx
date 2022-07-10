import { Link } from "react-router-dom"
import { Container } from "../components/Container"
import { useState } from 'react'

export function Register(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e){
    setError("")
    
    e.preventDefault()
    
    checkIfThePasswordsAreTheSame()

  }

  function checkIfThePasswordsAreTheSame(){
    if(password !== confirmPassword){
      setError("Passwords must be the same!")
      return
    }else{
      const user = {
        email,
        password
      }
      console.log(user)
    }
  }
  
  return(
    <Container>
      <div className="flex flex-col items-center h-screen">
        <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mt-28">
          <span className="text-[38px] font-semibold">A</span>
        </div>

        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-xl font-medium text-black">
            Register to apparel
          </h1>

          <form onSubmit={handleSubmit}  className="mt-9 flex flex-col items-center justify-center gap-6">
            <input type="email" placeholder="E-mail" className="h-16 rounded-2xl shadow-sm shadow-slate-300 text-black pl-6 placeholder:font-semibold placeholder:text-base placeholder:text-gray" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="h-16 rounded-2xl shadow-sm shadow-slate-300 text-black pl-6 placeholder:font-semibold placeholder:text-base placeholder:text-gray" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" className="h-16 rounded-2xl shadow-sm shadow-slate-300 text-black pl-6 placeholder:font-semibold placeholder:text-base placeholder:text-gray" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <Link to="/login" className="text-black font-medium text-sm">
              Login now!
            </Link>
            <input type="submit" value="Register" className="bg-primary w-full h-16 rounded-2xl text-lg font-semibold cursor-pointer hover:bg-hover transition-colors"/>

            {
              error && <span className="bg-error w-full h-8 rounded-2xl text-base font-medium flex items-center justify-center outline outline-2 outline-error-outline">
                {error}
              </span>
            }
          </form>
        </div>
      </div>
    </Container>
  )
}
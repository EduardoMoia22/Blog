import { List, Bell, Heart } from  'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { motion } from "framer-motion"

export function Header(){
  const [isToggle, setIsToggle] = useState(false)

  return(
    <header>
      <div className='w-full flex justify-between items-center py-5 relative'>
        
        <motion.div whileTap={{ scale: 0.8 }}>
          <List size={24} color="#000000" weight="bold" className='cursor-pointer' onClick={() => setIsToggle(true)}/>
        </motion.div>

        <span className='font-medium text-lg text-black select-none'>
          Apparel
        </span>

        {
          isToggle ? (
            <aside className='absolute left-0 top-0 h-screen w-full bg-black bg-opacity-50'>
              <motion.nav className='w-full h-2/4 bg-white opacity-100 flex items-center justify-center'>
                <ul className='flex flex-col items-center gap-7'>
                  <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.12 }}>  
                    <NavLink to="/" className={isActive => "group"}>
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <Heart size={24} color="#A8AFB9" weight="fill" className='group-focus:fill-primary'/>
                        <span className='text-lg font-medium text-black'>Home</span>
                      </div>
                    </NavLink> 
                  </motion.li>

                  <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.12 }}>  
                    <NavLink to="/login" className={isActive => "group"}>
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <Heart size={24} color="#A8AFB9" weight="fill" className='group-focus:fill-primary'/>
                        <span className='text-lg font-medium text-black'>Favorites</span>
                      </div>
                    </NavLink> 
                  </motion.li>

                  <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.12 }}>  
                    <NavLink to="/register" className={isActive => "group"}>
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <Heart size={24} color="#A8AFB9" weight="fill" className='group-focus:fill-primary'/>
                        <span className='text-lg font-medium text-black'>Dash</span>
                      </div>
                    </NavLink> 
                  </motion.li>

                  <motion.li whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.12 }}>  
                    <button onClick={() => setIsToggle(false)} className={isActive => "group"}>
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <Heart size={24} color="#A8AFB9" weight="fill" className='group-focus:fill-primary'/>
                        <span className='text-lg font-medium text-black'>Home</span>
                      </div>
                    </button> 
                  </motion.li>
                </ul>
              </motion.nav>
            </aside>
          ) : null 
        }

        <Bell size={24} color="#000000" weight="bold" className='cursor-pointer'/>
      </div>
    </header>
  )
}
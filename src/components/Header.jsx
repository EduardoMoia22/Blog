import { List, PlusCircle, Heart, X, House } from  'phosphor-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { motion } from "framer-motion"

export function Header(){
  const [isToggle, setIsToggle] = useState(false)

  return(
    <header>
      <div className='w-full flex justify-between items-center py-5 px-5 relative z-50'>
        
        <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
          {
            isToggle ? 
              <X 
                size={24} 
                weight="bold" 
                color='#000000'
                className='cursor-pointer' 
                onClick={() => setIsToggle(false)}
              /> :
              <List 
                size={24} 
                color="#000000" 
                weight="bold" 
                className='cursor-pointer' 
                onClick={() => setIsToggle(true)}
              /> 
          }
        </motion.div>

        <span className='font-medium text-lg text-black select-none text-center'>
          Home
        </span>

        {
          isToggle ? (
            <aside className='absolute left-0 top-0 h-screen w-full -z-10'>
              <motion.nav 
                className='w-full h-2/4 bg-background opacity-100 flex items-center justify-center transition-all ease-linear'
                whileInView={{ translateY: 20 }}
              >
                <ul 
                  className='flex flex-col items-center gap-7'
                >
                  <motion.li 
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.12 }}
                  >  
                    <NavLink 
                      to="/" 
                      className={isActive => "group"}
                    >
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <House 
                          size={24} 
                          weight="fill" 
                          color="#A8AFB9"
                          className='group-focus:fill-primary cursor-pointer'
                        />
                        <span className='text-lg font-medium text-black'>
                          Home
                        </span>
                      </div>
                    </NavLink> 
                  </motion.li>

                  <motion.li 
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.12 }}
                  >  
                    <NavLink 
                      to="/favorites" 
                      className={isActive => "group"}
                    >
                      <div className='flex items-center justify-start gap-2 w-28'>
                        <Heart 
                          size={24} 
                          color="#A8AFB9" 
                          weight="fill" 
                          className='group-focus:fill-primary cursor-pointer'
                        />
                        <span className='text-lg font-medium text-black'>
                          Favorites
                        </span>
                      </div>
                    </NavLink> 
                  </motion.li>

                  <motion.li 
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.12 }}
                  >  
                    <NavLink 
                      to="/dashboard"
                      className={isActive => "group"}
                    >
                      <div className='flex items-center justify-start gap-2 w-28'>
                      <PlusCircle 
                        size={24} 
                        weight="fill"
                        color="#A8AFB9"
                        className='group-focus:fill-primary cursor-pointer'
                      />
                        <span className='text-lg font-medium text-black'>
                          Create
                        </span>
                      </div>
                    </NavLink> 
                  </motion.li>
                </ul>
              </motion.nav>
              
              <div 
                className=' h-full bg-black bg-opacity-50' 
                onClick={() => setIsToggle(false)}
              >
              </div>
            </aside>
          ) : null 
        }

      <PlusCircle 
        size={24} 
        weight="bold"
        color='#000000'
        className='cursor-pointer'  
      />
      </div>
    </header>
  )
}
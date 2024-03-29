import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import headerImg from "../assets/global/header.jpg"
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar:React.FC = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <div className='flex flex-col w-full h-48 sm:h-64 2xl:h-[500px] relative cursor-default' style={{fontFamily: "Salsa"}}>
      <img src={headerImg} alt="home1" className={`brightness-75 2xl:brightness-50 object-cover h-full w-full ${menu ? "opacity-50" : "opacity-100"}`}/>
      <h1 style={{fontFamily: "Salsa"}} className='text-slate-100 absolute w-full text-end mt-4 pr-4 sm:pr-6 2xl:pr-10 text-xl sm:text-4xl opacity-100 2xl:cursor-pointer' onClick={() => navigate("/")}>Healthy Day</h1>
      <div className='w-full flex justify-between items-end absolute bottom-0 2xl:pb-6'>
        <h1 className='text-mypink text-3xl sm:text-5xl 2xl:text-8xl pl-4 sm:pl-6 2xl:pl-10 pb-2 sm:pb-14 2xl:pb-10 tracking-wider'>
          Healthy goodness<br/> that you can enjoy
        </h1>
        <div onClick={() => setMenu(!menu)} className={`sm:hidden pr-4 pb-2 sm:pb-4`}>
          { menu 
            ? <FontAwesomeIcon icon={faXmark} className='text-slate-100 fa-2x' /> 
            : <FontAwesomeIcon icon={faBars} className='text-slate-100 fa-2x' />
          }
        </div>
        <div className='hidden sm:flex text-slate-100 text-2xl 2xl:text-4xl sm:justify-end gap-5 2xl:gap-8 absolute bottom-0 w-full pr-6 2xl:pr-10 pb-2'>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to="/">Home</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='ingredienti'>Ingredients</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to="ricettario">Recipes</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='pianifica'>Planner</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='contattaci'>Contact</NavLink>
          <NavLink className='text-slate-100 cursor-pointer 2xl:hover:text-mypink' onClick={() => setMenu(false)} to='about'>About</NavLink>
        </div>
      </div>
      {
        menu ? (
          <motion.div initial={{x:-300}} animate={{x:0}} transition={{delay: 0, duration: 0.5}} className='flex flex-col justify-center gap-8 py-14 pl-4 w-2/3 bg-mygreen opacity-90 absolute top-0 text-2xl tracking-widest font-bold z-10'>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="/">Home</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="ingredienti">Ingredients</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="ricettario">Recipes</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="pianifica">Planner</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="contattaci">Contact</NavLink>
            <NavLink className='text-slate-100' onClick={() => setMenu(false)} to="about">About</NavLink>
          </motion.div> 
        ) : null
      }
    </div>
  )
}

export default Navbar

import { useState } from "react"
import {motion} from 'motion/react'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  function Navigation(){
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-li">
                <a href="#work" className="nav-link">Work</a>
            </li>
            <li className="nav-li">
                <a href="#contact" className="nav-link">Contact</a>
            </li>
        </ul>
    )
  }
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
        <div className="mx-auto max-w-7xl c-space">
            {/* Desktop version */}
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className="text-xl font-bold text-neutral-400 hover:text-white transition-colors">Abdulrahman</a>
                <button className="flex cursor-pointer text-neutral-400 hover:text-white transition-colors min-sm:hidden focus:outline-none">
                    <img src={isOpen?"assets/close.svg":"assets/menu.svg"}  onClick={()=>setIsOpen((prev)=>!prev)} className="w-6 h-6" alt="toggle" />
                </button>
                <nav className='hidden min-sm:flex'>
                    <Navigation/>
                </nav>
            </div>
        </div>
        {/* Mobile version */}
        {
            isOpen&&(        
                <motion.div className="text-center min-sm:hidden overflow-hidden" 
                    initial={{opacity:0,x:-10}}
                    animate={{opacity:1,x:0}}
                    style={{maxHeight:"100vh"}}
                    transition={{duration:1}}
                >
                    <nav className="pb-5">
                        <Navigation/>
                    </nav>
                </motion.div>
            )
        }
    </div>
  )
}

export default Navbar
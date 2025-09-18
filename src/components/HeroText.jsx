import { FlipWords } from "./FlipWords"
import {motion} from 'motion/react'
const words = ["Modern","Secure","Scalable"]
const HeroText = () => {
  const variants = {
    hidden:{opacity:0,x:-50},
    visible:{opacity:1,x:0}
  }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <motion.div className="flex-col hidden md:flex c-space">
            <motion.h1 variants={variants} initial="hidden" animate="visible" transition={{delay:0.5}} className="text-4xl font-medium ">Hi I'm Abdulrahman</motion.h1>
            <motion.div className="flex flex-col items-start">
                <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay:0.8}} className="text-5xl font-medium text-neutral-300">A Developer <br/> Dedicated To Crafting</motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.1}}>
                    <FlipWords words={words} className="font-black text-white text-8xl"/>
                </motion.div>
                <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay:1.4}} className="text-4xl font-medium text-neutral-300">Web Solutions</motion.p>
            </motion.div>
        </motion.div>
        {/* Mobile View */}
        <motion.div className="flex flex-col md:hidden space-y-6">
            <motion.h1 variants={variants} initial="hidden" animate="visible" transition={{delay:0.5}} className="text-4xl font-medium">Hi I'm Abdulrahman</motion.h1>
            <motion.div>
                <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay:0.8}} className="text-5xl font-black text-neutral-300">
                    Building
                </motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.1}}>
                    <FlipWords words={words} className="font-bold text-white text-7xl"/>
                </motion.div>
                <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay:1.4}} className="text-4xl font-black text-neutral-300">
                    Web Applications
                </motion.p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default HeroText
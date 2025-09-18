import { useRef } from "react"
import Card from "../components/Card";
import { cardDataArray } from "../Constants/cardItemData";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] " alt="" />
                <div className="z-10">
                  <p className="headtext">Hi,I'm Abdulrahman Muhammad</p>
                  <p className="subtext">Over the last 3 years , I developed my frontend and backend dev skills to deliver dynamic and responsive software web applications.</p>
                </div>
                <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
              <div className="flex items-center justify-center w-full h-full" ref={grid2Container}>
                <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                {
                  cardDataArray.map((card,index)=>(
                    <Card key={index} style={{rotate:card.rotate,top:card.top,left:card.left,bottom:card.bottom&&card.bottom}} text={card.text} image={card.image} containerRef={grid2Container}/>

                  ))
                }
              </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
              <div className="w-[50%] z-10">
                <p className="headtext">Time Zone</p>    
                <p className="subtext">I'm based in Egypt ,and open to remote work worldwide</p>    
              </div>
              <figure className="absolute left-[30%] top-[10%]">
                <Globe/>
              </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
              <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="headtext text-center">Do you want to start a project together</p>
                <CopyEmailButton/>
              </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
              <div className="z-10 w-[50%]">
                <p className="headtext">Teck Stack</p>
                <p className="subtext">
                  I specialize in a variety of languages ,frameworks,
                  and tools that allow me to 
                  build robust and scalable applications
                </p>
              </div>
              <div className="inset-y-0 absolute md:inset-y-9 w-full h-full start-[50%] md:scale-125 ">
                 <Frameworks/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About

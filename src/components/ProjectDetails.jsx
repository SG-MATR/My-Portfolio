import {motion} from 'motion/react'
const ProjectDetails = ({title,description,subDescription,image,tags,href,setIsOpenModel}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
        <motion.div 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-mid to-navy border-white/10">
          <button onClick={()=>setIsOpenModel(false)} className="absolute top-5 right-5 p-2 rounded-sm bg-midnight hover:bg-gray-500">
            <img src="assets/close.svg" alt="close" className="w-6 h-6" />
          </button>
          <img src={image} alt="image" className="w-full rounded-t-2xl " />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc,index)=>(
              <p className="mb-3 font-normal text-neutral-400" key={index}>{subDesc}</p>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag,index)=>(
                <img key={index} src={tag.path} alt="tagName" className="rounded-lg size-10 hover-animation" />
              ))}
            </div>
            <a href={href} target="blank" className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer">View Project <img src="/assets/arrow-up.svg" alt="" className="size-4" /></a>
          </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails
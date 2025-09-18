import { useState } from 'react'
import ProjectDetails from '../components/ProjectDetails'
const Project = ({project,setPreview}) => {
  const [isOpenModel,setIsOpenModel] = useState(false);
  return (
    <>
    <div onMouseEnter={()=>setPreview(project.image)} onMouseLeave={()=>setPreview(null)} className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
      <div>
        <p className="text-2xl">{project.title}</p>
        <div className="flex gap-5 mt-2 text-sand">
          {
            project.tags.map((tag)=>(
              <span key={tag.id}>{tag.name}</span>
            ))
          }
        </div>
      </div>
      <button onClick={()=>setIsOpenModel(true)} className="flex items-center gap-1 cursor-pointer hover-animation">
        Read More
        <img src="/assets/arrow-right.svg" alt="arrow" className="w-5" />
      </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    {
      isOpenModel&&(
        <ProjectDetails setIsOpenModel={setIsOpenModel} title={project.title} description = {project.description} subDescription = {project.subDescription} image={project.image} tags={project.tags} href={project.href}/>
      )
    }
    </>
  )
}

export default Project
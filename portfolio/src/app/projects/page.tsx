import { Suspense } from 'react'
import ProjectContent from './projectContent'
import Loading from '../loading'


const Projects = () => {
  return (
     <Suspense fallback={<Loading />}>
      <ProjectContent />
     </Suspense>
  )
}

export default Projects

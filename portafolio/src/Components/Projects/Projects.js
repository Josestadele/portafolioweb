import {useState} from 'react'
import ProjectsList from './ProjectsList'

const Projects = () =>{

    const [projects, setProjects] = useState([
        {title:"projecto 1" ,body:"EEsabanas",link:"www.holas.com", id:1},
        {title:"projecto 2" ,body:"Portafolio web",link:"www.holas.com", id:2},
        {title:"projecto 3" ,body:"Mercadeoucab",link:"www.holas.com", id:3}
    ]);

    const DeleteProjects = (id)=>{
        const newprojects = projects.filter(projects => projects.id !== id);
        setProjects( newprojects) ;
    }

    return (

        <div className="projects">
           <ProjectsList projects={projects} DeleteProjects={DeleteProjects}/>
        </div>

    );
}

export default Projects
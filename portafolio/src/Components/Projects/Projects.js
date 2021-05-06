import {useState} from 'react'
import ProjectsList from './ProjectsList'

const Projects = () =>{

    const [projects, setProjects] = useState([
        {img:"/static/assets/img/eesabanas.png",title:" EEsabanas" ,body:"Este es un proyecto personal que sigo en desarrollo ",caracteristicas:['React','JavaEE','MySql'],link:"www.holas.com", id:1},
        {img:"/assets/img/myweb.png",title:"Portafolio web" ,body:"Este proyecto fue realizado mas que todo para practicar y mostrar mis habilidades con esta libreria ",caracteristicas:['React'],link:"www.holas.com", id:2},
        {img:"/static/assets/img/mercadeoucab.png",title:"Mercadeoucab" ,body:"Este proyecto lo realice en Desarrollo del Software ",caracteristicas:['Angular','JavaEE','MySql'],link:"www.holas.com", id:3}
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
import {useState, useEffect} from 'react';
import { Grid,Grow ,Typography } from '@material-ui/core'


import '../../style/SkillsList.css'



const SkillsList = ({skills}) => {


 const[checked,setCheked]= useState(false);

 useEffect(() => {
    setCheked(true);
 }, [])

    return (  
        <div className="content-Skills">
            <div className="container">
            <Typography  component={'div'} classname="container" >
                <h6 className="parrafo-skils"> Estas son  mis <span className="text-color"> habilidades </span>que conozco <br /> y con las
                    que he hecho los proyectos durante mi  <span className="text-color">trayecto en la 
                    universidad</span> <br />seguire con mi aprendisaje  
                    ya que sabemos que todos los dias podemos aprender nuevas cosas </h6>

                    <Grid container className="grid-container" >           
                    {skills.map((skills)=>(
                        <Grow  in={checked} {...(checked ? {timeout:2000}:{})}   key={skills.id} >
                                    <p className="h1-skills" >| {skills.title} |</p>
                            
                        </Grow>
                        
                    ))}
                </Grid>
            </Typography>
            </div>
           
        </div>
    );
}
 
export default SkillsList;
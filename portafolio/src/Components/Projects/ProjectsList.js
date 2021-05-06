
import {Card,CardActionArea,CardContent,CardMedia,Grid,Typography } from '@material-ui/core'
import "../../style/Card.css"

const ProjectsList = ({projects}) => {
   // const projects= props.projects;
  
    return (  
        <div className="project-list">
            <Typography  component='div' >
               <h6 className="project-text"> Hola como estas todo bien ? estos son los <br /> 
                proyectos concluidos  si quieres echarle un ojito eres bienvenido</h6>


            
                <Grid container >
                    {projects.map((projects) => (
                        <Card className= "card"  key={projects.id} >
                            <CardMedia src={projects.img} >  </CardMedia>            

                            
                            <CardContent>
                                <div><h2>{projects.title}</h2></div>
                                <div><h6>{projects.body}</h6></div>  
                                <div>{projects.caracteristicas}</div>
                                   
                            </CardContent>
                            <CardActionArea>
                                <h6> proximamente link </h6>
                            </CardActionArea>
                        </Card>
                    ))}
            </Grid>


            </Typography>

        </div>
    );
}
 
export default ProjectsList;
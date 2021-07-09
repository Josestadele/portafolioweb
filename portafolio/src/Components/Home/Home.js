import {useEffect ,useState,React} from 'react'
import {IconButton, Typography,Collapse}  from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const staylest = makeStyles((theme)=>({
   home:{
      fontFamily:'Nunito',
      color :'#fff',
      display:'flex',
      height:'100vh',
      justifyContent:'center',
      paddingLeft:20,
      alignItems:'center',
  
   },
   colorText:{
      color:'#FFD700'
  },
  colorButton:{
   color:'#FFD700',
   fontSize:'4rem',
  }

}));

const Home = () => {
   const classe= staylest();
   const [checked,setChecked] = useState(false);

   useEffect(() => {
      setChecked(true);
   }, [])

    return (  
        
       <div className={classe.home}>
          <Collapse  in={checked} {...(checked ? {timeout:3000}:{})} collapsedHeight={30} >
          
               <Typography  component={'div'}>
                  <h1> Hi <span className={classe.colorText}>Welconme</span> to my web  
                     <br/>by <span className={classe.colorText}>Jose</span> 
                  </h1>  
               </Typography>

               <IconButton>
                  <Link to="/skills" ><ExpandMoreIcon className={classe.colorButton}  /></Link>
               </IconButton>  
         </Collapse>  


              
       </div>

    );
}
 
export default Home;
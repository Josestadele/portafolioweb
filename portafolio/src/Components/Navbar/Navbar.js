import '../../style/Navbar.css';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles';
const staylest = makeStyles((theme)=>({
    appbar:{
        
        background:'none',
        fontFamily:'Nunito',
    },
    Toolbar:{

        width:'80%',
        margin:'0 auto',
    },
    title:{
        flexGrow:'1',
    },
    Link:{

        fontFamily:'Nunito',
        color:'#fff',
        TextDecoration:'none',
        paddingLeft: '10',

    },
    colorText:{
        color:'#FFD700'
    }
}));

const Navbar = () => {
    const classe= staylest();
    return (  
        
         <AppBar className={classe.appbar} elevation={0} >
           <Toolbar className={classe.Toolbar}>
                <Typography className={classe.title} component={'div'}>
                    
                        <h3>Hello <span className={classe.colorText}> Word </span></h3> 
                    
                </Typography>
                <Typography component={'div'}>
                    <Link className={classe.Link} style={{ paddingLeft: 20 ,textDecoration: 'none' }} to="/"> Home</Link>
                    <Link className={classe.Link} style={{ paddingLeft: 20 ,textDecoration: 'none'}}to="/aboutMe"> About <span className={classe.colorText}>me</span></Link>
                    <Link className={classe.Link} style={{ paddingLeft: 20 ,textDecoration: 'none'}}to="/skills"> Skills</Link>
                    <Link className={classe.Link} style={{ paddingLeft: 20 ,textDecoration: 'none'}}to="/projects"> Projects</Link>
                    <Link className={classe.Link} style={{ paddingLeft: 20 ,textDecoration: 'none'}}to="/contact"> Contact </Link> 
                </Typography> 
            </Toolbar> 
           </AppBar>
        
    );
}
 
export default Navbar;




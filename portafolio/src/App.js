import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AbouteMe';
import Skills from './Components/Skills/Skills'
//import Contact from './Components/Contact/Contact';

import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';

import Particles from 'react-particles-js';
import ParticleConfig from './Components/Particles/ParticleConfig';


function App() {
 
  return (
    
   <Router>
    <div className ="App" style={{ position:'relative', overflow:"hidden"}}>
        <Navbar />  


        <div style={{position:'absolute'}}>
          <Particles height="100vh" width="100vw" params={ParticleConfig}/>
        </div>

            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>

              <Route exact path="https://josestadele.github.io/portafolioweb/">
                <Home />
              </Route>

              <Route path="/AboutMe">
               <AboutMe />
              </Route>

              <Route path="/skills">
               <Skills />
              </Route>

              <Route path="/contact">
               
              </Route>

            </Switch>
          
    </div>
   </Router>
  );
}

export default App;

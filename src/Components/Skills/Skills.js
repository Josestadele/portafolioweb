import {useState} from 'react'

import SkillsList from './SkillsList'

const Skills =()=>{

    const [lenguajes] = useState([
        {img:"",title:"React" ,body:"", id:1},
        {img:"",title:"Angular" ,body:"",id:2},
        {img:"",title:"JavaScript" ,body:"", id:3},
        {img:"",title:"Css/Css3" ,body:"", id:4},
        {img:"",title:"Html" ,body:"", id:5},
        {img:"",title:"Java" ,body:"", id:6},
        {img:"",title:"Sql" ,body:"", id:7},
        {img:"",title:"python" ,body:"", id:8},

    ]);

    return(
            <div>
               <SkillsList skills={lenguajes}  />
            </div>
    );
}

export default Skills;
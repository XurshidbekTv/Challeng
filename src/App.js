import './App.css';
import React from 'react';

function App() {
  return (
    <div className="card">
     <Avatar/>
     <div className="data">
      <Intro/>
      <SkillList/>
     </div>
    </div>
  );
}

function Avatar(){
  return(
  <img src="img/Untitled.png" alt="unteted" className='avatar'/>
 )
}
function Intro(){
  return(
    <div>
      <h1>Jonsn Schendment</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat voluptas delectus quidem similique dolore vel, velit sed, nemo nisi at aut necessitatibus nulla illum esse labore optio dicta laborum!</p>
    </div>
  )
}
function SkillList(){
return(
  <div className='skill-list'>
    <Skill skill='React' emoj='👌' color='#123456'/>
    <Skill skill='JavaScript' emoj='👌' color='pink'/>
    <Skill skill='Html + Css' emoj='👌' color='orangered'/>
    <Skill skill='Sevlet' emoj='👌' color='orange'/>
    <Skill skill='Bootstrap' emoj='👌' color='yellow'/>
  </div>
)
}
function Skill(props){
return(
  <div className='skill' style={{backgroundColor: props.color}}>
    <span >{props.skill}</span>
    <span>{props.emoj}</span>
  </div>
)
}
export default App;

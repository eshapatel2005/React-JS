import './video.css';





let Topic = "React Js";
let bgcolor = "bg";

function Video(){
    return (
    <>
    <img src="https://www.gradschoolcenter.com/wp-content/uploads/2020/05/fig-21-05-2020_04-51-40.jpg" />
    <div className={bgcolor} style={{backgroundColor:'red'}}>{Topic} Tutorial- Components</div>
  </>
)}

function Thumb(){
    return <div>Thumb</div>
} 



export  {Video,Thumb};
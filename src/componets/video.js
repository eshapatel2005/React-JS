import './video.css';



let Topic = "React Js";
let bgcolor = "bg";
let Name="The Compass";
let Names="15k views  . 1 year age";




function Navs(props){
  return (
    <>
      <div className="container">
      <img className="Imgs" src="https://miro.medium.com/v2/resize:fit:500/0*BLKyNRy3P7SMz5Kw.jpeg" />
      <div className={bgcolor} style={{backgroundColor:'white',textAlign:'center'}}>{props.title}</div>
      <div style={{backgroundColor:'white',textAlign:'center'}}>{props.company}</div>
      <div style={{backgroundColor:'white',textAlign:'center'}}> {props.views} {props.year}</div>
      <button className="button">{props.button}</button>

      
      </div>
    </>
)}
export default Navs;
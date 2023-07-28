import './App.css';

import Navs from './componets/video';



let logo= "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg";


let firstName="Esha";
let lastName="Patel";
let age=19;
let city="surat";


function App() {

  return (
    <div>
    <h1 className="nav">Esha</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p className="navb">{firstName}</p>
    <p className="navb">{lastName}</p>
    <p className="navb">{age}</p>
    <p className="navb">{city}</p>

    
    <Navs title="React js tutorials"  company="The Compass"  views="20k" year="2021" button="React Js"></Navs>
    <Navs title="node js tutorials"  company="The Compass"  views="30k" year="2023" button="node Js"></Navs>
    <Navs title="Full Stack tutorials"  company="The Compass"  views="40k" year="2022" button="Full Stack Js"></Navs>


    
    </div>
  );
}


export default App;

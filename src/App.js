import './App.css';

import Navs from './componets/video';
function App() {

  return (
   
    <div>
    <Navs url="https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg" title="React js tutorials"  company="The Compass"  views="20k" year="2 years ago" button="React Js"></Navs>
    <Navs url="https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg" title="Node js tutorials"  company="The Compass"  views="30k" year="3 years ago" button="Node Js"></Navs>
    <Navs url="https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg" title="Full Stack tutorials"  company="The Compass"  views="40k" year="1 years ago" button="Full Stack Js"></Navs>
    <Navs url="https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg" title="Javascript tutorials"  company="The Compass"  views="50k" year="4 years ago" button="Javascript "></Navs>



    </div>
  );
}


export default App;
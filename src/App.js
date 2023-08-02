import './App.css';

import Navs from './componets/video';



function app(){
  let obj = {
    title: 'Dark',
    views: '15k',
    year: '1 year ago',
    company: 'The Compass',
    url: 'https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg',
    button:'Node Js'
  }

  return (
    <div>
      <div>Videos</div>
      <video {...obj}></video>
     </div> 
  ); 
}  



export default app;
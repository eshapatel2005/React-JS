

import video from './componets/data';

import Video from './componets/Video';

import PlayButton from './componets/PlayButton';


function app(){
 
 
  

  return (
  <div className="app">
   
   
   <div style={{clear:'both'}}>
    <PlayButton name="Play" message="play message"></PlayButton>
    <PlayButton name="Pause" message="Pause message"></PlayButton>
    </div>
  </div>

  
  )
}



export default app;





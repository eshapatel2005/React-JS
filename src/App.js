

import video from './componets/data';

import Video from './componets/Video';

import PlayButton from './componets/PlayButton';


function app(){
 
 
  

  return (
  <div className="app">
   
    <div style={{fontSize:'30px',textAlign:'center'}}>REACT JS</div>
    {
      video.map(video=><Video  key={video.id} title={video.title} views= {video.views}  year={video.year} channel={video.company} url={video.url} verified={video.verified} id={video.id} button={video.button}></Video>
    )}
    <div style={{clear:'both'}}>
      <PlayButton message="play msg" onPlay={()=>console.log('Playy')} onPause={()=>console.log('Pause')}>Play</PlayButton>
      {/* <PlayButton message="Pause msg" onPause={()=>alert('Pause')}>Pause</PlayButton> */}
    </div>
 
  </div>

  
  )
}



export default app;





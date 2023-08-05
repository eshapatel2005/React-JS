

import video from './componets/data';

import Video from './componets/Video';


function app(){
 
 
  

  return (
  <div className="app">
    <div>Videojs</div>
    {
      video.map(video=><Video  key={video.id} title={video.title} views= {video.views}  year={video.year} channel={video.company} url={video.url} verified={video.verified} id={video.id} button={video.button}></Video>
    ) 
  }
  </div>
  )
}



export default app;





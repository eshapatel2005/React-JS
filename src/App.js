import './App.css';


import Video from './componets/Video';


function app(){
 
  let video = [{
    id : 1,
    title: 'React Js',
    views: '15k',
    year: '1 year ago',
    company: 'The Compass',
    url: 'https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg',
    button:'JavaScript',
    verified: true
  },
  {
    id : 2,
    title: 'Node Js',
    views: '15k',
    year: '2 year ago',
    company: 'The Compass',
    url: 'https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg',
    button:'JavaScript',
    verified: false
  },
  {
    id : 3,
    title: 'Full Stack',
    views: '15k',
    year: '1.5 year ago',
    company: 'The Compass',
    url: 'https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg',
    button:'JavaScript',
    verified: true
  },
  {
    id : 4,
    title: 'JavaScript',
    views: '19k',
    year: '6 months ago',
    company: 'The Compass',
    url: 'https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg',
    button:'JavaScript',
    verified: false
  }]
  
  

  return (
  <div className="app">
    <div>VideojS</div>
    {
      video.map(video=><Video  key={video.id} title={video.title} views= {video.views}  year={video.year} channel={video.company} url={video.url} verified={video.verified} id={video.id} button={video.button}></Video>
    ) 
  }
  </div>
  )
}



export default app;





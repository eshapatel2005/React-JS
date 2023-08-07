import './video.css';

export default function Video({url,title,company,views,year,button,verified,id}){
  return(
    <div className="container">
    <div className="container1">
      <img className="Img" src={url} />
    </div>
    <div className="id">{id}</div>
    {verified?<div className="title">{title} ✅</div>
    :<div className="title">{title}</div>}
    <div className="company">{company}</div>
    <div className="views">{views} : {year}</div>
    
    <button class="button1">{button}</button>
    </div>
  );
}


import './video.css';

export default function Navs({url,title,company,views,year,button}){
  return(
    <div className="container">
    <div className="container1">
      <img className="Img" src={url} />
    </div>
    <div className="title">{title}</div>
    <div className="company">{company}</div>
    <div className="views">{views} : {year}</div>
    
    <button class="button">{button}</button>
    </div>
  );
}


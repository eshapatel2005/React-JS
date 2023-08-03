import Resume from './componets/Resume';


function app(){
  let obj = {
    name:'The Compass',
    student: 'EshaPatel',
    title:'Enroll As A Student',
    url: 'https://cdn2.vectorstock.com/i/1000x1000/98/11/girl-icon-flat-single-avatarpeaople-icon-from-vector-14449811.jpg',
    phone:'9313733675',
    email:'esha.patel5605@gmail.com',
    linkedin: 'https://www.linkedin.com/in/%20esha-patel-e0511a',
    skill:['Full Stack Development','Python','SQL'],
    education:['Msc.IT'],
    bio:'The Compass aims to create skilled professionals to work on futuristic projects in well-established national and international level companies.The students who pass out of The Compass, are assured with great placements. we have a clientele that understands the need for trained professionals. The Training will be on current & future market trends.'

  }
  return (
  <Resume {...obj}></Resume>
  )
}

export default app;
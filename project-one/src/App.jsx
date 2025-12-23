import React from 'react'
import Card from './components/Card'

const App = () => {
  const employees = [
  {
    image: "https://picsum.photos/200?random=1",
    backgroundImage: "https://i.pinimg.com/736x/87/2b/81/872b816e79bfbec37a71115c0b0f43e8.jpg",
    name: "Amit Sharma",
    roleAndWork: "Software Engineer – Develops and maintains web applications",
    likeCount: 120,
    postsCount: 15,
    viewsCount: 2500
  },
  {
    image: "https://picsum.photos/200?random=2",
    backgroundImage: "https://i.pinimg.com/736x/db/15/06/db15064e515aa41282f03ba897c5a5d5.jpg",
    name: "Priya Desai",
    roleAndWork: "UI/UX Designer – Designs user interfaces and improves user experience",
    likeCount: 200,
    postsCount: 25,
    viewsCount: 3200
  },
  {
    image: "https://picsum.photos/200?random=3",
    backgroundImage: "https://i.pinimg.com/736x/20/53/1d/20531d35e197174cf984aa4f76b52a70.jpg",
    name: "Rahul Mehta",
    roleAndWork: "Project Manager – Manages project timelines and team coordination",
    likeCount: 95,
    postsCount: 10,
    viewsCount: 1800
  },
  {
    image: "https://picsum.photos/200?random=4",
    backgroundImage: "https://i.pinimg.com/736x/fb/cc/95/fbcc953fd36e5b925678d17145f5e431.jpg",
    name: "Sneha Kulkarni",
    roleAndWork: "Data Analyst – Analyzes data trends and prepares reports",
    likeCount: 150,
    postsCount: 18,
    viewsCount: 2700
  },
  {
    image: "https://picsum.photos/200?random=5",
    backgroundImage: "https://i.pinimg.com/736x/f8/ea/ea/f8eaea684e07e14a171d7f10f7336d58.jpg",
    name: "Vikram Joshi",
    roleAndWork: "Cybersecurity Specialist – Protects systems from cyber threats",
    likeCount: 180,
    postsCount: 22,
    viewsCount: 3100
  },
  {
    image: "https://picsum.photos/200?random=6",
    backgroundImage: "https://i.pinimg.com/736x/35/95/97/359597df3a9bde033ec60b155927084c.jpg",
    name: "Anjali Nair",
    roleAndWork: "HR Manager – Handles recruitment and employee relations",
    likeCount: 75,
    postsCount: 8,
    viewsCount: 1400
  },
  {
    image: "https://picsum.photos/200?random=7",
    backgroundImage: "https://i.pinimg.com/736x/be/62/16/be6216d2b068e0b76f88cded8c21e2a7.jpg",
    name: "Karan Patel",
    roleAndWork: "Marketing Lead – Creates marketing strategies and campaigns",
    likeCount: 210,
    postsCount: 30,
    viewsCount: 4000
  },
  {
    image: "https://picsum.photos/200?random=8",
    backgroundImage:"https://i.pinimg.com/736x/69/f3/d8/69f3d8c5ae6b11547b381c67420ca5e0.jpg",
    name: "Meera Iyer",
    roleAndWork: "Content Writer – Writes blogs, articles, and social media posts",
    likeCount: 130,
    postsCount: 20,
    viewsCount: 2600
  },
  {
    image: "https://picsum.photos/200?random=9",
    backgroundImage: "https://i.pinimg.com/736x/f0/7d/32/f07d32e7e7beb5839bde9418d27bcc43.jpg",
    name: "Siddharth Rao",
    roleAndWork: "DevOps Engineer – Automates deployment and manages infrastructure",
    likeCount: 160,
    postsCount: 17,
    viewsCount: 2800
  },
  {
    image: "https://picsum.photos/200?random=10",
    backgroundImage: "https://i.pinimg.com/736x/2d/46/82/2d46822e14a404c825e8e17591602f83.jpg",
    name: "Neha Verma",
    roleAndWork: "QA Tester – Tests applications to ensure quality",
    likeCount: 90,
    postsCount: 12,
    viewsCount: 1900
  }
];
  return (
    <div className='container'>
      {employees.map(function(props){
           return <Card namee={props.name} image={props.image} bgimg={props.backgroundImage} role={props.roleAndWork} like={props.likeCount} posts={props.postsCount} views={props.viewsCount} />
      })}
    </div>
  )
}

export default App


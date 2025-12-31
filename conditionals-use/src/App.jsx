import React from 'react'
import Men from './components/Men'
import Female from './components/Female'
import Click from './components/Click'

const App = () => {
  const users = [
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      gender: "male",
      color: "blue"
    },
    {
      name: "Amit",
      email: "amit@gmail.com",
      gender: "male",
      color: "green"
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      gender: "female",
      color: "pink"
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      gender: "female",
      color: "purple"
    }
  ];

  let gender = window.prompt("enter your gender")
  function clickhandler() {
    console.log("clicked")
  }
  return (
    <div className='container' onClick={clickhandler}>
      {gender = 'male' ? <Men /> : <Female />}
    </div>
  )
}

export default App

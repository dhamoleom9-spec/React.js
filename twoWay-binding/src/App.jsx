import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [img, setimg] = useState('')

  let getdata = JSON.parse(localStorage.getItem('all-users')) || []
  console.log(getdata);
  
  const [allusers, setallusers] = useState(getdata)

  function submitHandler(e) {
    e.preventDefault()

    const oldUsers = [...allusers]
    oldUsers.push({ name, email, number, img })
    setallusers(oldUsers)

    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setemail('')
    setname('')
    setnumber('')
    setimg('')
  }

  function clickHandling(idx) {
    const canceller = [...allusers]
    canceller.splice(idx, 1)
    setallusers(canceller)
    localStorage.setItem('all-users', JSON.stringify(canceller))
  }

  return (
    <div className='container'>
      <div className="box">
        <form onSubmit={(e) => { submitHandler(e) }}>
          <input type="text" accept=".png, .jpg, .jpeg" placeholder='enter img src' value={img} onChange={(e) => {
            setimg(e.target.value)
          }} />
          <input type="text" placeholder='enter your name' value={name} onChange={(e) => {
            setname(e.target.value)
          }} />
          <input type="tel" placeholder='enter your mobile number' value={number} onChange={(e) => {
            setnumber(e.target.value)
          }} />
          <input type="email" id='email' placeholder='you@example.com' value={email} onChange={(e) => {
            setemail(e.target.value)
          }} />
          <button>submit</button>
        </form>
      </div>

      {allusers.map((elem, idx) => {
        return <div className="box2" key={idx}>
          <img src={elem.img} alt="" />
          <h1>{elem.name}</h1>
          <h2>{elem.number}</h2>
          <h3>{elem.email}</h3>
          <button onClick={() => { clickHandling(idx) }}>remove</button>
        </div>
      })}
    </div>
  )
}

export default App

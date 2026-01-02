import { RiLightbulbAiFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [counter1, setcounter1] = useState(0)
  const [data, setdata] = useState('')
  let c1 = Math.floor(Math.random()*256)
  let c2 = Math.floor(Math.random()*256)
  let c3 = Math.floor(Math.random()*256)

  const grtdata = async ()=>{
    const realdata = await axios.get('https://randomuser.me/api/')
    setdata((realdata.data.results[0].name.first)+' '+(realdata.data.results[0].name.last))
  }
  useEffect(function () {
    console.log("useeffect is running....!");
    grtdata()
  }, [counter1])

  return (
    <div className='container'>
      <h1 style={{color: `rgb(${c1}, ${c2}, ${c3})` }}>{data}</h1>
      <h1 style={{textShadow: `0px 0px 8px rgb(${c1}, ${c2}, ${c3})`}}>{counter1}</h1>
      <button
        onClick={() => { setcounter1(counter1 + 1) }}
        style={{boxShadow: `0px 0px 3rem rgb(${c1}, ${c2}, ${c3})`  }}
      >click me...!</button>
    </div>
  )
}

export default App

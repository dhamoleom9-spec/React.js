import React, {useState} from 'react'

const Section = (props) => {
    const [first, setfirst] = useState('')
  return (
    <div className='section'>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        props.changetheam(first)
        setfirst('')
      }}>
        <input 
        type="text" 
        placeholder='set your theam'
        value={first} 
        onChange={(e)=>{setfirst(e.target.value)}} 
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Section

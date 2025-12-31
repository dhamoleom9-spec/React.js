import React, { useState } from 'react'


const Box = () => {
    const [first, setfirst] = useState(0)

    return (
        <div className='box'>
            <h1>{first}</h1>
            <div className="but">
                <button
                    onClick={() => { setfirst(first + 1) }}
                    onKeyDown={(e) => {
                        if (e.key === 'i') { setfirst(first + 1) };
                    }}>Increment</button>
                <button onClick={() => {
                    if (first === 0) {
                        setfirst(first = 1)
                    } else {
                        setfirst(first - 1)
                    }}}
                    onKeyDown={(e) => {
                        if (e.key === 'd') { setfirst(first - 1) }
                    }}>Dectiment</button>
            </div>
        </div>
    )
}

export default Box

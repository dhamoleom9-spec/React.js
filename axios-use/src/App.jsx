import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [dataimg, setdataimg] = useState([])
  const [randomtext, setrandomtext] = useState('')

  const chaloo = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(response.data.message)
    setdataimg([...dataimg, response.data])
  }

  function randtext() {
    const playfulDogCaptions = [
      "Too cute to handle 🐶💖",
      "Pawsitively adorable 🐾✨",
      "Living that pup life 🐕🌸",
      "Fluff goals unlocked 🐩💎",
      "Tongue out, mood on 😋🐾",
      "Snuggle season forever 🛋️🐶",
      "Zoomies are my cardio 🏃‍♂️🐕",
      "Cutie with a waggy booty 🍑🐾",
      "Nap hard, play harder 😴🎾",
      "Heart stolen by a pupper 💘🐶",
      "Ears up, world’s best listener 👂🐾",
      "Cuteness overload alert 🚨🐕",
      "Tail wag = pure happiness 🌈🐾",
      "Born to cuddle, forced to nap 💤🐶",
      "Fetch queen/king 👑🎾",
      "Puppy eyes, full of lies 👀💞",
      "Dreaming of treats 🍪🐾",
      "Fluffy vibes only ✨🐩",
      "Best fur-iend forever 🐶❤️",
      "Smol bean, big love 🌱💖"
    ];
    //   { id: 1, caption: "Too cute to handle 🐶💖" },
    //   { id: 2, caption: "Pawsitively adorable 🐾✨" },
    //   { id: 3, caption: "Living that pup life 🐕🌸" },
    //   { id: 4, caption: "Fluff goals unlocked 🐩💎" },
    //   { id: 5, caption: "Tongue out, mood on 😋🐾" },
    //   { id: 6, caption: "Snuggle season forever 🛋️🐶" },
    //   { id: 7, caption: "Zoomies are my cardio 🏃‍♂️🐕" },
    //   { id: 8, caption: "Cutie with a waggy booty 🍑🐾" },
    //   { id: 9, caption: "Nap hard, play harder 😴🎾" },
    //   { id: 10, caption: "Heart stolen by a pupper 💘🐶" },
    //   { id: 11, caption: "Ears up, world’s best listener 👂🐾" },
    //   { id: 12, caption: "Cuteness overload alert 🚨🐕" },
    //   { id: 13, caption: "Tail wag = pure happiness 🌈🐾" },
    //   { id: 14, caption: "Born to cuddle, forced to nap 💤🐶" },
    //   { id: 15, caption: "Fetch queen/king 👑🎾" },
    //   { id: 16, caption: "Puppy eyes, full of lies 👀💞" },
    //   { id: 17, caption: "Dreaming of treats 🍪🐾" },
    //   { id: 18, caption: "Fluffy vibes only ✨🐩" },
    //   { id: 19, caption: "Best fur-iend forever 🐶❤️" },
    //   { id: 20, caption: "Smol bean, big love 🌱💖" }
    // ];
    const randomCaption = playfulDogCaptions[Math.floor(Math.random() * playfulDogCaptions.length)];
    setrandomtext([randomCaption])
  }

  return (
    <div className='container'>
      <div className="box">
        <button onClick={() => {
          chaloo()
          randtext()
        }}>Genrate image</button>
      </div>

      {dataimg.map(function (elem, idx) {
        return <div className="cont" key={idx}>
          <img src={elem.message} alt="" />
          <h1 className='col'>{randomtext}</h1>
        </div>
      })}
    </div>
  )
}

export default App

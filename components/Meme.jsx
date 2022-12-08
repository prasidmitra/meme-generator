import React, {useState} from 'react'
import Memes from '../memesData'

export default function Meme() {
  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )
  const [allMemeImages, setAllMemeImages] = useState(Memes)

  function getMemeImage() {
    const memeObj = allMemeImages.data.memes[Math.floor(Math.random() * Memes.data.memes.length)]
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: memeObj.url
      }
    })
  }
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
        return {
            ...prevMeme,
            [name]: value
        }          
    })
  }
  return (
    <div className='meme-container'>
        <form>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Top text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
            />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Bottom text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
            />
        </form>
        <button onClick={getMemeImage}>
          Get a new meme image
        </button>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </div>
  )
}



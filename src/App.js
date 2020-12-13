import React, {useState} from 'react'
import './App.css';
import {emojiObject} from './emoji'

const emojiArray = Object.keys(emojiObject)

function App() {
  const [meaning, setMeaning] = useState("")

  function inputHandler(event) {
    const userInput = event.target.value
    let meaning = emojiObject[userInput]

    if (meaning === undefined) {
      meaning = 'We dont have this emoji in our database'
    }
    setMeaning(meaning)
  }

  function emojiClickHandler(emoji) {
    //console.log(emoji.target.innerHTML)
    const clickEmoji = emoji.target.innerHTML
    let meaning = emojiObject[clickEmoji]
    setMeaning(meaning)
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input type="text" id='userInput' placeholder="Please type or click on the emoji to know its meaning" onChange={inputHandler} />
      <div className="display">{meaning ? meaning : 'Type or Click an emoji given below'}</div>
      <div className="emojis">
        <span className='emojiHead'>Top 25 emojis used across the world</span><br />
        {
          emojiArray.map((item) =>
            <span className='emojiList' key={item} onClick={emojiClickHandler}>{item}</span>
          )
        }
      </div>
      <div className="footer">Check out source code at <a href="http://github.com/ashwinkhode">Github</a></div>
    </div>
  );
}

export default App;

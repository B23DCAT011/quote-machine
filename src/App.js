import React,{useState} from 'react';
import './App.scss';
import mdColors from './colors';
import quotess from './quoteBank';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'




  

function App() {

  const [quote,setQuote] = useState("The only way to do great work is to love what you do.")
  const [author,setAuthor] = useState('Steve Jobs')
  const [randomNumber,setrandomNumber] = useState(0)
  const [accentColor,setaccentColor] = useState(`#282c34`)
  

  const getRandomQuote = () =>{
    let randomInterger = Math.floor((quotess.length)*Math.random())
    setrandomNumber(randomInterger)
    setaccentColor(mdColors[randomInterger])
    setQuote(quotess[randomInterger].quote)
    setAuthor(quotess[randomInterger].author)
  }


  return (
   
    <div className="App">
    <header className="App-header" style={{backgroundColor:accentColor}}>
      <div id='quote-box'>
        <p id='text' style={{color:accentColor}}>
          {quote}
        </p>
        <p id='author' style={{color:accentColor}}>- {author}</p>
       <div id='button'>
        <a style={{backgroundColor:accentColor,color:'white'}} id='tweet-quote' href={encodeURI(`"twitter.com/intent/tweet?t${quote} -${author}`)} ><FontAwesomeIcon icon={faTwitter} /></a>
        <button style={{backgroundColor:accentColor,color:'white'}} id='new-quote' onClick={() => getRandomQuote()}>New quote</button>
       </div>
        
      </div>
    </header>
   </div>
  );
}

export default App;

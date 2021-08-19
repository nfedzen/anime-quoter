import React, {useState} from 'react'


export default function Quote(){
  const [quote, setQuote] = useState('')
  
  function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
      .then(res => res.json())
      .then(q => setQuote(q))
  }


  return(
    <div id='quote-container'>
      <h1>Your random anime quote: </h1>
      <h2>{quote.quote}</h2>
      <button onClick={fetchQuote}>Get Random Anime Quote</button>
    </div>
  )
}
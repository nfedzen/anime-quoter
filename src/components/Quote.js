import React, { useState } from "react";
import "../App.css";

export default function Quote() {
  const [quote, setQuote] = useState("");

  function fetchQuote() {
    fetch("https://animechan.vercel.app/api/random")
      .then((res) => res.json())
      .then((q) => setQuote(q));
  }

  if (quote) {
    return (
      <div>
        <button class="myButton" onClick={fetchQuote}>Get Another Random Anime Quote</button>
        <div id="quote-container">
          <h2>{quote.quote} </h2>
          <h3>
            -{quote.character} ({quote.anime})
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button class="myButton" onClick={fetchQuote}>Get Random Anime Quote</button>
        <div id="quote-container">
          <iframe
            title="naruto"
            src="https://giphy.com/embed/Mj0gk1wnekXC0"
            width="480"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

import React from "react";
import '../estilos/QuoteBox.css'



function  QuoteBox({quote,CambiarFrase}) {

return(
 
<div id="quote-box">
  <div className="cont-frase">
     <h2 id="text"  ><strong>"</strong> {quote.frase}</h2>
  </div>
  <div className="cont-autor">
      <h4 id="author"><strong> - </strong>{quote.autor}</h4>
  </div>
  <div className="cont-boton">
       <a href="twitter.com/intent/tweet"id="tweet-quote" target="_blank"> Retweet</a>
  <button id="new-quote" 
    onClick={CambiarFrase}>Nueva frase</button>
  </div>
  </div>);

}

export default QuoteBox;
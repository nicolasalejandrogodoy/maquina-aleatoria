import React from "react";
import '../estilos/QuoteBox.css'



function  QuoteBox({quote,CambiarFrase,actColor}) {

return(
 
<div id="quote-box">
  <div className="cont-frase" >
     <h2 id="text" style={{color:actColor}} ><strong>"</strong> {quote.frase}</h2>
  </div>
  <div className="cont-autor" style={{color:actColor}}>
      <h4 id="author"><strong> - </strong>{quote.autor}</h4>
  </div>
  <div className="cont-boton">
       <a href="twitter.com/intent/tweet"id="tweet-quote" target="_blank" style={{backgroundColor:actColor}}> Retweet</a>
  <button id="new-quote" style={{backgroundColor:actColor}}
    onClick={CambiarFrase}>Nueva frase</button>
  </div>
  </div>);

}

export default QuoteBox;
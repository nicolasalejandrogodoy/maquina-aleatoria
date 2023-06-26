
import './App.css';
import React, { useState } from 'react';
import QuoteBox from './componentes/QuoteBox';
 

const quoteList = [
  {frase:"Si no tienes tus propios sueños, es posible que en tu vida te dediques a cumplir los sueños de otra persona.",
  autor:"Jim Rohn."},
  {frase:"Todo parece imposible hasta que alguien lo hace.",autor:"Nelson Mandela."},
  {frase:"Poco importa lo despacio que camines mientras no te pares.",autor:"Confucio."}
  ,
  {frase:"El 99% de los proyectos fracasados pertenecen a personas acostumbradas a poner excusas.",autor:" George Washington Carver."}
  ,
  {frase:"Resulta curioso, pero cuanto más me esfuerzo, más suerte tengo.",autor:"John Maxwell."}
]

function App() {
  
    const randomGenerate = () => {
      return Math.floor((Math.random()*5))
    }
    const CambiarFrase = () =>{
      newQuote(quoteList[randomGenerate()]);
    }
    const [quote,newQuote] = useState(quoteList[0])
    
    return(
      <div className="caja-principal">
  <QuoteBox quote={quote} CambiarFrase={CambiarFrase} />
  </div>
  );
}

export default App;

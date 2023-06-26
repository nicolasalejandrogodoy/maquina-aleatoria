
import './App.css';
import React, { useState } from 'react';
import QuoteBox from './componentes/QuoteBox';
 
const   colorArray  =  [ '#FF6633' ,  '#FFB399' ,  '#FF33FF' ,  '#FFFF99' ,  '#00B3E6' , 
		  '#E6B333' ,  '#3366E6' ,  '#999966' ,  '#99FF99' ,  '#B34D4D' ,
		  '#80B300' ,  '#809900' ,  '#E6B3B3' ,  '#6680B3' ,  '#66991A' , 
		  '#FF99E6' ,  '#CCFF1A' ,  '#FF1A66' ,  '#E6331A' ,  '#33FFCC' ,
		  '#66994D' ,  '#B366CC' ,  '#4D8000' ,  '#B33300' ,  '#CC80CC' , 
		  '#66664D' ,  '#991AFF' ,  '#E666FF' ,  '#4DB3FF' ,  '#1AB399' ,
		  '#E666B3' ,  '#33991A' ,  '#CC9999' ,  '#B3B31A' ,  '#00E680' , 
		  '#4D8066' ,  '#809980' ,  '#E6FF80' ,  '#1AFF33' ,  '#999933' ,
		  '#FF3380' ,  '#CCCC00' ,  '#66E64D' ,  '#4D80CC' ,  '#9900B3' , 
		  '#E64D66' ,  '#4DB380' ,  '#FF4D4D' ,  '#99E6E6' ,  '#6666FF' ] ;

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
  
    const randomGenerate = (longitudArray) => {
      return Math.floor((Math.random()*longitudArray))
    }
    const CambiarFrase = () =>{
      newQuote(quoteList[randomGenerate(5)]);
      setColor(colorArray[randomGenerate(colorArray.length)])
    }
    const [quote,newQuote] = useState(quoteList[0]);
    const [actColor, setColor] = useState(colorArray[0]);
  
    
    return(
      <div className="caja-principal" style={{backgroundColor:actColor}}>
  <QuoteBox quote={quote} CambiarFrase={CambiarFrase} actColor={actColor} />
  </div>
  );
}

export default App;

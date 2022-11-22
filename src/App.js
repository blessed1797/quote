import './App.css';
import line from './pattern-divider-desktop.svg'
import button from './icon-dice.svg'
import axios from 'axios';
import { useState } from 'react'



function App() {

  const [advice, setAdvice] = useState({})
  const getAdvice = (id) => {
    id ? axios.get(`https://api.adviceslip.com/advice/${id}`).then(res => setAdvice(res.data.slip)).catch(err => console.log(err)) :
      axios.get("https://api.adviceslip.com/advice").then(res => setAdvice(res.data.slip)).catch(err => console.log(err))
    
  }

  return (
    <div className="App">
      <div className='app2'>
        <h6>Advice #{advice.id ? advice.id : "00"}</h6>
        <h4>{advice.advice ? advice.advice : "click the button below to get an advice"}</h4>
      </div>
      <div><img className='desktop' src={line} alt="" /></div>
      <button onClick={() => getAdvice()}><img className='desktop2' src={button} alt="" /></button>
      {/* <button onClick={() => getAdvice(30)}>30</button>
      <button onClick={() => getAdvice(50)}>50</button>
      <button onClick={() => getAdvice(60)}>60</button> */}


    </div>
  );
}

export default App;

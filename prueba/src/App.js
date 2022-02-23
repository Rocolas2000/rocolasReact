import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('') ;
  const [linea2, setLinea2] = useState('');


const onChangeLinea1 = function(evento){
  
  alert(evento.target.value)
}

  return (
    <div className="App">
        

        <select>
          <option value="op1">op1</option>
          <option value="op2">op2</option>
          <option value="op3">op3</option>
          <option value="op4">op4</option>
          <option value="op5">op5</option>
        </select> <br />

        <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /> <br />
        <input type="text" placeholder='Linea 2' /> <br />
        
        <button>Exportar</button>

        <div>
          <span> {linea1} </span> <br />
          <span> {linea2} </span>
          <img src=""></img>
        </div>


    </div>
  );
}

export default App;

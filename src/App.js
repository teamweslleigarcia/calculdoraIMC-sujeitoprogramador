import {useState} from 'react'
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [msg, setMsg] = useState('');

  function calcularImc(){
    const alt = altura / 100
    const imc = peso / (alt * alt)

    if(imc < 18.6){
      setMsg('Voxê está baixo do peso! seu IMC: ' + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMsg('Peso Ideal! seu IMC: ' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMsg('Você está levemente acima do peso! seu IMC: ' + imc.toFixed(2))
    }else if(imc > 34.9){
      setMsg('CUIDADO OBESIDADE! seu IMC: ' + imc.toFixed(2))
    }
  }



  return (
    <div className='area-imc'>
      <h1> Calculadora IMC</h1>
      <p>Vamos calcular seu IMC</p>

      <div className='area-input'>
        <input type="text" 
        placeholder='Informe seu peso em Kg. Ex: 76'
        value={peso}
        onChange={ (e) => setPeso(e.target.value)}
        />

        <input type="text"
         placeholder='Informe sua altura em cm. Ex: 170'
         value={altura}
         onChange={ (e) => setAltura(e.target.value)}
         />

        <button onClick={calcularImc}>Calcular</button>
      </div>

      <h2>{msg} </h2>

    </div>
    
  );
}

export default App;

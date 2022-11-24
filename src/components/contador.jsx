import { useState } from 'react'

function Contador() {

  const [contador, setContador] = useState(0)

  return (
    <div className="App">

      <p>{contador}</p>
      <button onClick={() => {
        setContador(contador + 1)
        console.log('Este es el valor de contador:', contador)
      }}>
        Aumentar
      </button>


    </div>
  );
}

export default Contador;

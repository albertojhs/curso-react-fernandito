import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks';

//Esta función se dclara afuera del cuerpo del componente ya que se busca que no 
//se vuelva a reprocesar cada que ejecuta el componente
const heavyStuff = ( iterationNumber = 100 ) => {
  for(let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }
  return `${ iterationNumber } iterciones realizadas`;
}

export const MemoHook = () => {

    const { counter, incrementar } = useCounter(4000);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />
        <h4>{ memorizedValue }</h4>
        <button 
            className="btn btn-primary mt-2"
            onClick={ () => { incrementar() } }>+1</button>

        <button 
            className='btn btn-outline-primary mt-2'
            onClick={ () => { setShow( !show ) } }
        >Show/Hide { JSON.stringify(show) }</button>
    </>
  )
}

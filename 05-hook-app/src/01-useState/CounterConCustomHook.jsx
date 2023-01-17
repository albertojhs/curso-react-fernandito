import { useCounter } from '../hooks/useCounter'



export const CounterConCustomHook = () => {

const { 
    counter, 
    incrementar, 
    decrementar, 
    resetear } = useCounter();


    return (
      <>
          <h1>Counter con Hook: { counter }</h1>
          <hr />
          {/* <button className="btn btn-primary" onClick={ incrementar }>+1</button>
          <button className="btn btn-primary" onClick={ resetear }>Reset</button>
          <button className="btn btn-primary" onClick={ decrementar }>-1</button> */}

          {/* La sintaxis de arriba es equivalente a onClick={ (event) => incrementar(event) }
          Con lo que se le está pasando el evento onclick a la función y por ende el funcionamiento es
          incorrecto en este caso, recordar que a menos que nosotros especifiquemos otra cosa
          el parámetro que se manda a la función es el evento */}
          <button className="btn btn-primary" onClick={ () => incrementar(2) }>+1</button>
          <button className="btn btn-primary" onClick={ resetear }>Reset</button>
          <button className="btn btn-primary" onClick={ () => decrementar(5) }>-1</button>
      </>
    )
}

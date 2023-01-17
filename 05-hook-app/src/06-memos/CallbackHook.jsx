import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementMain = useCallback(
      (value) => {
        //Así counter siempre es 10 porque se momoriza, por lo que el resultado 
        //siempre es 11
        //setCounter( counter + 1 )


        //La solución es pasando un callback al useState en lugar de un número
        setCounter( (counterValue) => counterValue + value );
      },
      [],
    )
        

    // const incrementMain = () => {
    //     setCounter( counter + 1 );
    // }

    return (
      <>
          <h1>useCallback Hook: { counter }</h1>
          <hr />
          <ShowIncrement increment={ incrementMain }/>
      </>
    )
}

// Esta oración es falsa
// Si peleas contra ti mismo, ganas o pierdes?
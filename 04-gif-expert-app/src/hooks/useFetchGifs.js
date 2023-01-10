import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs' 


export const useFetchGifs = ( category ) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState( true);

  //Si se dejan las dependencias vacías significa que ese hook se va a disparar solo la primera vez
   useEffect( () => {
     getGifs( category )
       .then( (imgs) => {
         setImages(imgs);
         setIsLoading( false );
       } );
   }, [] );


   return {
    images,
    isLoading
   }
}

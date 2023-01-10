
// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {


  //Este juc personalizado equivale a lo de abajo más la lógica del 
  //isloading

  const { images, isLoading } = useFetchGifs( category ); 

  // const [images, setImages] = useState([]);

  // //Si se dejan las dependencias vacías significa que ese hook se va a disparar solo la primera vez
  // useEffect( () => {
  //   getGifs( category )
  //     .then( (imgs) => {
  //       setImages(imgs);
  //     } );
  // }, [] );


  return (
    <>
        <h3>{ category }</h3>
        {/* {
          isLoading ? 
          ( <h2>Cargando...</h2> ) :
          null
        } */}
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        <div className='card-grid'>
          { images.map( (img) => (
            //Estamos esparciendo las propiedades para que puedan ser desestructuradas en 
            //GifItem ( {...img} )
            <GifItem key={ img.id } { ...img }/>
          ))}
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category : PropTypes.string.isRequired
}
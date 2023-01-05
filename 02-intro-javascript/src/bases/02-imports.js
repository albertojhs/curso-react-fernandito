import heroes, { owners } from '../data/heroes';

const getHeroeById = ( id ) => heroes.find( hero => hero.id === id );

// console.log( getHeroeById(2) );

const getHeroesByOwner = (owner) => heroes.filter( hero => hero.owner === owner);
// console.log( getHeroesByOwner('DC') );


export {
    getHeroeById as default,
    getHeroesByOwner
}
import { Fragment } from 'react'
import PropTypes from 'prop-types';

//Esta variable aquí no está declarada en el scope global, sigue estando encapsulada en el componente
//pero se recomienda que se coloquen las constantes y variables que no tengan relación directa con las
//funsiones fuera de las mismas.

// const myObj = {
//     name : 'Diego Teolotitla',
//     edad : 78
// }

export const FirstApp = ( { title, subtitle, number } ) => {


    //Simepre se debe colocar un nodo padre en el return


    // return (
    //     <Fragment>
    //         <h1>First App</h1>
    //         <p>Soy solo un texto, sit amet consectetur adipisicing elit. Itaque, inventore! Fugit deleniti repellat eligendi maiores nam doloremque corrupti, ipsum quisquam, distinctio culpa nihil iure sunt facere quae? Velit, ipsam autem!</p>
    //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, assumenda repellendus. Dolor, cupiditate ducimus fugit quo voluptates, dolorum repellendus ratione nulla nisi consequuntur inventore perspiciatis a, vero iusto ad. Id.
    //         Officia ea a nemo eligendi debitis eveniet animi quia cum laboriosam, recusandae laudantium alias unde laborum culpa molestias iusto ipsum autem incidunt nihil quo! Blanditiis optio ducimus iste nostrum officiis.
    //         Similique dicta mollitia provident sapiente quas fugiat vitae sequi fuga esse eum dolorum hic earum sunt deleniti, rem commodi ab ipsam repudiandae. Molestiae tenetur beatae repellendus, in amet expedita perferendis!
    //         Excepturi maxime error aspernatur ea facilis magnam quis magni quos, sequi iusto commodi adipisci, placeat deserunt molestiae nisi tempora consequuntur atque at et similique inventore autem quas dicta. Officiis, illum.</p>
    //     </Fragment>
    // )

    // <> Es equivalente a lo de arriba solo que no es necesario importar el fragment

    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <h2>{ subtitle }</h2>
            <h2>{ number }</h2>
            <p>Sit amet consectetur adipisicing elit. Itaque, inventore! Fugit deleniti repellat eligendi maiores nam doloremque corrupti, ipsum quisquam, distinctio culpa nihil iure sunt facere quae? Velit, ipsam autem!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, assumenda repellendus. Dolor, cupiditate ducimus fugit quo voluptates, dolorum repellendus ratione nulla nisi consequuntur inventore perspiciatis a, vero iusto ad. Id.
            Officia ea a nemo eligendi debitis eveniet animi quia cum laboriosam, recusandae laudantium alias unde laborum culpa molestias iusto ipsum autem incidunt nihil quo! Blanditiis optio ducimus iste nostrum officiis.
            Similique dicta mollitia provident sapiente quas fugiat vitae sequi fuga esse eum dolorum hic earum sunt deleniti, rem commodi ab ipsam repudiandae. Molestiae tenetur beatae repellendus, in amet expedita perferendis!
            Excepturi maxime error aspernatur ea facilis magnam quis magni quos, sequi iusto commodi adipisci, placeat deserunt molestiae nisi tempora consequuntur atque at et similique inventore autem quas dicta. Officiis, illum.</p>
            {/* <code>{ JSON.stringify(myObj) }</code> */}
        </>
    )
};


FirstApp.propTypes = {
    subtitle : PropTypes.string.isRequired,
    title    : PropTypes.string.isRequired,
    number   : PropTypes.number
}


// FirstApp.defaultProps = {
//     name     : 'Alberto Hernández',
//     subtitle : 'No hay subtitlo',
//     title    : 'No hay título'
// }
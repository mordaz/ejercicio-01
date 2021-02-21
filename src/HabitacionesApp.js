//importamos la libreria REACT que nos ayuda a devolver elementos JSX
//los elementos JSX son elementos HTML combinados con elementos Javascript
import React, { useEffect, useState } from 'react';

//libreria con herramientas para validar argumentos props
import PropTypes from 'prop-types';

//importamos el componente de habitacion 
import Habitacion from './components/Habitacion';

//creamos un componente funcional FC(Functional Component)
//para poder devolver un FC es necesario importar React 
//en este caso como es el componente principal lo nombramos con la terminacion App 
const HabitacionesApp = ( { habitaciones } ) => {

    //creamos otro HOOK para actualizar el titulo de numero de habitaciones
    const [ titulo , setTitulo ] = useState ('');
    
    //usamos useEffect para actualizar el titulo del numero de habitaciones disponibles
    //useEffect() se ejecuta cada que se actualiza "renderiza" el componente
    useEffect(() => {
        const numhabitaciones = habitaciones.length;
        setTitulo( `Habitaciones disponibles ${ numhabitaciones }`);
    },[habitaciones.length]);

    return (<>
    <h3>{ titulo }</h3>
    <div className = 'contenedor'>   
        {/*map es una funcion callback que recorre todo el arreglo de habitaciones*/}
        {/*por cada habitacion econtrada va devolver un nuevo componente Habitacion*/}
        {
            habitaciones.map( habitacion => {
                return <Habitacion
                    key= { habitacion.numero }
                    numero={ habitacion.numero }
                    estado={ habitacion.estado }
                    inf1={ habitacion.inf1 }
                    inf2={ habitacion.inf2 }
                />
            })
        }
    </div></>);
}

//usando proptypes declaramos las properties que son obligatorias y su tipo
HabitacionesApp.propTypes = {
    habitaciones: PropTypes.array.isRequired
}

//exportamos el copomente funcional FC
export default HabitacionesApp;

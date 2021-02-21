//importamos la libreria REACT que nos ayuda a devolver elementos JSX
//los elementos JSX son elementos HTML combinados con elementos Javascript
import React from 'react';

//libreria con herramientas para validar argumentos props
import PropTypes from 'prop-types';

//creamos un componente funcional FC(Functional Component)
//para poder devolver un FC es necesario importar React 
//en este caso como es el componente principal lo nombramos con la terminacion App 
const MenuApp = ( { setHabitaciones } ) => {

    //creamos la funcion que se ejecutara al hacer click al boton
    const onClickAgregar = (e) => {
        
        //setHabitaciones recibe la variable del HOOK en este caso el contador y el arreglo de habitaciones
        setHabitaciones( (habitaciones) => { 
            //obtenemos el numero de habitaciones creadas
            const copiacontador = habitaciones.length + 1;
            const numerohab = (copiacontador + 100).toString();
            const nuevaHabitacion = {numero: numerohab , estado: 'Libre', inf1: '1', inf2: 'Recamarera' };
            //a travez del operador spread hacemos una copia del arreglo y agregamos el nuevo
            const copiahabitaciones = [...habitaciones];
            copiahabitaciones.push(nuevaHabitacion);
            //respondemos las variables actualizadas
            return (copiahabitaciones); 
        });
    }

    //creamos la funcion que se ejecutara al hacer click al boton
    const onClickTiempo = (e) => {

        //setHabitaciones recibe la variable del HOOK en este caso el contador y el arreglo de habitaciones
        setHabitaciones( (habitaciones) => { 
            //actualizamos el tiempo de las habitaciones
            const copiahabitaciones = [...habitaciones];
            copiahabitaciones.map( habitacion => {
                const incremento = parseInt(habitacion.inf1) + 1;
                habitacion.inf1 = incremento.toString();
                return habitacion;                
            })
            //respondemos las variables actualizadas
            return (copiahabitaciones); 
        });
    }

    //creamos la funcion que se ejecutara al hacer click al boton
    const onClickLimpiar = (e) => {
        //setHabitaciones recibe la variable del HOOK en este caso el contador y el arreglo de habitaciones
        setHabitaciones( (habitaciones) => { 
            //respondemos las variables actualizadas
            return ([{numero: '101', estado: 'Libre', inf1: '1', inf2: 'Recamarera' }]); 
        });
    }

    return (<div className = 'menu' >
    <button onClick={ (e) => { onClickAgregar(e) }} > Agregar </button> 
    <button onClick={ (e) => { onClickTiempo(e) }} > Incrementar Tiempo </button> 
    <button onClick={ (e) => { onClickLimpiar(e) }} > Limpiar </button> 
    </div>);
}

//usando proptypes declaramos las properties que son obligatorias y su tipo
MenuApp.propTypes = {
    setHabitaciones: PropTypes.func.isRequired
}

//exportamos el copomente funcional FC
export default MenuApp;

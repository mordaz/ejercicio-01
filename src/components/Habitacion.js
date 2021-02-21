//importamos la libreria REACT que nos ayuda a devolver elementos JSX
//los elementos JSX son elementos HTML combinados con elementos Javascript
import React from 'react';

//libreria con herramientas para validar argumentos props
import PropTypes from 'prop-types';

//creamos un componente funcional FC(Functional Component)jh431ºh 111
//para poder devolver un FC es necesario importar React 
//en este caso como es un componente secundario se guarda en la carpeta components
const Habitacion = ( { numero, estado, inf1, inf2 } ) => {

    //creamos la funcion que se ejecutara al hacer click al boton
    const onClick = (e) => {
        console.log(`Click desde ${numero}`);
    }

    return (  
        <div className = 'boton' onClick={ (e) => { onClick(e) }}>
            <div className="encabezado">
                <div className="imagen">
                </div>
                <div className="numero">
                    <p> { numero } </p>
                </div>  
            </div>
            <div className="informacion">
                <div className="estado">
                    <p> { estado }  </p>
                </div>
                <div className="hora">
                    <p> { inf1 } </p>
                </div>
                <div className="recamarera">
                    <p> { inf2 } </p>
                </div>
            </div>
            <div className="area"></div>
            <p className="relleno"></p>  
        </div>
    );
}

//usando proptypes declaramos las properties que son obligatorias y su tipo
Habitacion.propTypes = {
    numero: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    inf1: PropTypes.string,
    inf2: PropTypes.string
}

//exportamos el copomente funcional FC
export default Habitacion;
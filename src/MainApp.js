//importamos la libreria REACT que nos ayuda a devolver elementos JSX
//los elementos JSX son elementos HTML combinados con elementos Javascript
import React, { useState } from 'react';

//importamos el componente de menu
import MenuApp from './MenuApp';

//importamos el componente de habitaciones
import HabitacionesApp from './HabitacionesApp';

//creamos un componente funcional FC(Functional Component)
//para poder devolver un FC es necesario importar React 
//en este caso como es un componente principal lo nombramos con la terminacion App 
const MainApp = () => {

    //creamos un HOOK para hacer modificable nuestro componente JSK
    //un HOOK consta de datos como primer parametro y 
    //una funcion que los actualiza como segundo parametro
    const [ habitaciones , setHabitaciones ] = useState (() => {
        //onActivate del hook, aqui se pueden cargar las habitaciones iniciales
        return ([{numero: '101', estado: 'Libre', inf1: '1', inf2: 'Recamarera' }]);
    });

    return (<>
    <MenuApp setHabitaciones = { setHabitaciones }/>
    <HabitacionesApp habitaciones = { habitaciones } />
    </>);
}

//exportamos el copomente funcional FC
export default MainApp; 
 
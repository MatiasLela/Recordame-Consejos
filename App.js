import { View } from 'react-native';
import { useState, useEffect } from 'react';
import Consejos from './components/Consejos.js';
import ConsejosLista from './components/ConsejosLista.jsx'
import ConsejosAmplia from './components/ConsejosAmplia.js';
import {categorias} from './components/consejosFinales.js';

export default function App() {
  const[seleccionado, setSeleccionado] = useState(Math.floor(Math.random()*categorias.Alimentacion.length));

  return (
      //<ConsejosLista titulo="Alimentacion" icono={require("./assets/dish.png")} categoria={categorias.Alimentacion}/> //lo importante es la parte de categoria para poder mostrar el contenido.
      //<Consejos/> //agregar navigation y arreglar iconos mal centrados.
      <ConsejosAmplia titulo="Alimentacion" icono={require("./assets/imagenes/logoCate.png")} contenido={categorias.Alimentacion[seleccionado]}/> //aca lo mismo, pero el "seleccionado" es el consejo de consejosFinales.js que se va a mostrar en funcion a que categoria seleccionamos.
  );
}

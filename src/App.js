import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {
  const[mostrarFormulario, actualizarMostrar] = useState(true)
  //ternario --> condicion? seMuestra : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true? <Formulario/> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
    </div>
  );
}

export default App;

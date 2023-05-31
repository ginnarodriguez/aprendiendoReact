import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const[mostrarFormulario, actualizarMostrar] = useState(false)
  //ternario --> condicion? seMuestra : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"E8F8FF"
    },
    {
      titulo:"Data science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },{
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },{
      titulo:"Ux y diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },{
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },{
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
    
]

  return (
    <div>
      <Header/>
      {mostrarFormulario === true? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}/> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
     
    </div>
  );
}

export default App;

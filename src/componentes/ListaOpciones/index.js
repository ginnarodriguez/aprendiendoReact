import "./ListaOpciones.css"

const ListaOpciones = () => {
    const equipos = [
        "Programación",
        "Front End",
        "Data science",
        "Devops",
        "Ux y diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) =>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>

}

export default ListaOpciones
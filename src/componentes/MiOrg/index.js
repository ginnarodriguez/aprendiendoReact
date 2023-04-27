import { useState } from "react"
import "./MiOrg.css"

const MiOrg =() => {
    console.log()

    const[nombre, actualizarNombre] = useState("lll")

    const manejarClick = () => {
        console.log("mostrar ocultar")
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización {nombre}</h3>
        <img src="/img/add.png" onClick={manejarClick}/>
    </section>
}

export default MiOrg
import {useParams} from "react-router-dom";

import { getId190935 } from "../data";

export default function Id190935(){

    let params = useParams();
    let matricu = getId190935(parseInt(params.Id190935));
    return(
        <h2>
        <h2>Informcion del Alumno:{Id190935.number}</h2>
        <p>
            UNIVERSIDAD TECNOLOGICA DE AGUASACLIENTES
        </p>
        <p>
            Nombre: Maria Guadalupe Legorreta Millán 
        </p>
        <p>
            Carrera: IDGS 8-B-11 
        </p>
        <p>
            Materia: Desarrollo Web Profesional
        </p>
        </h2>
    );
    }
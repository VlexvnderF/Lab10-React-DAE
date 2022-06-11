import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Detalles = () => {
    const params = useParams()
    const {data, error,loading} = useFetch(`http://127.0.0.1:8000/productos/${params.id}`)
    
    if (loading){
        return <h2>Loading...</h2>;
    }

    if(error !== ""){
        return <h2>{error}</h2>;
    }

    return(
        <div className="row mt-5">
            <div className="col-6">
                
                <img className="img-thubnail" src={"http://127.0.0.1:8000"+data.imagen}></img>
                
            </div>
            <div className="col-6">
                <h3>{data.id} - {data.descripcion}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    Precio:  S/. {data.precio}
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Detalles
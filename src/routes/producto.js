import React from 'react'
import { Link } from 'react-router-dom';

        class Producto extends React.Component {

            constructor(props) {
            super(props);
            this.state = {
                productos: [],
                recuperado:true
            }
        }
        
        componentWillMount() {
            fetch('http://127.0.0.1:8000/productos/')
            .then((response) => {
                return response.json()
            })
            .then((prod) => {
                this.setState({ productos: prod,recuperado:true})
            })
        }
        
        
        render() {
            if (this.state.recuperado){
                return this.mostrarTabla()
            }else{
                return (<div>recuperando datos...</div>)
            }
        }
        
        mostrarTabla() {
            return (
            <div>
                <table align="center" class="table table-striped table-bordered" border="4" >
                    <thead class="thead-dark">
                        <tr align="center">
                            
                            <th scope="col">Nombre</th>
                            
                            <th scope="col">Imagen</th>
                            <th scope="col">URL</th>
                        </tr>
                    </thead>
                <tbody align="center">
                {this.state.productos.map(prod => {
                    return (
                    <tr key={prod.id}>
                        
                        <td>{prod.descripcion}</td>
                        
                        <td>
                            <div>
                                <img class="rounded"src={"http://127.0.0.1:8000"+prod.imagen}></img>
                            </div>
                        </td>
                        <td><Link to={`/producto/${prod.id}`}>Detalles</Link></td>
                    </tr>
                    );
                })}
                </tbody>
                </table>
            </div>
            );
        }
            borrar(ide) {
            var temp = this.state.articulos.filter((el)=>el.id !== ide);
            this.setState({
                articulos: temp
            })
            }
        }
        export default Producto;
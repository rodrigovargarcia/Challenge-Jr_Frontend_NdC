
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from "reactstrap"


const PolizasCRUD = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarPoliza }) => {

    const enviarDatos = (poliza) =>{
        setEditar(poliza)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="2">Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (

                                <tr key={ item.id }>
                                    <td>{ item.id }</td>
                                    <td>{ item.nombre }</td>
                                    <td>
                                        <Button color="success" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                        <Button color="danger" size="sm" className="me-2" onClick={() => eliminarPoliza(item)}>Eliminar</Button>
                                    </td>
                                </tr>

                                ))
                            )
                }
            </tbody>
        </Table>
    )
}

export default PolizasCRUD;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from "reactstrap"

const CoberturasCRUD = ({ dataCoberturas, setEditarCoberturas, mostrarModalCoberturas, setMostrarModalCoberturas }) => {

    const enviarDatosCoberturas = (cobertura) => {
        console.log("vamos a ver que datos tienes", cobertura)
        setEditarCoberturas(cobertura)
        setMostrarModalCoberturas(!mostrarModalCoberturas)
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
                (dataCoberturas.length < 1) ? (
                    <tr>
                        <td colSpan="2">Sin registros</td>
                    </tr>
                ) : (
                        dataCoberturas.map((item) => (

                            <tr key={ item.id }>
                                <td>{ item.id }</td>
                                <td>{ item.nombre }</td>
                                <td>
                                    <Button color="success" size="sm" className="me-2" onClick={() => enviarDatosCoberturas(item)}>Editar</Button>
                                    <Button color="danger" size="sm" className="me-2">Eliminar</Button>
                                </td>
                            </tr>

                            ))
                        )
            }
        </tbody>
    </Table>
    )
}

export default CoberturasCRUD;
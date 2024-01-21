
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from "reactstrap"


const PolizasCRUD = ({ data }) => {
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Poliza</th>
                    <th>keseyo</th>
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
                                        <Button color="primary" size="sm" className="me-2">Poliza</Button>
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
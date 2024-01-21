import { useState } from "react"
import { Col, Container, Modal , Row, Card, CardHeader, CardBody, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap"

const modeloPoliza = {
    idPoliza : 0,
    nombre: ""
}

const ModalPolizas = ({mostrarModal, setMostrarModal, guardarPoliza}) => {

    const [poliza, setPoliza] = useState(modeloPoliza);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setPoliza(
            {
                ...poliza,
                [e.target.name] : e.target.value
            }
        )
    }

    const enviarDatos = () =>{

        if(poliza.idPoliza == 0) {
            guardarPoliza(poliza)
        }

    }

    return (    

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                Nueva Póliza
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name = "nombre" onChange={(e) => actualizarDato(e)} value={poliza.nombre}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" className="me-2" onClick={enviarDatos}>Guardar</Button>
                <Button color="secondary" size="sm" className="me-2" onClick={() => setMostrarModal(!mostrarModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPolizas;
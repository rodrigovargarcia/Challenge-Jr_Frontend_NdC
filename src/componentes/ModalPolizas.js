import { useEffect, useState } from "react"
import { Col, Container, Modal , Row, Card, CardHeader, CardBody, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap"

const modeloPoliza = {
    idPoliza : 0,
    nombre: ""
}

const ModalPolizas = ({mostrarModal, setMostrarModal, guardarPoliza, editar, setEditar, editarPoliza}) => {

    const [poliza, setPoliza] = useState(modeloPoliza);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setPoliza((prevPoliza) => ({
            ...prevPoliza,
            [e.target.name]: e.target.value,
        }));
    };
        

    const enviarDatos = () => {
        console.log("controlamos que me traiga el id:", poliza.id)
        if(poliza.idPoliza == 0){
            guardarPoliza(poliza)
        } else {
            editarPoliza(poliza)
        }

        setPoliza(modeloPoliza)
    }


    useEffect(() => {
        if(editar != null){
            setPoliza(editar)
        } else {
            setPoliza(modeloPoliza)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (    

        <Modal isOpen={mostrarModal}>
            <ModalHeader>

                {poliza.idPoliza == 0 ? "Nueva Póliza" : "Editar Póliza"}
                
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
                <Button color="secondary" size="sm" className="me-2" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPolizas;
import { useEffect, useState } from "react"
import { Col, Container, Modal , Row, Card, CardHeader, CardBody, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap"


const modeloCobertura = {
    idCobertura : 0,
    nombre: ""
}

const ModalCoberturas = ({mostrarModalCoberturas, setMostrarModalCoberturas, guardarCobertura, editarCobertura, setEditarCoberturas, editarCoberturas}) => {

    const [cobertura, setCobertura] = useState(modeloCobertura);

    const actualizarDatoCoberturas = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setCobertura((prevCobertura) => ({
            ...prevCobertura,
            [e.target.name]: e.target.value,
        }));
    };

    const enviarDatosCoberturas = () => {
        console.log("controlamos que traiga el id:", cobertura.id)
        if(cobertura.idCobertura == 0){
            guardarCobertura(cobertura)
        } else {
            editarCoberturas(cobertura)
        }

        setCobertura(modeloCobertura)
    }

    useEffect(() => {
        if(editarCobertura != null){
            setCobertura(editarCobertura)
        } else {
            setCobertura(modeloCobertura)
        }
    }, [editarCobertura])

    const cerrarModal = () => {
        setMostrarModalCoberturas(!mostrarModalCoberturas)
        setEditarCoberturas(null)
    }

    return (

        <Modal isOpen={mostrarModalCoberturas}>
            <ModalHeader>

                {cobertura.idCobertura == 0 ? "Nueva Cobertura" : "Editar Cobertura"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={ (e) => actualizarDatoCoberturas(e) } value={cobertura.nombre}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" className="me-2" onClick={enviarDatosCoberturas}>Guardar</Button>
                <Button color="secondary" size="sm" className="me-2" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalCoberturas;
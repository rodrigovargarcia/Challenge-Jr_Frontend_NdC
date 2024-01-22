// import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import PolizasCRUD from './componentes/PolizasCRUD';
import { useEffect } from 'react';
import React, { useState } from 'react';
import ModalPolizas from './componentes/ModalPolizas';
import CoberturasCRUD from './componentes/CoberturasCRUD';
import ModalCoberturas from './componentes/ModalCoberturas';

function App() {

  const [polizas, setPolizas] = useState([])
  const [coberturas, setCoberturas] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalCoberturas, setMostrarModalCoberturas] = useState(false);
  const [editar, setEditar] = useState(null);
  const [editarCobertura, setEditarCoberturas] = useState(null);

  const mostrarPolizas = async () => {

      const response = await fetch("api/Polizas/Lista");

      if(response.ok) {
          const data = await response.json();
          console.log("Datos de la API", data);
          setPolizas(data);
      } else {
          console.log("error en la lista");
      }
  }


  const mostrarCoberturas = async () => {

    const response = await fetch("api/Coberturas/Lista");

    if(response.ok) {
        const data = await response.json();
        console.log("Datos de la API", data);
        setCoberturas(data);
    } else {
        console.log("error en la lista");
    }
  }

  useEffect(() => {
      mostrarCoberturas()
  }, [])

  useEffect(() => {
      mostrarPolizas()
  }, [])

  const guardarPoliza = async (poliza) => {
      const response = await fetch("api/Polizas/Agregar", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(poliza)
      })

      if(response.ok){
          setMostrarModal(!mostrarModal);
          mostrarPolizas();
      }
  }


  const guardarCobertura = async (cobertura) => {
    const response = await fetch("api/Coberturas/Agregar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(cobertura)
    })

    if(response.ok){
        setMostrarModalCoberturas(!mostrarModalCoberturas);
        mostrarPolizas();
    }
}


  const editarCoberturas = async (cobertura) => {
    if (cobertura && cobertura.id !== undefined && cobertura.id !== null) {
        const response = await fetch(`api/Coberturas/${cobertura.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(cobertura)
        });

        if (response.ok) {
            console.log("poliza actualizada correctamente");
            setMostrarModalCoberturas(!mostrarModalCoberturas);
            mostrarCoberturas();
        }
    } else {
        console.error("idCobertura en cobertura es undefined o null");
    }
};


  const editarPoliza = async (poliza) => {
    if (poliza && poliza.id !== undefined && poliza.id !== null) {
        const response = await fetch(`api/Polizas/${poliza.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(poliza)
        });

        if (response.ok) {
            console.log("poliza actualizada correctamente");
            setMostrarModal(!mostrarModal);
            mostrarPolizas();
        }
    } else {
        console.error("idPoliza en poliza es undefined o null");
    }
};


  return (
    <Container>
      <Row className="mt-5">
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de Pólizas</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color="success" onClick={ () => setMostrarModal(!mostrarModal) }>Nueva Póliza</Button>
              <hr></hr>
              <PolizasCRUD data={ polizas } setEditar={ setEditar } mostrarModal={ mostrarModal } setMostrarModal={ setMostrarModal }/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Lista de Coberturas</h5>
            </CardHeader>
            <CardBody>
              <Button size="sm" color="success" onClick={ () => setMostrarModalCoberturas(!mostrarModalCoberturas) }>Nueva Cobertura</Button>
              <hr></hr>
              <CoberturasCRUD dataCoberturas={ coberturas } setEditarCoberturas={ setEditarCoberturas } setMostrarModalCoberturas={ setMostrarModalCoberturas } />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalCoberturas mostrarModalCoberturas={mostrarModalCoberturas} 
      setMostrarModalCoberturas={setMostrarModalCoberturas} 
      guardarCobertura={guardarCobertura} 
      editarCoberturas={editarCoberturas} 
      setEditarCoberturas={setEditarCoberturas} 
      editarCobertura={editarCobertura}></ModalCoberturas>
      <ModalPolizas mostrarModal={mostrarModal} 
      setMostrarModal = {setMostrarModal} 
      guardarPoliza = {guardarPoliza} 
      editar={editar} 
      setEditar={setEditar} 
      editarPoliza={editarPoliza}/>
    </Container>
  );
}

export default App;

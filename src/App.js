// import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import PolizasCRUD from './componentes/PolizasCRUD';
import { useEffect } from 'react';
import React, { useState } from 'react';
import ModalPolizas from './componentes/ModalPolizas';

function App() {

  const [polizas, setPolizas] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false);

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
              <PolizasCRUD data={ polizas }/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalPolizas mostrarModal={mostrarModal} setMostrarModal = {setMostrarModal} guardarPoliza = {guardarPoliza}/>
    </Container>
  );
}

export default App;

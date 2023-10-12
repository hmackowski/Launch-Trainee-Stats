import React from "react";
import { Col, Row, Form, Container } from "react-bootstrap";

function TraineeInputForm({ traineeData = {} }) {

  
  return (
    <Container fluid>
      <Form>
        <Row className="justify-content-center">
          <Col md={3}>
            <Form.Control placeholder={traineeData.firstName} disabled />
            <Row>
              <Col md={6}>
                <Form.Label>CK</Form.Label>
                <Form.Control placeholder={traineeData.ckScore} />
                <Form.Label>WPS</Form.Label>
                <Form.Control placeholder={traineeData.wpsScore} />
                <Form.Label>DIS</Form.Label>
                <Form.Control placeholder={traineeData.disScore} />
                <Form.Label>PCT</Form.Label>
                <Form.Control placeholder={traineeData.pctScore} />
              </Col>
              <Col md={6}>
                <Form.Label>TMW</Form.Label>
                <Form.Control placeholder={traineeData.tmwScore} />
                <Form.Label>PSL</Form.Label>
                <Form.Control placeholder={traineeData.pslScore} />
                <Form.Label>COM</Form.Label>
                <Form.Control placeholder={traineeData.comScore} />
                <Form.Label>PA</Form.Label>
                <Form.Control placeholder={traineeData.paScore} />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Form.Control placeholder={traineeData.lastName} disabled />
            <Form.Label>Add Note:</Form.Label>
            <Form.Control as="textarea" rows={9} />
            <Row></Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default TraineeInputForm;

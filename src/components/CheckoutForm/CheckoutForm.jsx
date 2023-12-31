import { Alert, Button, Card, Col, Form, Row } from "react-bootstrap";
import "./CheckoutForm.css";
import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirEmail, setConfirmEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleConfirm(event) {
    event.preventDefault();

    const userData = {
      name,
      lastName,
      email,
      phoneNumber,
    };

    onConfirm(userData);
  }

  const allFieldsAreFilled = name.length * lastName.length * email.length * phoneNumber.length !== 0;
  const nameIsValid = name.length > 3;
  const lastNameIsValid = lastName.length > 3;
  const emaiIsValid = confirEmail === email;
  const phoneNumberIsValid = phoneNumber.length >= 9;

  const formIsValid =
    allFieldsAreFilled && nameIsValid && lastNameIsValid && emaiIsValid && phoneNumberIsValid;


  function compareEmail() {
    if (!emaiIsValid) {
      return (
        <Form.Text className="text-muted">El email no es igual!</Form.Text>
      );
    }
  }

  function validateName(){
    if(!nameIsValid){
      return (
        <Form.Text className="text-muted">El nombre debe tener al menos 3 caracteres.</Form.Text>
      );
    }
  }

  function validateLastName(){
    if(!lastNameIsValid){
      return (
        <Form.Text className="text-muted">El apellido debe tener al menos 3 caracteres.</Form.Text>
      );
    }
  }

  return (
    <Row className="gx-0 w-100 justify-content-center">
      <Col xs lg="4" className="mx-2">
        <Card className="my-5 m-auto w-100">
          <Card.Header>
            <h6>Checkout</h6>
          </Card.Header>
          <Card.Body className="my-4">
            <Form onSubmit={handleConfirm}>
              <Row>
                <Col xs="12" md="6">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                    />
                    {validateName()}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={({ target }) => setLastName(target.value)}
                    />
                    {validateLastName()}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={({ target }) => setEmail(target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formConfirmEmail">
                    <Form.Label>Confirmar email</Form.Label>
                    <Form.Control
                      type="email"
                      value={confirEmail}
                      onChange={({ target }) => setConfirmEmail(target.value)}
                    />
                    {compareEmail()}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  onChange={({ target }) => setPhoneNumber(target.value)}
                />
              </Form.Group>
              <Alert
                show={!allFieldsAreFilled}
                className="text-center w-50 m-auto"
                variant="danger"
              >
                Todos los campos son obligatorios
              </Alert>

              <div className="d-grid">
                <Button
                  type="submit"
                  size="lg"
                  className="form-card-btn mt-5"
                  disabled={!formIsValid}
                >
                  Realizar Compra
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

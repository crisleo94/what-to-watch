import React from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap'

export default function Login() {
  return (
    <Form className='container mt-5'>
      <FormGroup row>
        <Label for='username'>Nombre de Usuario</Label>
        <Col>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Ingrese su nombre de usuario.'
          />
          <FormFeedback>
            El nombre de usuario es un campo obligatorio
          </FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='password'>Contraseña</Label>
        <Col>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Ingrese su contraseña.'
          />
          <FormFeedback>La contraseña es un campo obligatorio</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <Button>Login</Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

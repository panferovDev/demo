import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Row,
} from 'reactstrap';

export default function SignIn() {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4}>
        <h3 className="text-center">SignIn</h3>
        <Form>
          <FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="password"
            />
          </FormGroup>
          <Button block>SignIn</Button>
        </Form>
      </Col>
    </Row>
  );
}

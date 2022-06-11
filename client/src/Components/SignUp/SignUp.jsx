import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col, Form, FormGroup, Input, Row,
} from 'reactstrap';
import { regUser } from '../../Redux/actions/userAction';

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(regUser(inputs));
    setInputs({});
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4}>
        <h3 className="text-center">SignUp</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Input
              name="login"
              type="text"
              placeholder="you name"
              onChange={inputHandler}
              value={inputs.login || ''}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={inputHandler}
              value={inputs.email || ''}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={inputHandler}
              value={inputs.password || ''}
            />
          </FormGroup>
          <Button block type="submit">SignUp</Button>
        </Form>
      </Col>
    </Row>
  );
}

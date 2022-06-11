import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { userSignIn } from '../../Redux/actions/userAction';

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignIn(inputs));
    setInputs({});
  };

  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >

      <Row className="justify-content-center mt-4">
        <Col xs={4}>
          <h3 className="text-center">SignIn</h3>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Input
                name="email"
                type="email"
                placeholder="email"
                value={inputs.email || ''}
                onChange={inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={inputs.password || ''}
                onChange={inputHandler}
              />
            </FormGroup>
            <Button block>SignIn</Button>
          </Form>
        </Col>
      </Row>
    </motion.div>
  );
}

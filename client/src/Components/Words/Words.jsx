import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col, FormGroup, Input, Label, ListGroup, Row,
} from 'reactstrap';
import { getWords } from '../../Redux/actions/wordsActions';
import WordItem from '../WordItem/WordItem';

export default function Words() {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();
  const { words } = useSelector((state) => state);
  const inputHandler = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    if (word.trim()) {
      dispatch(getWords(word));
    }
  }, [word]);

  return (
    <>
      <Row>
        <Col className="mt-3">
          <FormGroup>
            <Label>Words</Label>
            <Input
              type="text"
              placeholder="words"
              value={word}
              onChange={inputHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {words.map((el, index) => <WordItem key={el.id} el={el} index={index} />)}
        </Col>
      </Row>
    </>
  );
}

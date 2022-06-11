import React, { memo } from 'react';
import { ListGroupItem } from 'reactstrap';

function WordItem({ el, index }) {
  const randomeColor = () => {
    const colors = ['success', 'danger', 'warning', 'info'];
    return colors[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
  };
  return (
    <ListGroupItem color={randomeColor()}>
      {index + 1}
      {' '}
      -
      {' '}
      {el.word}
    </ListGroupItem>
  );
}
export default memo(WordItem);

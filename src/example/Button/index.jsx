import React from 'react';
import './style.css';

export default props => {
  let classes = `action `
  classes += props.display ? 'display' : '';
  classes += props.back ? 'back' : '';
  classes += props.send ? 'send' : '';
  classes += props.triple ? 'triple' : '';

  return (
      <button className={classes} onClick={event => props.click && props.click(props.model)}>
        {props.model}
      </button>
  );
}
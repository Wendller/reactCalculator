import React, { useState } from 'react';
import Display from '../Display';
import Button from '../Button';
import './style.css';
import conversion from '../../utils/binaryConversion';

export default _ => {
  const backspace = <span className="material-icons">backspace</span>;
  const done = <span className="material-icons">check_circle</span>;
  const space = <span className="material-icons">space_bar</span>;

  const [displayValue, setDisplayValue] = useState('');

  const clearMemory = () => {
    setDisplayValue('');
  }

  const addDigit = (digit) => {
    const currentValue = displayValue;
    setDisplayValue(currentValue + digit);
  } 

  const backSpace = () => {
    const currentValue = displayValue.split("").slice(0, displayValue.length - 1);
    setDisplayValue(currentValue.join(''));
  }

  const sendMessage = () => {
    setDisplayValue(conversion(displayValue));
  }

  return (
    <div className="conversor">
      <Display value={displayValue} />
      <Button triple model={"AC"}  click={clearMemory} />
      <Button back model={backspace} click={backSpace} />
      <Button model={"0"} click={addDigit} />
      <Button model={"1"} click={addDigit} />
      <Button model={space} click={addDigit} />
      <Button double send model={done} click={sendMessage} />
    </div>
  );
}
import React, { Component } from 'react';
import Display from '../Display';
import Button from '../Button';
import './style.css';

export default class Calculator extends Component {
  
  clearMemory() {
    console.log('clear');
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    console.log(n);
  }

  render () {
    const addDigit = n => this.addDigit(n);
    const setOperation = operation => this.setOperation(operation);

    return (
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" triple click={() => this.clearMemory()} />
        <Button label="/" operation click={setOperation} />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" operation click={setOperation} />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" operation click={setOperation} />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" operation click={setOperation} />
        <Button label="0" double click={addDigit} />
        <Button label="." click={addDigit} />
        <Button label="=" operation click={setOperation} />
      </div> 
    );
  }
} 
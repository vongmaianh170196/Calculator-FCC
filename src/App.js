import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];


class Calculator extends Component{
  constructor(props){
    super(props);
    this.state ={
      input: '',
      formula: '',
      result: 0
    }    
    this.handleClicked = this.handleClicked.bind(this);
    this.handleFormula = this.handleFormula.bind(this);
  }

 
  handleClicked(evt){
    this.setState({
      input: evt.target.value,
      formula: this.state.formula + evt.target.value
    });
  }
  handleFormula(event){
    this.setState({
      result: eval(this.state.formula.toString())
    });
    
  }
  render(){
    return(
      <div>
        <p>{this.state.formula}</p>
        <p>{this.state.result}</p>
        <CalculatorScreen inp={this.state.input} />
        <button value="0" onClick={this.handleClicked}>0</button>
        <button value="1" onClick={this.handleClicked}>1</button>
        <button value="2" onClick={this.handleClicked}>2</button>
        <button value="3" onClick={this.handleClicked}>3</button>
        <button value="4" onClick={this.handleClicked}>4</button>
        <button value="5" onClick={this.handleClicked}>5</button>
        <button value="6" onClick={this.handleClicked}>6</button>
        <button value="7" onClick={this.handleClicked}>7</button>
        <button value="8" onClick={this.handleClicked}>8</button>
        <button value="9" onClick={this.handleClicked}>9</button>
        <button value="+" onClick={this.handleClicked}>+</button>
        <button value="-" onClick={this.handleClicked}>-</button>
        <button value="*" onClick={this.handleClicked}>*</button>
        <button value="/" onClick={this.handleClicked}>/</button>
        <button value="=" onClick={this.handleFormula}>=</button>
      </div>
    );
  }
}

class CalculatorScreen extends Component{
  render(){
    return(
      <div>
        <p>{this.props.inp}</p>
      </div>
    );
  }
}
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;

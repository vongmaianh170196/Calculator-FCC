import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CalculatorScreen} from './calculatorScreen.js';


//const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oporators =['+', '-', '*', '/'];

export class Calculator extends Component{
  constructor(props){
    super(props);
    this.state ={
      input: '',
      formula: '',
    }    
    this.handleClicked = this.handleClicked.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

 
  handleClicked(evt){
    this.setState({
      input: evt.target.value,
      formula: this.state.formula + evt.target.value
    });
  }
  handleOperator(e){
   let tempinp = this.state.input;
    let temp = e.target.value;
    if(oporators.includes(tempinp)){
      this.setState({
        input: temp,
        formula: this.state.formula.substring(0, this.state.formula.length-1) + temp 
      }); 
    }
    else {
      this.setState({
        input: temp,
        formula: this.state.formula + temp
      });
    }   
  }
  handleResult(event){
    this.setState({
      input: (Math.round(eval(this.state.formula.toString())*100)/100).toString()
    });
    
  }
  handleDelete(event){
    this.setState({
        input: '0',
        formula:' ',
    });
    
  }
  render(){
    return(
      <div className="container"> 
        <div className="displayScreen">       
        <CalculatorScreen inp={this.state.input} formula={this.state.formula} />
        </div>
        <button className="zero erase" value="AC" onClick={this.handleDelete}>AC</button>
        <button value="*" className="opera" onClick={this.handleOperator}>*</button>
        <button value="/" className="opera" onClick={this.handleOperator}>/</button>
        <br/>        
        <button value="7" className="numbs" onClick={this.handleClicked}>7</button>
        <button value="8" className="numbs" onClick={this.handleClicked}>8</button>
        <button value="9" className="numbs" onClick={this.handleClicked}>9</button>
        <button value="-"className="opera" onClick={this.handleOperator}>-</button>
        <br/>
        <button value="4" className="numbs" onClick={this.handleClicked}>4</button>
        <button value="5" className="numbs" onClick={this.handleClicked}>5</button>
        <button value="6" className="numbs" onClick={this.handleClicked}>6</button> 
        <button value="+" className="opera" onClick={this.handleOperator}>+</button>  
        <br/>
        <div className="botpos">
        <button value="1" className="numbs"  onClick={this.handleClicked}>1</button>
        <button value="2" className="numbs"  onClick={this.handleClicked}>2</button>
        <button value="3"  className="numbs"  onClick={this.handleClicked}>3</button>        
        <br/>
        <button className="zero numbs" value="0" onClick={this.handleClicked}>0</button>
        <button value="." className="numbs"  onClick={this.handleClicked}>.</button>
        <button value="=" className="equation" onClick={this.handleResult}>=</button>
        </div>
      </div>
    );
  }
}
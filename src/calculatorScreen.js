import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export class CalculatorScreen extends Component{
    render(){
      return(
        <div>
          <p className="formula">{this.props.formula}</p>
          <p className="inp">{this.props.inp}</p>
        </div>
      );
    }
  }
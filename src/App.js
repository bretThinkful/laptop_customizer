import React from 'react';
import './App.css';
import MainForm from './MainForm';
import MainSummary from './MainSummary';
import './index.js'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    };
  }
  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  } 

  
  render(){
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>
        <main>
          <section className="main__form">
            <MainForm
              features = { this.props.features }
              selected = { this.state.selected }
              handleUpdate = { (feature, newValue)=> this.updateFeature(feature, newValue) }/>
          </section>
          <section className="main__summary">
            <MainSummary
              summary = { this.state.selected }/>
          </section>
        </main>
    </div>
      );
    }       
}

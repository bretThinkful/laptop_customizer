import React from 'react';
import Features from './Features';
import './MainForm.css';

export default class MainForm extends React.Component {
  render(){
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          <Features
            features = { this.props.features }
            selected = { this.props.selected }
            updateFeature = { this.props.handleUpdate }/>
      </section>
    )
  }
} 
import React from 'react';
import './Features.css'

export default class Features extends React.Component {
  
  generateHTML (index, featureClass, item, key) {
    return (
      <li key={index} className="feature__item">
        <div className={featureClass}
          onClick={e => this.props.updateFeature(key, item)}>
            { item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(item.cost) })
        </div>
      </li>
    )
  }
 
  displayFeatures() {
      return Object.keys(this.props.features).map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return this.generateHTML(index, featureClass, item, key)
        });
        return (
          <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
        )
    });    
  }  

  render() {
      return <div>{ this.displayFeatures()}</div>
  }
}
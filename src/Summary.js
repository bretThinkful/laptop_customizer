import React from 'react';
import './Summary.css'

export default class Summary extends React.Component {
    render(){
        function summary (selected){
            return Object.keys(selected)
            .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key} </div>
            <div className="summary__option__value">{selected[key].name}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(selected[key].cost) }
          </div>
      </div>)
        }
        return (
           <div>
               { summary(this.props.selected) }
            </div>
        )
    }
}
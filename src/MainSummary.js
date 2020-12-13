import  React from 'react';
import Summary from './Summary';
import './MainSummary.css';

export default class MainSummary extends React.Component {
     render() {
        function getTotal(summary){
            return Object.keys(summary )
            .reduce((acc, curr) => acc + summary[curr].cost, 0);
        }
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                    <Summary
                        selected = {this.props.summary}/>
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { getTotal(this.props.summary) }
                </div>
                </div>
            </section>
        )
    }
}
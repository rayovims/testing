import React from 'react';
import './Radio.css';

export default class Radio extends React.Component {

    state = {
        type: ''
    }
    render() {
        return (
            <div>
                <input
                    className="radio-btn"
                    type="radio"
                    value={this.props.value}
                    name="btn"
                    onChange={e => this.setState({ type: e.target.value })}
                />
                <label>{this.props.value}</label>
                <hr />
            </div>
        )
    }
}

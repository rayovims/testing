import React from 'react';
import './Radio.css';

export default class Radio extends React.Component {

    state = {
        type: ''
    }

    handleClick = () = {
    
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
                    onClick={this.handleClick.bind(this)}
                />
                <label>{this.props.value}</label>
                <hr />
            </div>
        )
    }
}

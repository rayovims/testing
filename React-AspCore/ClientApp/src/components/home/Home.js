import React, { Component } from 'react';
import { Route } from 'react-router';
//import Browse from '../browse/Browse';
import './Home.css';

export class Home extends Component {
    displayName = Home.name

    state = {
        type: '',
        func: ''
    };

    componentDidUpdate() {
        const { type, func } = this.state;
        console.log(type, func);
    }

    render() {

        if (this.state.func === 'browse') {
            console.log("CLICKED");
            return <Route path='/browse' />
        }

        return (
            <div className="row">
                <div id="body-outline" className="container col-6">
                    <p style={{ marginTop: "5px", fontWeight: "700" }}>Select the Type</p>
                    <hr />
                    <input
                        className="radio-btn"
                        type="radio"
                        value="security"
                        name="btn"
                        onChange={e => this.setState({ type: e.target.value })}
                    />
                    <label>Security Group</label>
                    <hr />
                    <input
                        className="radio-btn"
                        type="radio"
                        value="mailbox"
                        name="btn"
                        onChange={e => this.setState({ type: e.target.value })}
                    />
                    <label>Team Mailbox</label>
                    <hr />
                    <div className="row" style={{ marginBottom: "15px" }}>
                        <div className="col-sm-6 text-right">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => this.setState({func: 'search'})}
                            >
                                Search
                            </button>
                        </div>
                        <div className="col-sm-6 text-left">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => this.setState({ func: 'browse' })}
                            >
                                Browse
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

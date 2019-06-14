import React, { Component } from 'react';
import Radio from '../radio-button/Radio';
import Button from '../button/Button';
import './Home.css';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="row">
                <div id="body-outline" className="container col-6">
                    <p style={{ marginTop: "5px", fontWeight: "700" }}>Select The Type</p>
                    <hr />
                    <Radio value="Security Group" />
                    <hr />
                    <Radio value="Team Mailbox" />
                    <div className="row">
                        <div className="col-6 text-right btn-fix">
                            <Button value="Search" />
                        </div>
                        <div className="col-6 text-left btn-fix">
                            <Button value="Browse" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

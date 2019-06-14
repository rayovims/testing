import React from 'react';

export default class Button extends React.Component {

    state = {
        value: ''
    }

    buttonHandler = () => {
        if (this.props.value === "Search") {
            this.search();
        } 

        if (this.props.value === "Browse") {
            this.browse();
        }
    }

    search() {
        console.log("Search Function called");
        console.log(this.props.type);
    }

    browse() {
        console.log("Browse Function called");
    }

    render() {
        return (
            <button
                type="button"
                className="btn"
                onClick={this.buttonHandler.bind(this)}
            >
                {this.props.value}
            </button>
        )
    }
}
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './header/Header';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div>
                <Header />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

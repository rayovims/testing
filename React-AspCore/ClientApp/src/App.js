import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Browse } from './components/browse/Browse';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/browse' component={Browse}/>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}

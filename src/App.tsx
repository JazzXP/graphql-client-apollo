import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import LatestPost from './LatestPost';
import Username from './Username';

const client = new ApolloClient({
  uri: "http://localhost:8090/graphql"
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Username />
          The latest post is: <LatestPost />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

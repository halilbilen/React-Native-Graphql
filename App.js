import React from "react";
import { ApolloProvider, Query, useQuery } from "react-apollo";
import ApolloClient from "apollo-boost";
import List from './src/screens/list'

export default function App() {
  const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql' })
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>

  )
}
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'

import GlobalStyle from '/components/GlobalStyle';
import Pages from '/pages';

const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
    return { 
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

const client = new ApolloClient ({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true
});

const data = {
    isLoggedIn: !!localStorage.getItem('token')
}

cache.writeData({ data });
// write the cache data after cache is reset
client.onResetStore(() => cache.writeData({ data }));

const App = () => {
    return(
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    );
};

//to render our application within the element with an ID of root 
ReactDOM.render(<App />, document.getElementById('root'));
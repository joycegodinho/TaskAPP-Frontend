import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Redirect } from 'react-router'

import Layout from '../components/Layout'

import Home from './home';
import SingleTask from './singletask';
import SignUp from './signup';
import SignIn from './signin';
import NewTask from './new';
import EditTask from './edit';
import ToDo from './todo';

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;

const Pages = () => {
    return (
        <Router>  
            <Layout>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/todo" component={ToDo} />
                <Route path="/task/:id" component={SingleTask} /> 
                <Route path="/new" component={NewTask} />
                <PrivateRoute path="/edit/:id" component={EditTask} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Redirect from="*" to={"/signin"} />
            </Layout>     
        </Router>
    );
};

const PrivateRoute = ({ component: Component, ...rest}) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    return (
        <Route {...rest} render={props => data.isLoggedIn === true ? (
            <Component {...props} /> ) : (
            <Redirect to = {{ pathname: 'signin', state :{from: props.location}}} />
            )} />
    );
};

export default Pages;
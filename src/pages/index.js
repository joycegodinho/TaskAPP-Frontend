import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout'

import Home from './home'
import SingleTask from './singletask'

const Pages = () => {
    return (
        <Router>
           
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/task/:id" component={SingleTask} /> 
            </Layout>   

            
        </Router>
    );
};

export default Pages;
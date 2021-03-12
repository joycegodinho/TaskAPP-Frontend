import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout'

import Home from './home'
import SingleTask from './singletask'




const Pages = () => {
    return (
        <Router>
           
            <Layout>
                <Route path="/" component={Home} />
                <Route path="/singletask" component={SingleTask} />
            </Layout>   

            
        </Router>
    );
};

export default Pages;
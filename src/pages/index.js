import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout'

import AllTodos from './alltodos'
import SingleTodo from './singletodo'




const Pages = () => {
    return (
        <Router>
           
            <Layout>
                <Route path="/todos" component={AllTodos} />
                <Route path="/singletodo" component={SingleTodo} />
            </Layout>   

            
        </Router>
    );
};

export default Pages;
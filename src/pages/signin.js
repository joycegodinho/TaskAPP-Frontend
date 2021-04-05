import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client'

import UserForm from '../components/UserForm'

const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!){
        signIn(email: $email, password: $password)
    }
`;

const SignIn = props => {

    useEffect (() => { document.title = 'Sign In - Notedly' });
    const client = useApolloClient();
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn);
            client.writeQuery({ 
                query: gql`
                    query Logged {
                        isLoggedIn
                    }
                `,
                data: {isLoggedIn: true}})
            props.history.push('/')
        }
    });
  
    return (
      <React.Fragment>
        <UserForm action={signIn} formType="signIn" />
        {/* if the data is loading, display a loading message*/}
        {loading && <p>Loading...</p>}
        {/* if there is an error, display a error message*/}
        {error && <p>Error signin in!</p>}
      </React.Fragment>
    );
  };
  
  export default SignIn;
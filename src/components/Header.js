import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import { BiCheck, BiCheckboxChecked } from "react-icons/bi";

import ButtonAsLink from './ButtonAsLink';

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const HeaderBar = styled.header`
    width: 100%;
    padding: 1.5em 2em;
    diplay: flex;
    height: 64px
    position: fixed;
    align-items: center;
    background-color: #FFFAFD;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

`;

const LogoText = styled.h1`
    margin: 150px;
    margin-top: 40px;
    padding: 0;
    display: inline;
    color: #000000;
`;

const LogText = styled.p`
    margin: 150px;
    margin-top: 40px;
    padding: 0;
    display: inline;
`;

const UserState = styled.div`
    margin-left: auto;
`;

const Header = props => {
    // query hook for user logged in state
    const { data, client } = useQuery(IS_LOGGED_IN);
  
    return (
      <HeaderBar>
        <LogoText>Task<BiCheck size="2em" /></LogoText>
        {/* If logged in display a log out link, else display sign in options */}
        <UserState>
          {data.isLoggedIn ? (
            <ButtonAsLink
              onClick={() => {
                // remove the token
                localStorage.removeItem('token');
                // clear the application's cache
                client.resetStore();
                // update local state
                client.writeQuery({ 
                    query: gql`
                        query Logged {
                            isLoggedIn
                        }
                    `,
                    data: {isLoggedIn: false}})
                // redirect the user to the homepage
                props.history.push('/');
              }}
            >
              Logout
            </ButtonAsLink>
          ) : (
            <LogText>
              <Link to={'/signin'}>Sign In</Link> or{' '}
              <Link to={'/signup'}>Sign Up</Link>
            </LogText>
          )}
        </UserState>
      </HeaderBar>
    );
  };
  
  export default withRouter(Header);
  
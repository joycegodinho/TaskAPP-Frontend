import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 2em;
    background: #F2F3F4;

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 180px;
        height: calc(100% - 64px);
    }
`;

const NavList = styled.ul`
    margin: 10px;
    padding: 10px;
    list-style: none;
    line-height: 2;



    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #000000;
    }

    a:visited {
        color: #000000;
    }

    a:hover,
    a:focus {
        color: #0077cc;
    }
`;

const Navigation = () => {
    return(
        <Nav>
            <NavList>
                <li>
                    <Link to="/">All Tasks</Link>
                </li>
                <li>
                    <Link to="/todo">To Do</Link>
                </li>
                <li>
                    <Link to="/done">Done</Link>
                </li>
                <li>
                    <Link to='/new'>+ new</Link>
                </li>
            </NavList>
        </Nav>
    );
};

export default Navigation;
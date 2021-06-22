import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiCalendarExclamation, BiCalendarHeart, BiCalendarCheck, BiCalendarPlus } from "react-icons/bi";

const Nav = styled.nav`
    padding: 2em;
    background: #f7fcfa;

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 200px;
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
        color: #8c9db8;
    }

    a:visited {
        color: #8c9db8;
    }

    a:hover,
    a:focus {
        color: #a8d9d5;
    }
`;
const StyledMark = styled.mark`
    background-color: #BFD2FF; 
    border-radius: 0.2em 0.2em;
    
`;

const Navigation = () => {
    return(
        <Nav>
            <NavList>
                <li>
                    <p></p>
                    <Link to="/"><BiCalendarHeart size="1.5em" /> Home</Link>
                </li>
                <li>
                    <p></p>
                    <Link to="/todo"><BiCalendarExclamation size="1.5em" /> To Do</Link>
                </li>
                <li>
                    <p></p>
                    <Link to="/done"><BiCalendarCheck size="1.5em" /> Done</Link>
                </li>
                <li>
                    <p></p>            
                    <Link to='/new'><BiCalendarPlus size="1.5em"/> New</Link>
                </li>
            </NavList>
        </Nav>
    );
};

export default Navigation;
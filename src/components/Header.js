import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
    width: 100%;
    padding: 1.5em 2em;
    diplay: flex;
    height: 64px
    position: fixed;
    align-items: center;
    background-color: #F2F3F4;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

`;

const LogoText = styled.h1`
    margin: 150px;
    padding: 0;
    display: inline;
    color: #7B7D7D;
`;

const Header = () => {
    return (
        <HeaderBar>
            <LogoText>Task List</LogoText>
        </HeaderBar>
    );
};

export default Header;
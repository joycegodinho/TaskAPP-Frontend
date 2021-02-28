import React from 'react';

import Button from './Button'
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


const Navigation = () => {
    return(
        <Nav>
            <Button>+ add</Button>
            
        </Nav>
    );
};

export default Navigation;
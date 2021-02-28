import styled from 'styled-components';

const Button = styled.button` 
    display: block;
    padding: 7px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #7B7D7D;
    background-color: #F2F3F4;
    cursor: pointer;

    :hover {
        background-color: #EAEDED;
    }

    :active {
        background-color: #E5E8E8;
    }
`;

export default Button;
import styled from 'styled-components';

const Button = styled.button` 
    display: block;
    border-top: 9em;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 9em;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #7B7D7D;
    background-color: #6E6ECD ;
    cursor: pointer;

    :hover {
        background-color: #EAEDED;
    }

    :active {
        background-color: #E5E8E8;
    }
`;

export default Button;
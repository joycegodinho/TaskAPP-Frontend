import styled from 'styled-components';

const Button = styled.button` 
    display: block;
    border-top: 9em;
    padding: 8px;
    margin-bottom: 9em;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #d7f2e8 ;
    cursor: pointer;


    box-shadow: 0 0 3px 0 #B8B8B9;

    :hover {
        background-color: #EAEDED;
    }

    :active {
        background-color: #E5E8E8;
    }
`;

export default Button;
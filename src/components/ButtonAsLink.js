import styled from 'styled-components';

const ButtonAsLink = styled.button`
  background: none;
  color: #7b89a1;
  border: none;
  margin-top: 10px;
  padding: 0;
  font: inherit;
  text-decoration: none;
  cursor: pointer;


  :hover,
  :active {
    color: #004499;
  }
`;

export default ButtonAsLink;
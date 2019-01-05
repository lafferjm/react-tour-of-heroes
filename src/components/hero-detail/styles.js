import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
`;

const StyledInput = styled.input`
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;

  :hover {
    background-color: #cfd8dc;
  }

  :disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }
`;

export { StyledLabel, StyledInput, StyledButton };

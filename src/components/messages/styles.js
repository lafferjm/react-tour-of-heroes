import styled from 'styled-components';

const ClearButton = styled.button`
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  color: #888;
  margin-bottom: 12px;

  :hover {
    background-color: #cfd8dc;
  }

  :disabled {
    background-color: #eee;
    color: #aaa;
    cursor: auto;
  }
`;

const MessagesHeader = styled.h2`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
`;

export { 
  ClearButton,
  MessagesHeader
};

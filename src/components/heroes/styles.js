import styled from 'styled-components';

const HeroList = styled.ul`
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
`;

const HeroListItem = styled.li`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.selected ? '#cfd8dc !important': '#eee'};
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
  color: ${ props => props.selected ? 'white' : null};
  
  :hover {
    color: #607d8b;
    background-color: #ddd;
    left: .1em;
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607d8b;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-with: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
`;

export { HeroList, HeroListItem, Badge };
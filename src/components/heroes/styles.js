import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroList = styled.ul`
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
`;

const HeroListItem = styled.li`
  position: relative;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? '#cfd8dc !important' : '#eee'};
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
  color: ${props => (props.selected ? 'white' : null)};

  :hover {
    color: #607d8b;
    background-color: #ddd;
    left: 0.1em;
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
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
`;

const HeroLink = styled(Link)`
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;

  :hover {
    color: #607d8b
  }
`;

export { HeroList, HeroListItem, Badge, HeroLink };

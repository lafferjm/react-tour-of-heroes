import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderThree = styled.h3`
  text-align: cetner;
  margin-bottom: 0;
`;

const HeaderFour = styled.h4`
  position: relative;
`;

const HeroModule = styled.div`
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #607d8b;
  border-radius: 2px;

  :hover {
    background-color: #eee;
    cursor: pointer;
    color: #607d8b;
  }

  @media (max-width: 1024px) {
    min-width: 60px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
    max-height: 75px;
  }
`;

const Grid = styled.div`
  margin: 0;
  padding: 10px 0;

  @media (max-width: 1024px) {
    margin: 0;
  }

  > [class*='col-']:last-of-type {
    padding-right: 0px;
  }
`;

const GridItem = styled(Link)`
  text-decoration: none;
  width: 25%;
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;

  :last-of-type {
    padding-right: 0;
  }
`;

const Container = styled.div`
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export { HeaderThree, HeaderFour, HeroModule, Grid, GridItem, Container };

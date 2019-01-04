import React from 'react';
import {
  HeaderThree,
  HeaderFour,
  HeroModule,
  Grid,
  GridItem,
  Container
} from './styles';

import HEROES from '../../heroes';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: HEROES
    };
  }

  render() {
    const { heroes } = this.state;

    return (
      <Container>
        <HeaderThree>Top Heroes</HeaderThree>
        <Grid>
          {heroes.slice(1, 5).map(hero => (
            <GridItem key={hero.id}>
              <HeroModule>
                <HeaderFour>{hero.name}</HeaderFour>
              </HeroModule>
            </GridItem>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;

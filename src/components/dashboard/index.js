import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../state/actions';
import {
  HeaderThree,
  HeaderFour,
  HeroModule,
  Grid,
  GridItem,
  Container
} from './styles';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/heroes');
    const response = await res.json();

    this.setState({ heroes: response });
    this.props.addMessage('HeroService: fetched heroes');
  }

  render() {
    const { heroes } = this.state;

    return (
      <Container>
        <HeaderThree>Top Heroes</HeaderThree>
        <Grid>
          {heroes.slice(1, 5).map(hero => (
            <GridItem key={hero.id} to={`/detail/${hero.id}`}>
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

const mapDispatchToProps = {
  addMessage
};

export default connect(null, mapDispatchToProps)(Dashboard);

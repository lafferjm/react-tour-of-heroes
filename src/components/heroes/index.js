import React from 'react';
import { HeroList, HeroListItem, Badge } from './styles';

class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/heroes');
    const response = await res.json();
    this.setState({
      heroes: response
    });
  }

  updateHero = event => {
    const { selectedHero } = this.state;
    selectedHero.name = event.target.value;
    this.setState({ selectedHero });
  };

  selectHero = hero => {
    this.setState({
      selectedHero: hero
    });
  };

  render() {
    const { heroes } = this.state;
    return (
      <>
        <h2>My Heroes</h2>
        <HeroList>
          {heroes.map(hero => (
            <HeroListItem key={hero.id}>
              <Badge>{hero.id}</Badge> {hero.name}
            </HeroListItem>
          ))}
        </HeroList>
      </>
    );
  }
}

export default Heroes;

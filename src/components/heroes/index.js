import React from 'react';
import HEROES from '../../heroes';
import HeroDetail from '../hero-detail';
import { HeroList, HeroListItem, Badge } from './styles';

class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: HEROES,
      selectedHero: null
    };
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
    const { heroes, selectedHero } = this.state;
    return (
      <>
        <h2>My Heroes</h2>
        <HeroList>
          {heroes.map(hero => (
            <HeroListItem
              key={hero.id}
              onClick={() => this.selectHero(hero)}
              selected={hero === selectedHero}
            >
              <Badge>{hero.id}</Badge> {hero.name}
            </HeroListItem>
          ))}
        </HeroList>
        {selectedHero && (
          <HeroDetail hero={selectedHero} updateHero={this.updateHero} />
        )}
      </>
    );
  }
}

export default Heroes;

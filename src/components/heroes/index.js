import React from 'react';
import HEROES from '../../heroes';
import HeroDetail from '../hero-detail';
import './styles.css';

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
        <ul class="heroes">
          {heroes.map(hero => (
            <li
              key={hero.id}
              onClick={() => this.selectHero(hero)}
              className={hero === selectedHero ? 'selected' : null}
            >
              <span class="badge">{hero.id}</span> {hero.name}
            </li>
          ))}
        </ul>
        {selectedHero && (
          <HeroDetail hero={selectedHero} updateHero={this.updateHero} />
        )}
      </>
    );
  }
}

export default Heroes;

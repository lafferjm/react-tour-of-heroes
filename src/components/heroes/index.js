import React from 'react';
import { HeroList, HeroListItem, Badge, HeroLink } from './styles';

class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      newHero: {
        name: ''
      }
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

  addHero = async () => {
    const { newHero, heroes } = this.state;
    const res = await fetch('http://localhost:3000/heroes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHero)
    });
    const response = await res.json();
    heroes.push(response);

    this.setState({
      heroes,
      newHero: {
        name: ''
      }
    });
  };

  updateHeroName = event => {
    this.setState({
      newHero: {
        name: event.target.value
      }
    });
  };

  render() {
    const { heroes, newHero } = this.state;
    return (
      <>
        <h2>My Heroes</h2>
        <div>
          <label>
            Hero name:
            <input value={newHero.name} onChange={this.updateHeroName} />
          </label>
          <button onClick={this.addHero}>add</button>
        </div>
        <HeroList>
          {heroes.map(hero => (
            <HeroListItem key={hero.id}>
              <HeroLink to={`/detail/${hero.id}`}>
                <Badge>{hero.id}</Badge> {hero.name}
              </HeroLink>
            </HeroListItem>
          ))}
        </HeroList>
      </>
    );
  }
}

export default Heroes;

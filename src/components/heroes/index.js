import React from 'react';
import HEROES from '../../heroes';
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
  }

  selectHero = hero => {
    this.setState({
      selectedHero: hero
    });
  }

  render() {
    const { heroes, selectedHero } = this.state;
    return (
      <>
        <h2>My Heroes</h2>
        <ul class="heroes">
          {
            heroes.map(hero => (
              <li
                key={hero.id}
                onClick={() => this.selectHero(hero)}
                className={hero === selectedHero ? 'selected' : null}
              >
                <span class="badge">{hero.id}</span> {hero.name}
              </li>
            ))
          }
        </ul>
        {
          selectedHero && (
            <div>
              <h2>{selectedHero.name.toUpperCase()} Details</h2>
              <div><span>id: </span>{selectedHero.id}</div>
              <div>
                <label>name:
                  <input
                    value={selectedHero.name}
                    placeholder='name'
                    onChange={this.updateHero}
                  />
                </label>
              </div>
            </div>
          )
        }
      </>
    )
  }
};

export default Heroes;

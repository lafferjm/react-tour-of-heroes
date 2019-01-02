import React from 'react';

class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {
        id: 1,
        name: 'Windstorm'
      }
    };
  }

  updateHero = (event, id) => {
    this.setState({
      hero: {
        id: id,
        name: event.target.value
      }
    });
  }

  render() {
    const { hero } = this.state;

    return (
      <>
        <h2>{hero.name.toUpperCase()} Details</h2>
        <div><span>id: </span>{hero.id}</div>
        <div>
          <label>name:
            <input
              placeholder="name"
              value={hero.name}
              onChange={event => this.updateHero(event, hero.id)}
            />
          </label>
        </div>
      </>
    )
  }
};

export default Heroes;

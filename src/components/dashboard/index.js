import React from 'react';
import HEROES from '../../heroes';
// import './styles.css';

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
      <>
        <h3>Top Heroes</h3>
        <div className="grid grid-pad">
          {
            heroes.slice(1, 5).map(hero => (
              <a className="col-1-4" key={hero.id}>
                <div className="module hero">
                  <h4>{ hero.name }</h4>
                </div>
              </a>
            ))
          }
        </div>
      </>
    )
  }
}

export default Dashboard;

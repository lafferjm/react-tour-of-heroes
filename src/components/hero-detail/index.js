import React from 'react';
import PropTypes from 'prop-types';

const HeroDetail = ({ hero, updateHero }) => (
  <div>
    <h2>{hero.name.toUpperCase()} Details</h2>
    <div>
      <span>id: </span>
      {hero.id}
    </div>
    <div>
      <label>
        name:
        <input value={hero.name} placeholder="name" onChange={updateHero} />
      </label>
    </div>
  </div>
);

HeroDetail.propTypes = {
  hero: PropTypes.object.isRequired,
  updateHero: PropTypes.func.isRequired
};

export default HeroDetail;

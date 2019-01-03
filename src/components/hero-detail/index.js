import React from 'react';

const HeroDetail = ({ hero, updateHero }) => (
  <div>
    <h2>{hero.name.toUpperCase()} Details</h2>
    <div><span>id: </span>{hero.id}</div>
    <div>
      <label>name:
        <input
          value={hero.name}
          placeholder="name"
          onChange={updateHero}
        />
      </label>
    </div>
  </div>
);

export default HeroDetail;

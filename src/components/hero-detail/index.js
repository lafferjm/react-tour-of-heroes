import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../state/actions';
import PropTypes from 'prop-types';
import { StyledInput, StyledLabel, StyledButton } from './styles';

class HeroDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: null
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`http://localhost:3000/heroes/${id}`);
    const response = await res.json();

    this.setState({
      hero: response
    });
    this.props.addMessage(`HeroService: fetched hero with id ${id}`);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  updateHero = event => {
    const { hero } = this.state;

    hero.name = event.target.value;
    this.setState({ hero });
  };

  save = async () => {
    const { hero } = this.state;
    await fetch(`http://localhost:3000/heroes/${hero.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hero)
    });
    this.props.addMessage(`HeroService: updated hero with id ${hero.id}`);
    this.props.history.goBack();
  };

  render() {
    const { hero } = this.state;

    return (
      <div>
        {hero && (
          <>
            <h2>{hero.name.toUpperCase()} Details</h2>
            <div>
              <span>id: </span>
              {hero.id}
            </div>
            <div>
              <StyledLabel>
                name:
                <StyledInput
                  value={hero.name}
                  placeholder="name"
                  onChange={this.updateHero}
                />
              </StyledLabel>
            </div>
          </>
        )}
        <StyledButton onClick={this.goBack}>go back</StyledButton>
        <StyledButton onClick={this.save}>save</StyledButton>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addMessage
};

HeroDetail.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(HeroDetail);

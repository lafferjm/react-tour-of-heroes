import React from 'react';
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
  }

  goBack = () => {
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
                <StyledInput value={hero.name} placeholder="name" />
              </StyledLabel>
            </div>
          </>
        )}
        <StyledButton onClick={this.goBack}>go back</StyledButton>
      </div>
    );
  }
}

HeroDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default HeroDetail;

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <li>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={ image } alt={ `${name}` } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;

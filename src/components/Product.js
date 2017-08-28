import React from 'react';
import PropTypes from 'prop-types';
import { createPropType } from 'react-custom-proptypes';

class Product extends React.Component{
  render(){
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.color}</li>
        <li>{this.props}</li>
      </ul>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

const valuePropType = createPropType(
  prop =>
    Number.isInteger(prop) &&
    prop >= 80 &&
    prop <= 300,
  'Must be an integer from 80 - 300.'
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: valuePropType.isRequired
};

export default Product

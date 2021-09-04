/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class Button extends Component {
  constructor(props) {
    super(props);
    const stateObject = {
      text: '',
    };
    this.state = stateObject;
    this.interactWithContract = this.interactWithContract.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { text } = props;
    return { text };
  }

  componentDidMount() {}

  async interactWithContract() {
    console.log('Button Clicked');
  }

  render() {
    const { text } = this.state;
    return (
      <button onClick={async () => await this.interactWithContract()}>
        {text}
      </button>
    );
  }
}

// Button.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Button.defaultProps = {
//   array: [''],
// };

export default Button;

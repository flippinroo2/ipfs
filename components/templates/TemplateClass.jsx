/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button.jsx';

const DEBUG = false;

class TemplateClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const stateObject = {
      temp: '',
    };
    this.state = stateObject;
  }

  componentDidMount() {}

  render() {
    console.log(this.state);
    return <div className="template_class"></div>;
  }
}

// TemplateClass.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// TemplateClass.defaultProps = {
//   array: [''],
// };

export default TemplateClass;

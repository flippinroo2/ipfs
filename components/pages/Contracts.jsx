import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEBUG = false;

const Contracts = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div className="template_function">
      <h1>Contracts Page</h1>
    </div>
  );
};

// Contracts.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Contracts.defaultProps = {
//   array: [''],
// };

export default Contracts;

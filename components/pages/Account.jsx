import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEBUG = false;

const Account = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div className="template_function">
      <h1>Account Page</h1>
    </div>
  );
};

// Account.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Account.defaultProps = {
//   array: [''],
// };

export default Account;

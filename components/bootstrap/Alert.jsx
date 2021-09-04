import PropTypes from 'prop-types';

const DEBUG = false;

const Alert = (props) => {
  const { errorText } = props;
  console.log(errorText);
  alert(errorText);
  return null;
};

// Alert.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Alert.defaultProps = {
//   array: [''],
// };

export default Alert;

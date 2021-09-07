import PropTypes from 'prop-types';

const DEBUG = false;

const Thumbnail = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return <img className="img-thumbnail"></img>;
};

// Thumbnail.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Thumbnail.defaultProps = {
//   array: [''],
// };

export default Thumbnail;

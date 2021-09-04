import PropTypes from 'prop-types';

const DEBUG = false;

const Spinner = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div class="bd-example">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

// Spinner.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Spinner.defaultProps = {
//   array: [''],
// };

export default Spinner;

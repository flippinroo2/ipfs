import PropTypes from 'prop-types';

const DEBUG = false;

const TextInput = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Arguments"
        aria-label="Arguments"
        aria-describedby="basic-addon2"
      />
      {/* <span class="input-group-text" id="basic-addon2">
        @example.com
      </span> */}
    </>
  );
};

// TextInput.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// TextInput.defaultProps = {
//   array: [''],
// };

export default TextInput;

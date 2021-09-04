import PropTypes from 'prop-types';

const DEBUG = false;

const Label = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  // To change the size of these Labels you wrapp it in a different type of "<h1...2...3>" element.
  return (
    <h3>
      <span type="label" class="label label-default"></span>
    </h3>
  );
};

// Label.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Label.defaultProps = {
//   array: [''],
// };

export default Label;

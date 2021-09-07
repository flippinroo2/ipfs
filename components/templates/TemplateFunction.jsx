import PropTypes from 'prop-types';

const DEBUG = false;

const TemplateFunction = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return <div className="template_function"></div>;
};

// TemplateFunction.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// TemplateFunction.defaultProps = {
//   array: [''],
// };

export default TemplateFunction;

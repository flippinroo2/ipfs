import PropTypes from 'prop-types';

const DEBUG = false;

const ProgressBar = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }
  const { percentage, minimum, maximum } = props;

  return (
    <div className="progress my-2" style={{ width: '100%' }}>
      <div
        className="progress-bar progress-bar-striped"
        role="progressbar"
        aria-valuenow={`${percentage}`}
        aria-valuemin={`${minimum}`}
        aria-valuemax={`${maximum}`}
        style={{ width: `${percentage}%` }}>
        {/* <span class="sr-only">60% Progress</span> */}
        <span>{`${percentage}% Loaded`}</span>
      </div>
    </div>
  );
};

// ProgressBar.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// ProgressBar.defaultProps = {
//   array: [''],
// };

export default ProgressBar;
